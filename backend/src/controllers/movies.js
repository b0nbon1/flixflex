import { createMovie, getMovies } from '../services/movies';
import { handleSuccess } from '../utils/response';
import { createGenre, getGenre, addGenreMovies } from '../services/genres';

const Movie = {
  /**
   * POST method to create a Movie
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {void}
   */
  create: async (req, res) => {
    const { genreIds, ...MovieFields } = req.body;
    const images = req.files || [];
    const imageUrls = images.map(
      (image) => `${req.protocol}://${req.get('host')}/posters/${image.filename}`
    );
    MovieFields.imageUrls = imageUrls;
    const movie = await createMovie(MovieFields);
    const genres = await addGenreMovies((genreIds?.split(',') || []), movie.id);
    movie.genres = genres;
    return handleSuccess(201, 'Successfully created movie', res, movie);
  },

  /**
   * Get method to fetch genre
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {void}
   */
  findAll: async (req, res) => {
    const movies = await getMovies();
    return handleSuccess(200, 'Successfully fetched movies', res, movies);
  },

  /**
   * POST method to create a Genre
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {void}
   */
  createGenre: async (req, res) => {
    const { name, description } = req.body;
    const genre = await createGenre({ name, description });
    return handleSuccess(201, 'Successfully created genre', res, genre);
  },

  /**
   * Get method to fetch genre
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {void}
   */
  findAllGenres: async (req, res) => {
    const genres = await getGenre();
    return handleSuccess(200, 'Successfully fetched genres', res, genres);
  },
};

export default Movie;
