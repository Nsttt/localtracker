import { Arg, Mutation, Query, Resolver, UseMiddleware } from 'type-graphql';

import { isAuth } from '../middlewares/isAuth';
import { AnimeInput } from './inputs/AnimeInput';
import { Anime } from '../../entities/Anime';

@Resolver(Anime)
export class AnimeResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Anime)
  async addAnime(
    @Arg('anime')
    animeInput: AnimeInput,
  ): Promise<Anime> {
    return Anime.create(animeInput).save();
  }

  @UseMiddleware(isAuth)
  @Query(() => [Anime])
  async getAnimes() {
    return Anime.find();
  }
}
