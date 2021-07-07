import { createMovie } from '../services/movies';

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
    const imageUrls = images.map((image) => `${req.protocol}://${req.get('host')}/posters/${image.filename}`);
    MovieFields.imageUrls = imageUrls;
    console.log(MovieFields);
    const movie = await createMovie(MovieFields);
    console.log(movie.toJSON());
    return res.json({ message: 'Successfully uploaded files' });
  },
  createGenre: async (req, res) => {
    
  }
};

export default Movie;
