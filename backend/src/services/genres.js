import db from '../models';
import AppError from '../utils/error';

export const createGenre = async (data) => {
  const genreExist = await db.genre.findOne({
    where: { name: data.name?.toLowerCase(), isDeleted: false },
  });
  if (genreExist) {
    throw new AppError(`Genre ${data.name} already exists in the database`, 409);
  }
  return db.genre.create(data);
};

export const getGenre = async () => {
  const genres = await db.genre.findAll({
    where: {
      isDeleted: false,
    },
  });

  return genres;
};

export const addGenreMovies = async (genreIds, movieId) => {
  const payload = genreIds.map(id => ({
    genreId: id.trim(),
    movieId
  }));

  const genres = await db.genreMovie.bulkCreate(payload);

  return genres;
};
