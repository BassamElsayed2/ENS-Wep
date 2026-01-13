/**
 * Safe HTML Parser Utility
 * Uses DOMPurify to sanitize HTML before parsing to prevent XSS attacks
 */

import DOMPurify from 'isomorphic-dompurify';
import parse from 'html-react-parser';

/**
 * Sanitize and parse HTML content safely
 * @param {string} html - HTML string to sanitize and parse
 * @param {object} options - DOMPurify options (optional)
 * @returns {React.ReactElement|string} - Parsed React element or sanitized string
 */
export function safeParse(html, options = {}) {
  if (!html || typeof html !== 'string') {
    return html || '';
  }

  // Default DOMPurify configuration - only allow safe tags and attributes
  const defaultOptions = {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span', 'div',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li',
      'blockquote', 'code', 'pre', 'mark', 'small', 'sub', 'sup'
    ],
    ALLOWED_ATTR: ['href', 'title', 'class', 'id', 'style'],
    ALLOW_DATA_ATTR: false,
    ALLOWED_URI_REGEXP: /^(?:(?:(?:f|ht)tps?|mailto|tel|callto|sms|cid|xmpp|data):|[^a-z]|[a-z+.\-]+(?:[^a-z+.\-:]|$))/i,
  };

  // Merge user options with defaults
  const sanitizeOptions = { ...defaultOptions, ...options };

  // Sanitize HTML
  const cleanHtml = DOMPurify.sanitize(html, sanitizeOptions);

  // Parse sanitized HTML
  return parse(cleanHtml);
}

/**
 * Sanitize HTML without parsing (returns string)
 * @param {string} html - HTML string to sanitize
 * @param {object} options - DOMPurify options (optional)
 * @returns {string} - Sanitized HTML string
 */
export function sanitizeHtml(html, options = {}) {
  if (!html || typeof html !== 'string') {
    return html || '';
  }

  const defaultOptions = {
    ALLOWED_TAGS: [
      'b', 'i', 'em', 'strong', 'a', 'p', 'br', 'span', 'div',
      'h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'ul', 'ol', 'li',
      'blockquote', 'code', 'pre', 'mark', 'small', 'sub', 'sup'
    ],
    ALLOWED_ATTR: ['href', 'title', 'class', 'id', 'style'],
    ALLOW_DATA_ATTR: false,
  };

  const sanitizeOptions = { ...defaultOptions, ...options };

  return DOMPurify.sanitize(html, sanitizeOptions);
}

export default safeParse;
