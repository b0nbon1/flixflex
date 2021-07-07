import express from 'express';
import { validation } from '../validation';
import { catchErrors } from '../utils/error';
import files from '../services/files';
import Movie from '../controllers/movies';

const { create } = Movie;

const router = express.Router();
const { upload } = files;

/**
 * @swagger
 *
 * /movie:
 *  post:
 *    summary: Create movies
 *    description: This allows admins to create the movies
 *    tags:
 *      - Movie
 *    requestBody:
 *      content:
 *        multipart/form-data:
 *          schema:
 *            type: object
 *            properties:
 *              name:
 *                type: string
 *              genreIds:
 *                type: array
 *                items:
 *                  type: string
 *              length:
 *                type: string
 *              dateOfRelease:
 *                type: string
 *                format: date
 *              status:
 *                type: string
 *                pattern: '(released | coming_soon)'
 *              images:
 *                type: array
 *                items:
 *                  type: string
 *                  format: binary
 *              trailerUrl:
 *                type: string
 *              cast:
 *                type: array
 *                items:
 *                  type: string
 *              creators:
 *                type: array
 *                items:
 *                  type: string
 *              summary:
 *                type: string
 *              rated:
 *                type: string
 *    produces:
 *      application/json:
 *        schema:
 *          type: object
 *          properties:
 *            status:
 *              type: string
 *            message:
 *              type: string
 *            data:
 *              type: string
 *              properties:
 *                id:
 *                  type: string
 *                genreId:
 *                  type: string
 *    responses:
 *      201:
 *        description: created successful
 *      422:
 *        description: validation error
 *      409:
 *        description: Movie already exists
 *      500:
 *        description: server error occured
 */
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

export default router;
