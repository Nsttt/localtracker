import { Arg, Mutation, Resolver, UseMiddleware } from 'type-graphql';

import { isAuth } from '../middlewares/isAuth';
import { AnimeInput } from './inputs/AnimeInput';
import { Anime } from '../../entities/Anime';

@Resolver()
export class AnimeResolver {
  @UseMiddleware(isAuth)
  @Mutation(() => Anime)
  async addAnime(
    @Arg('anime')
    animeInput: AnimeInput,
  ): Promise<Anime> {
    const anime = await Anime.create(animeInput);
    return anime.save();
  }
}
