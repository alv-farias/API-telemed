import { CanActivate, ExecutionContext, Injectable } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { GqlExecutionContext } from '@nestjs/graphql';
import { Roles } from 'src/enums/role.enum';

@Injectable()
export class RoleGuards implements CanActivate{
    constructor(
        private reflector: Reflector,
    ){}

    canActivate(context: ExecutionContext): boolean{
        const roles = 
            this.reflector.get<string[]>('roles', context.getHandler())||
            this.reflector.get<string[]>('roles', context.getClass());

        if(!roles?.length) return true;

        const ctx = GqlExecutionContext.create(context);
        const user = ctx.getContext().req.user;

        return roles.some((role: Roles) => user.role?.includes(role))
    }
}