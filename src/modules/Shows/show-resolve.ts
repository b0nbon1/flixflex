import { Resolver, Query, Arg, Mutation } from 'type-graphql';
import { Show } from '../../models/Shows';
import { ShowService } from './show-service';
// import { Context } from '../../types/Context';
import { ShowInput } from './show-input';

@Resolver()
export class ShowResolver {
  constructor(private readonly showService: ShowService) {}

  @Query(() => Show)
  async getAll(): Promise<Show[]> {
    return this.showService.findAll();
  }

  @Query(() => Show)
  async getOne(@Arg('showId') id: string): Promise<Show> {
    return this.showService.findOne(id);
  }

  @Mutation(() => Show)
  async create(
    @Arg('data') data: ShowInput
    // @Ctx() ctx: Context
  ): Promise<Show> {
    return this.showService.add(data);
  }

  @Mutation(() => Show)
  async update(
    @Arg('data') data: ShowInput,
    @Arg('showId') id: string
    // @Ctx() ctx: Context
  ): Promise<Show> {
    return this.showService.update(id, data);
  }

  @Mutation(() => Show)
  async remove(
    @Arg('showId') id: string
    // @Ctx() ctx: Context
  ): Promise<Show> {
    return this.showService.delete(id);
  }
}
