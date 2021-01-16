import { Resolver, Query, Arg, Mutation } from 'type-graphql';

import { Cinema } from '../../models/Cinema';
import { CinemaService } from './cinema-service';
// import { Context } from '../../types/Context';
import { CinemaInput } from './cinema-input';

@Resolver()
export class CinemaResolver {
  constructor(private readonly cinemaService: CinemaService) {}

  @Query(() => [Cinema])
  async getAllCinemas(): Promise<Cinema[]> {
    return this.cinemaService.findAll();
  }

  @Query(() => Cinema)
  async getOneCinema(@Arg('cinemaId') id: string): Promise<Cinema> {
    return this.cinemaService.findOne(id);
  }

  @Mutation(() => Cinema)
  async createCinema(
    @Arg('data') data: CinemaInput
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.add(data);
  }

  @Mutation(() => Cinema)
  async updateCinema(
    @Arg('data') data: CinemaInput,
    @Arg('cinemaId') id: string
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.update(id, data);
  }

  @Mutation(() => Cinema)
  async removeCinema(
    @Arg('cinemaId') id: string
    // @Ctx() ctx: Context
  ): Promise<Cinema> {
    return this.cinemaService.delete(id);
  }
}
