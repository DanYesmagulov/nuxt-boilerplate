
/**
 * Action function service
 * @description
 * This service realizes try/catch functionality for our action
 * @function Action
 * @param {Function} action - action's main function that takes request and returns Promise of response
 * @param {Function} onError - function, that fires when some error/exeption is happed
 * @returns {void}
 */
module.exports = (action, onError) => {
  try {
    if (typeof action === 'function') {
      action();
    }
  } catch(e) {
    console.log("🐞: e", e);
    if (typeof onError === 'function') {
      onError(e);
    }
  }
}
