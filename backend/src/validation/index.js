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
  console.log(`${method}-${path}`);
  if (methodsSupported.includes(method) && Schemas[`${method}-${path}`] !== undefined) {
    const schema = Schemas[`${method}-${path}`];
    const { error, value } = schema.validate(req.body, options);

    if (error) {
      const err = error.details.map(e => (e.message));
      // TODO: check out these lines
      // if (req.file !== undefined) {
      //   unlinkSync(req.file.path);
      // }
      return handleError(422, err, res, 'validation');
    }

    req.body = value;
    console.log(req.body);
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
