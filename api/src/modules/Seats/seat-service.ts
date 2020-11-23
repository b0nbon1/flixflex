import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Seat } from '../../models/Seat';
import { SeatInput } from './seat-input';

export class SeatService {
  constructor(
    @InjectRepository(Seat)
    private readonly seatRepository: Repository<Seat>
  ) {}

  async findAll(): Promise<Seat[]> {
    return this.seatRepository.find({ where: { isDeleted: false } });
  }

  async findOne(id: string): Promise<Seat> {
    return this.seatRepository.findOne(id);
  }

  async add(data: SeatInput): Promise<Seat> {
    const seat = this.seatRepository.create(data);
    return this.seatRepository.save(seat);
  }

  async update(id: string, data: SeatInput): Promise<Seat> {
    await this.seatRepository.update(id, data);
    return this.seatRepository.findOne(id);
  }

  async delete(id: string): Promise<Seat> {
    await this.seatRepository.update(id, { isDeleted: true });
    return this.seatRepository.findOne(id);
  }
}
