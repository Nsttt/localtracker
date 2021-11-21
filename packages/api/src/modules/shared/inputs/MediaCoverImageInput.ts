import { MediaCoverImage } from 'src/entities/shared';
import { Field, ID, InputType } from 'type-graphql';

@InputType()
export default class MediaCoverImageInput implements Partial<MediaCoverImage> {
  @Field(() => ID)
  readonly id: number;

  @Field({ nullable: true })
  extraLarge: string;

  @Field({ nullable: true })
  large: string;

  @Field({ nullable: true })
  medium: string;

  @Field({ nullable: true })
  color: string;
}
