import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Genre } from '../../models/Genre';
import { GenreService } from './movie-service';
// import { Context } from '../../types/Context';
import { GenreInput } from './genre-input';

@Resolver()
export class GenreResolver {
  constructor(private readonly genreService: GenreService) {}

  @Query(() => Genre)
  async getAll(): Promise<Genre[]> {
    return this.genreService.findAll();
  }

  @Query(() => Genre)
  async getOne(@Arg('movieId') id: string): Promise<Genre> {
    return this.genreService.findOne(id);
  }

  @Mutation(() => Genre)
  async create(
    @Arg('data') data: GenreInput
    // @Ctx() ctx: Context
  ): Promise<Genre> {
    return this.genreService.add(data);
  }

  @Mutation(() => Genre)
  async update(
    @Arg('data') data: GenreInput,
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Genre> {
    return this.genreService.update(id, data);
  }

  @Mutation(() => Genre)
  async remove(
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Genre> {
    return this.genreService.delete(id);
  }
}
