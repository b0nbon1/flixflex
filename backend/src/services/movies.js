import db from '../models';
import AppError from '../utils/error';

export const createMovie = async (data) => {
  const movieExist = await db.movie.findOne({
    where: { dateOfRelease: data.dateOfRelease, name: data.name, isDeleted: false },
  });
  if (movieExist) {
    throw new AppError('Movie already exists in the database', 409);
  }
  return db.movie.create(data);
};

export const getMovies = async () => {
  const genres = await db.movie.findAll({
    include: {
      model: db.genreMovie,
      as: 'genres',
      attributes: ['id'],
      include: {
        model: db.genre,
        attributes: ['name', 'description'],
      }
    },
    where: {
      isDeleted: false,
    },
  });

  return genres;
};
