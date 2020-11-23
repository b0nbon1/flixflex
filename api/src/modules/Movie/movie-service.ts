import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Movie } from '../../models/Movie';
import { MovieInput } from './movie-input';

export class MovieService {
  constructor(
    @InjectRepository(Movie)
    private readonly movieRepository: Repository<Movie>
  ) {}

  async findAll(): Promise<Movie[]> {
    return this.movieRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Movie> {
    return this.movieRepository.findOne(id);
  }

  async add(data: MovieInput): Promise<Movie> {
    const movie = this.movieRepository.create(data);
    return this.movieRepository.save(movie);
  }

  async update(id: string, data: MovieInput): Promise<Movie> {
    await this.movieRepository.update(id, data);
    return this.movieRepository.findOne(id);
  }

  async delete(id: string): Promise<Movie> {
    await this.movieRepository.update(id, { isDeleted: true });
    return this.movieRepository.findOne(id);
  }
}
