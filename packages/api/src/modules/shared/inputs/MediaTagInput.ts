import { MediaTag } from 'src/entities/shared';
import { Field, ID, InputType } from 'type-graphql';

@InputType()
export default class MediaTagInput implements Partial<MediaTag> {
  @Field(() => ID)
  id: number;

  @Field()
  name: string;

  @Field({ nullable: true })
  description: string;

  @Field()
  isAdult: boolean;
}
