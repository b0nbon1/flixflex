import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Cinema } from '../../models/Cinema';
import { CinemaInput } from './cinema-input';

export class CinemaService {
  constructor(
    @InjectRepository(Cinema)
    private readonly cinemaRepository: Repository<Cinema>
  ) {}

  async findAll(): Promise<Cinema[]> {
    return this.cinemaRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Cinema> {
    return this.cinemaRepository.findOne(id);
  }

  async add(data: CinemaInput): Promise<Cinema> {
    const cinema = this.cinemaRepository.create(data);
    return this.cinemaRepository.save(cinema);
  }

  async update(id: string, data: CinemaInput): Promise<Cinema> {
    await this.cinemaRepository.update(id, data);
    return this.cinemaRepository.findOne(id);
  }

  async delete(id: string): Promise<Cinema> {
    await this.cinemaRepository.update(id, { isDeleted: true });
    return this.cinemaRepository.findOne(id);
  }
}
