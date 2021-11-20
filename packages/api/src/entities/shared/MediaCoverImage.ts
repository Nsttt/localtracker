import { Field, ID, ObjectType } from 'type-graphql';
import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@ObjectType()
@Entity()
export default class MediaCoverImage {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  readonly id: number;

  @Field({ nullable: true })
  @Column({ nullable: true })
  extraLarge: string | null;

  @Field({ nullable: true })
  @Column({ nullable: true })
  large: string | null;

  @Field({ nullable: true })
  @Column({ nullable: true })
  medium: string | null;

  @Field({ nullable: true })
  @Column({ nullable: true })
  color: string | null;
}
