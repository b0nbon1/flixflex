import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Cinema } from '../../models/Cinema';
import { CinemaService } from './cinema-service';
// import { Context } from '../../types/Context';
import { CinemaInput } from './cinema-input';

@Resolver()
export class GenreResolver {
  constructor(private readonly cinemaService: CinemaService) {}

  @Query(() => Cinema)
  async getAll(): Promise<Cinema[]> {
    return this.cinemaService.findAll();
  }

  @Query(() => Cinema)
  async getOne(@Arg('movieId') id: string): Promise<Cinema> {
    return this.cinemaService.findOne(id);
  }

  @Mutation(() => Cinema)
  async create(
    @Arg('data') data: CinemaInput
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.add(data);
  }

  @Mutation(() => Cinema)
  async update(
    @Arg('data') data: CinemaInput,
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.update(id, data);
  }

  @Mutation(() => Cinema)
  async remove(
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.delete(id);
  }
}
