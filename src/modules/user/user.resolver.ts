import { Mutation, Query, Resolver, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserEntity } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user.type';

@Resolver()
export class UserResolver{
    constructor(
        private readonly userService: UserService
    ){}
    
    @Query(() => [UserEntity])
    async users(): Promise<UserEntity[]>{
        return await this.userService.findAll();
    }

    @Mutation(() => UserEntity)
    async createUser(
        @Args('userData', {type: () => CreateUserInput }) userData: CreateUserInput
        ):Promise<UserEntity>{
        return await this.userService.create(userData);
    }

    @Mutation(() => UserEntity)
    async readUser(
        @Args('userId', {type: () => Int})  userId: number
        ): Promise<UserEntity>{
        return await this.userService.read(userId);
    }

    @Mutation(() => UserEntity)
    async updaterUser(
        @Args('userData', {type: () => UpdateUserInput }) userData: UpdateUserInput,
        @Args('userId', {type: () => Int})  userId: number
        ): Promise<UserEntity>{
        return await this.userService.update(userId, userData);
    }


    @Mutation(() => Boolean)
    async deleteUser(
        @Args('userId', {type: () => Int})  userId: number
        ): Promise<Boolean>{
        const del = await this.userService.delete(userId);
        if(del) return true;
        return false;
    }


}