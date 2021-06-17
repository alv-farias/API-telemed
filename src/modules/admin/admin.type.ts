import { Field, ID, InputType, Int } from '@nestjs/graphql';

@InputType()
export class CreateAdminInput{

    @Field(() => String)
    name: string;

    @Field(() => String)
    email: string;

    @Field(() => String)
    username: string;

    @Field(() => String)
    password: string;

}

@InputType()
export class UpdateAdminInput{

    @Field(() => String, {nullable: true})
    name?: string;

    @Field(() => String, {nullable: true})
    email?: string;

    @Field(() => String, {nullable: true})
    username?: string;

    @Field(() => String, {nullable: true})
    password?: string;
}