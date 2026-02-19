const express = require('express');
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const app = express();
const PORT = process.env.PORT || 3000;
const DATA_FILE = path.join(__dirname, 'events.json');

// Middleware
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// --- File helpers ---

function readEvents() {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf8');
    return JSON.parse(raw);
  } catch (err) {
    return {};
  }
}

function writeEvents(data) {
  fs.writeFileSync(DATA_FILE, JSON.stringify(data, null, 2), 'utf8');
}

function makeId(existing) {
  let id;
  do {
    id = crypto.randomBytes(3).toString('hex');
  } while (existing[id]);
  return id;
}

// --- Routes ---

// POST /api/events — create a new event
app.post('/api/events', (req, res) => {
  const { title, options } = req.body;

  // Validate title
  if (!title || typeof title !== 'string' || title.trim() === '') {
    return res.status(400).json({ error: 'Event title is required.' });
  }

  // Validate options
  if (!Array.isArray(options) || options.length < 2) {
    return res.status(400).json({ error: 'Please provide at least 2 time options.' });
  }
  if (options.length > 30) {
    return res.status(400).json({ error: 'You can have at most 30 time options.' });
  }
  const cleanOptions = options.map(o => (typeof o === 'string' ? o.trim() : ''));
  if (cleanOptions.some(o => o === '')) {
    return res.status(400).json({ error: 'All time options must have a value.' });
  }

  const events = readEvents();
  const id = makeId(events);

  events[id] = {
    id,
    title: title.trim(),
    createdAt: new Date().toISOString(),
    options: cleanOptions.map((label, i) => ({ id: `opt_${i}`, label })),
    votes: [],
  };

  writeEvents(events);

  res.status(201).json({
    id,
    voteUrl: `/vote.html?id=${id}`,
    resultsUrl: `/results.html?id=${id}`,
  });
});

// GET /api/events/:id — fetch a single event
app.get('/api/events/:id', (req, res) => {
  const events = readEvents();
  const event = events[req.params.id];
  if (!event) {
    return res.status(404).json({ error: 'Event not found.' });
  }
  res.json(event);
});

// POST /api/events/:id/votes — submit or update a vote
app.post('/api/events/:id/votes', (req, res) => {
  const events = readEvents();
  const event = events[req.params.id];
  if (!event) {
    return res.status(404).json({ error: 'Event not found.' });
  }

  const { name, selections } = req.body;

  // Validate name
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Please enter your name.' });
  }
  if (name.trim().length > 50) {
    return res.status(400).json({ error: 'Name must be 50 characters or fewer.' });
  }

  // Validate selections
  if (!Array.isArray(selections) || selections.length === 0) {
    return res.status(400).json({ error: 'Please select at least one time option.' });
  }
  const validOptionIds = new Set(event.options.map(o => o.id));
  for (const sel of selections) {
    if (!validOptionIds.has(sel)) {
      return res.status(400).json({ error: 'Invalid option selected.' });
    }
  }

  const cleanName = name.trim();
  const newVote = {
    name: cleanName,
    votedAt: new Date().toISOString(),
    selections,
  };

  // Replace existing vote by same name (case-insensitive), or append
  const lowerName = cleanName.toLowerCase();
  const existingIndex = event.votes.findIndex(v => v.name.toLowerCase() === lowerName);
  if (existingIndex !== -1) {
    event.votes[existingIndex] = newVote;
  } else {
    event.votes.push(newVote);
  }

  writeEvents(events);
  res.json({ ok: true });
});

// Start server
app.listen(PORT, () => {
  console.log(`Event Tool is running!`);
  console.log(`Open this in your browser: http://localhost:${PORT}`);
});
