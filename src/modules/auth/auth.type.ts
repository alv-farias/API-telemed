import { ArgsType, Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class Token{
    @Field(() => String)
    access_token: string;
}

@ArgsType()
export class LoginInput{
    @Field(() => String)
    username: string;

    @Field(() => String)
    password: string;
}