import { applyDecorators, SetMetadata, UseGuards } from '@nestjs/common';
import { Roles } from 'src/enums/role.enum';
import { JwtGuard } from 'src/guards/jwt.guard';
import { RoleGuards } from 'src/guards/role.guard';

export const Auth = (...roles: Roles[]) => {
    return applyDecorators(
        SetMetadata('roles', roles),
        UseGuards(JwtGuard, RoleGuards),
    )
}