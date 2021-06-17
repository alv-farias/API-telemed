import { Logger, UseGuards } from "@nestjs/common";
import { Args, Mutation, Resolver } from "@nestjs/graphql";
import { CurrentUser } from "src/decorators/currentUser.decorator";
import { GqlAuthGuard } from "src/guards/graphql.guard";
import { AuthService } from "./auth.service";
import { LoginInput, Token } from "./auth.type";

@Resolver()
export class AuthResolver {
    constructor(
        private authService: AuthService
    ){}

    @UseGuards(GqlAuthGuard)
    @Mutation(() => Token)
    async login(@Args() args: LoginInput, @CurrentUser() user): Promise<Token>{
        return await this.authService.login(user);
    }
}
