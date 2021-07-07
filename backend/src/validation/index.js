import fs from 'fs';
import { handleError } from '../utils/response';
import Schemas from './schemas';

const options = {
  abortEarly: false, // include all errors
  allowUnknown: true, // ignore unknown props
  stripUnknown: true // remove unknown props
};

/**
 * Validates the 'post', 'put', 'patch' routes using the defined schemas
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {void}
 */
export const validation = (req, res, next) => {
  const methodsSupported = ['post', 'put', 'patch'];
  const { path } = req.route;
  const method = req.method.toLowerCase();
  // eslint-disable-next-line no-console
  console.log(`${method}-${path}`);
  if (methodsSupported.includes(method) && Schemas[`${method}-${path}`] !== undefined) {
    const schema = Schemas[`${method}-${path}`];
    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const err = error.details.map(e => ({ message: e.message, field: e.path[0] }));

      // delete files on error.
      if (req.files !== undefined) {
        req.files.forEach(file => {
          fs.unlinkSync(file.path);
        });
      }
      return handleError(422, err, res, 'validation');
    }

    req.body = value;
    // console.log(req.body);
    return next();
  }

  return handleError(405, 'Undefined method', res);
};

/**
 * Validates the get routes using the defined schemas
 * @param {object} req
 * @param {object} res
 * @param {function} next
 * @returns {void}
 */
export const validateSearch = (req, res, next) => {
  const { path } = req.route;
  const schema = Schemas[path];

  const { error, value } = schema.validate(req.query, options);
  if (error) {
    const err = error.details.map(e => (e.message));
    return handleError(400, err, res);
  }
  req.body = value;
  next();
};
