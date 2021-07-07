import db from '../models';
import AppError from '../utils/error';

export const createGenre = async (data) => {
  const genreExist = await db.genre.findOne({
    where: { name: data.name },
  });
  if (genreExist) {
    throw new AppError('Genre already exists in the database', 409);
  }
  return db.genre.create(data);
};

export const getGenre = async () => {
  const genres = await db.genre.find({
    where: {
      isDeleted: false,
    },
  });

  return genres;
};

export const addGenreMovies = async (genreIds, movieId) => {
  const payload = genreIds.map(id => ({
    genreId: id,
    movieId
  }));

  const genres = await db.genreMovie.bulkCreate(payload);

  return genres;
};
