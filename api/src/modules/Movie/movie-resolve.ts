import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Movie } from '../../models/Movie';
import { MovieService } from './movie-service';
// import { Context } from '../../types/Context';
import { MovieInput } from './movie-input';

@Resolver()
export class MovieResolver {
  constructor(private readonly movieService: MovieService) {}

  @Query(() => Movie)
  async getAll(): Promise<Movie[]> {
    return this.movieService.findAll();
  }

  @Query(() => Movie)
  async getOne(@Arg('movieId') id: string): Promise<Movie> {
    return this.movieService.findOne(id);
  }

  @Mutation(() => Movie)
  async create(
    @Arg('data') data: MovieInput
    // @Ctx() ctx: Context
  ): Promise<Movie> {
    return this.movieService.add(data);
  }

  @Mutation(() => Movie)
  async update(
    @Arg('data') data: MovieInput,
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Movie> {
    return this.movieService.update(id, data);
  }

  @Mutation(() => Movie)
  async remove(
    @Arg('movieId') id: string
    // @Ctx() ctx: Context
  ): Promise<Movie> {
    return this.movieService.delete(id);
  }
}
