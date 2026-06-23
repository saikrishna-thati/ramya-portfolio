// Error reporting stub - third-party reporting removed
export function reportLovableError(error: unknown, context: Record<string, unknown> = {}) {
  // Log errors to console in development
  if (typeof process !== 'undefined' && process.env?.NODE_ENV === 'development') {
    console.error('Error:', error, context);
  }
}
