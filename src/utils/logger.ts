// @NOTE: This util can extend as a multi-purpose log manager.
// Eg. Export frontend logs to logging services like Rollbar, Sentry or any other.
// But, now, here just exporting native console object only.
const logger = console;
export default logger;
