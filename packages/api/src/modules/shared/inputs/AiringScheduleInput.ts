import { Field, ID, InputType } from 'type-graphql';
import { AiringSchedule } from 'src/entities/shared';

@InputType()
export default class AiringScheduleInput implements Partial<AiringSchedule> {
  @Field(() => ID)
  readonly id: number;

  @Field({ nullable: true })
  airingAt: number;

  @Field({ nullable: true })
  timeUntilAiring: number;

  @Field({ nullable: true })
  episode: number;
}
