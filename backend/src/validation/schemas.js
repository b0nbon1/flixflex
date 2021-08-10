import Joi from 'joi';

export const schemaErrorMessage = (message) => () => message;

const createMovies = Joi.object({
  genreIds: Joi.string().allow(null, ''),
  name: Joi.string().max(60).required(),
  length: Joi.string().required(),
  dateOfRelease: Joi.date().iso().required(),
  status: Joi.string().valid('released', 'coming_soon').required(),
  imageUrl: Joi.array().allow(null, ''),
  trailerUrl: Joi.string().pattern(
    /(.*www\.youtube\.com.*)/
  ).allow(null, '').messages({
    'string.pattern.base': 'Your trailer url must be from youtube.com'
  }),
  cast: Joi.string().allow(null, ''),
  creators: Joi.string().allow(null, ''),
  summary: Joi.string().max(1000).allow(null, ''),
  rated: Joi.string().max(50).required(),
});

const createGenres = Joi.object({
  name: Joi.string().max(60).required(),
  description: Joi.string().required(),
});

export default {
  'post-/movie': createMovies,
  'post-/genre': createGenres,
};
