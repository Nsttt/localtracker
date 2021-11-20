import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class MediaTrailer {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field()
  @Column({ nullable: true })
  site: string | null;

  @Field()
  @Column({ nullable: true })
  thumbnail: string | null;
}
