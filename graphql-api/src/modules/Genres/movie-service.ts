import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Genre } from '../../models/Genre';
import { GenreInput } from './genre-input';

export class GenreService {
  constructor(
    @InjectRepository(Genre)
    private readonly genreRepository: Repository<Genre>
  ) {}

  async findAll(): Promise<Genre[]> {
    return this.genreRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Genre> {
    return this.genreRepository.findOne(id);
  }

  async add(data: GenreInput): Promise<Genre> {
    const movie = this.genreRepository.create(data);
    return this.genreRepository.save(movie);
  }

  async update(id: string, data: GenreInput): Promise<Genre> {
    await this.genreRepository.update(id, data);
    return this.genreRepository.findOne(id);
  }

  async delete(id: string): Promise<Genre> {
    await this.genreRepository.update(id, { isDeleted: true });
    return this.genreRepository.findOne(id);
  }
}
