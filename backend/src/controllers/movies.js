// import { createMovie } from '../services/movies';

const Movie = {
  /**
   * POST method to create a Movie
   * @param {object} req
   * @param {object} res
   * @param {function} next
   * @returns {void}
   */
  create: (req, res) => {
    // const { genreIds, ...MovieFields } = req.body;
    // const movie = createMovie(MovieFields);
    console.log(req.body);
    console.log(req.files);
    return res.json({ message: 'Successfully uploaded files' });
  },
};

export default Movie;
