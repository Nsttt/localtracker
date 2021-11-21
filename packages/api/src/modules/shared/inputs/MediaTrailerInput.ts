import { Field, ID, InputType } from 'type-graphql';
import { MediaTrailer } from 'src/entities/shared';

@InputType()
export default class MediaTrailerInput implements Partial<MediaTrailer> {
  @Field(() => ID)
  readonly id: number;

  @Field({ nullable: true })
  site: string;

  @Field({ nullable: true })
  thumbnail: string;
}
