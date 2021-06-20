import { ArgsType, Field, Int, ObjectType } from '@nestjs/graphql';
import { Roles } from 'src/enums/role.enum';

@ObjectType()
export class Token{
    @Field(() => String)
    access_token: string;

    @Field(() => String)
    username: string;

    @Field(() => Int)
    sub: number;

    @Field(() => Roles)
    role: Roles;
}

@ArgsType()
export class LoginInput{
    @Field(() => String)
    username: string;

    @Field(() => String)
    password: string;
}