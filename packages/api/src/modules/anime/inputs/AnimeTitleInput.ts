import { AnimeTitle } from 'src/entities/Anime';
import { Field, InputType } from 'type-graphql';

@InputType()
export class AnimeTitleInput implements Partial<AnimeTitle> {
  @Field()
  userPreferred: string;

  @Field({ nullable: true })
  romaji: string;

  @Field({ nullable: true })
  english: string;

  @Field({ nullable: true })
  native: string;
}
