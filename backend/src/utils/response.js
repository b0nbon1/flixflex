/**
 * handleSuccess Function
 * @param {int} statusCode - Status code
 * @param {string} message - Message
 * @param {object} res - Response
 * @param {object | null} data - Data
 * @return {object} - Returned Formatted Success response object
 */
export const handleSuccess = (statusCode, message, res, data = null) => res.status(statusCode).json(
  data
    ? {
      status: 'success',
      message,
      data,
    }
    : {
      status: 'success',
      message,
    }
);

/**
 * handleError Function
 * @param {int} statusCode - Status code
 * @param {string} errorMessage - Message
 * @param {object} res - Response
 * @returns {object} - Returned Formatted Error response object
 */
export const handleError = (statusCode, errorMessage, res) => res.status(statusCode).json({
  status: 'error',
  errorMessage,
});
