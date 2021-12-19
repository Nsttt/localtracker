import { Arg, Mutation, Query, Resolver } from 'type-graphql';

import { AnimeInput } from './inputs/AnimeInput';
import { Anime } from '../../entities/Anime';

@Resolver(Anime)
export class AnimeResolver {
  @Mutation(() => Anime)
  async addAnime(
    @Arg('anime')
    animeInput: AnimeInput,
  ): Promise<Anime> {
    return Anime.create(animeInput).save();
  }

  @Query(() => [Anime])
  async getAnimes() {
    return Anime.find();
  }
}
