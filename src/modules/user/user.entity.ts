import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ObjectType, Field, Int, ID } from '@nestjs/graphql' ;


@Entity()
@ObjectType()
export class UserEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;     

    @Field(() => String)
    @Column()
    name: string;

    @Field(() => Int)
    @Column()
    age: number;

}