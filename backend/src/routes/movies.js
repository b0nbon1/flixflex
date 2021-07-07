import express from 'express';
import { validation } from '../validation';
import { catchErrors } from '../utils/error';
import files from '../services/files';
import Movie from '../controllers/movies';

const { create, findAll, createGenre, findAllGenres } = Movie;

const router = express.Router();
const { upload } = files;

router.post(
  '/movie',
  upload(
    'images',
    'movies_posters',
    3,
    ['image/png', 'image/jpg', 'image/jpeg'],
    'Only .png, .jpg and .jpeg formats allowed!'
  ),
  validation,
  catchErrors(create)
);

router.get(
  '/movies',
  catchErrors(findAll)
);

router.post(
  '/genre',
  validation,
  catchErrors(createGenre)
);

router.get(
  '/genres',
  catchErrors(findAllGenres)
);

export default router;
