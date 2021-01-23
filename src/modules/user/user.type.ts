import { Field, ID, InputType, Int } from "@nestjs/graphql";


@InputType()
export class CreateUserInput{
    
    @Field(() => String)
    name: string;

    @Field(() => Int)
    age: number;

}


@InputType()
export class UpdateUserInput{
    
    @Field(() => String, {nullable: true})
    name?: string;

    @Field(() => Int, {nullable: true})
    age?: number;

}