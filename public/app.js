// Shared utilities used by all three pages

/**
 * Fetch a JSON API endpoint. Throws an Error with a human-readable message on failure.
 * @param {string} url
 * @param {RequestInit} [options]
 * @returns {Promise<any>}
 */
async function apiFetch(url, options) {
  const res = await fetch(url, options);
  const data = await res.json();
  if (!res.ok) {
    throw new Error(data.error || `Request failed (${res.status})`);
  }
  return data;
}

/**
 * Format a datetime-local input value (e.g. "2026-02-21T12:00")
 * into a human-readable label like "Sat, Feb 21 at 12:00 PM".
 * @param {string} value
 * @returns {string}
 */
function formatDateTime(value) {
  if (!value) return '';
  // datetime-local values lack timezone info; treat as local time
  const [datePart, timePart] = value.split('T');
  const [year, month, day] = datePart.split('-').map(Number);
  const [hour, minute] = timePart.split(':').map(Number);
  const d = new Date(year, month - 1, day, hour, minute);
  return d.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/**
 * Format a Date object as "Sat, Feb 21" (no time).
 * @param {Date} d
 * @returns {string}
 */
function formatDate(d) {
  return d.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Format a Date object plus an "HH:MM" time string as "Sat, Feb 21 at 3:00 PM".
 * @param {Date} d
 * @param {string} timeStr  "HH:MM"
 * @returns {string}
 */
function formatDateWithTime(d, timeStr) {
  const [h, m] = timeStr.split(':').map(Number);
  const dt = new Date(d.getFullYear(), d.getMonth(), d.getDate(), h, m);
  return dt.toLocaleString('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  });
}

/**
 * Show an error message in the element with id "error-msg".
 * @param {string} message
 */
function showError(message) {
  const el = document.getElementById('error-msg');
  if (!el) return;
  el.textContent = message;
  el.classList.remove('hidden');
}

/**
 * Hide the error message element.
 */
function hideError() {
  const el = document.getElementById('error-msg');
  if (el) el.classList.add('hidden');
}
