/**
 * handleSuccess Function
 * @param {int} statusCode - Status code
 * @param {string} message - Message
 * @param {object} res - Response
 * @param {object | null} data - Data
 * @return {object} - Returned Formatted Success response object
 */
export const handleSuccess = (statusCode, message, res, data = null) => res.status(statusCode).json(
  {
    status: 'success',
    message,
    data,
  }
);

/**
 * handleError Function
 * @param {int} statusCode - Status code
 * @param {string} errorMessage - Message
 * @param {object} res - Response
 * @param {string} type - Error type
 * @returns {object} - Returned Formatted Error response object
 */
export const handleError = (
  statusCode,
  errorMessage,
  res,
  type = null
) => res.status(statusCode).json({
  status: 'error',
  errorMessage,
  type
});
