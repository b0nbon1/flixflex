import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Show } from '../../models/Shows';
import { ShowInput } from './show-input';

export class ShowService {
  constructor(
    @InjectRepository(Show)
    private readonly showRepository: Repository<Show>
  ) {}

  async findAll(): Promise<Show[]> {
    return this.showRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Show> {
    return this.showRepository.findOne(id);
  }

  async add(data: ShowInput): Promise<Show> {
    const show = this.showRepository.create(data);
    return this.showRepository.save(show);
  }

  async update(id: string, data: ShowInput): Promise<Show> {
    await this.showRepository.update(id, data);
    return this.showRepository.findOne(id);
  }

  async delete(id: string): Promise<Show> {
    await this.showRepository.update(id, { isDeleted: true });
    return this.showRepository.findOne(id);
  }
}
