import { Arg, Mutation, Resolver } from 'type-graphql';

import { AnimeInput } from './create/AnimeInput';
import { Anime } from '../../entities/Anime';

@Resolver()
export class RegisterResolver {
  @Mutation(() => Anime)
  async create(@Arg('data') {}: AnimeInput): Promise<Anime> {
    const anime = await Anime.create({}).save();

    return anime;
  }
}
