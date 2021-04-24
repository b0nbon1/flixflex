import db from '../models';
import AppError from '../utils/error';

export const createMovie = async (data) => {
  const movieExist = await db.Movie.findOne({
    where: { dateOfRelease: data.dateOfRelease, name: data.name },
  });
  if (movieExist) {
    throw new AppError('Movie already exists in the database', 409);
  }
  return db.Movie.create(data);
};

export const getMovie = () => {};