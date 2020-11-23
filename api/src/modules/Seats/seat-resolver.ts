import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Seat } from '../../models/Seat';
import { SeatService } from './seat-service';
// import { Context } from '../../types/Context';
import { SeatInput } from './seat-input';

@Resolver()
export class GenreResolver {
  constructor(private readonly seatService: SeatService) {}

  @Query(() => Seat)
  async getAll(): Promise<Seat[]> {
    return this.seatService.findAll();
  }

  @Query(() => Seat)
  async getOne(@Arg('movieId') id: string): Promise<Seat> {
    return this.seatService.findOne(id);
  }

  @Mutation(() => Seat)
  async create(
    @Arg('data') data: SeatInput
    // @Ctx() ctx: Context
  ): Promise<Seat> {
    return this.seatService.add(data);
  }

  @Mutation(() => Seat)
  async update(
    @Arg('data') data: SeatInput,
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Seat> {
    return this.seatService.update(id, data);
  }

  @Mutation(() => Seat)
  async remove(
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Seat> {
    return this.seatService.delete(id);
  }
}
