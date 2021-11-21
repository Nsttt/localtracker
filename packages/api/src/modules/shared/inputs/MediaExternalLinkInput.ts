import { Field, ID, InputType } from 'type-graphql';
import { MediaExternalLink } from 'src/entities/shared';

@InputType()
export default class MediaExternalLinkInput
  implements Partial<MediaExternalLink>
{
  @Field(() => ID)
  readonly id: number;

  @Field()
  url: string;

  @Field()
  site: string;
}
