import Joi from 'joi';

export const schemaErrorMessage = (message) => () => message;

const createMovies = Joi.object({
  genreIds: Joi.string().allow(null, ''),
  name: Joi.string().max(60).required(),
  length: Joi.string().required(),
  dateOfRelease: Joi.date().iso().allow(null, ''),
  status: Joi.string().valid('released', 'coming_soon').required(),
  imageUrl: Joi.array().allow(null, ''),
  trailerUrl: Joi.string().uri().allow(null, ''),
  cast: Joi.string().allow(null, ''),
  creators: Joi.string().allow(null, ''),
  summary: Joi.string().max(1000).allow(null, ''),
  rated: Joi.string().max(50).required(),
});

export default {
  'post-/movie': createMovies,
};
