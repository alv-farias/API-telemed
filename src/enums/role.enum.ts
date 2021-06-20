import { registerEnumType} from '@nestjs/graphql';

export enum Roles{
    USER = 'USER',
    ADMIN = 'ADMIN'
}

registerEnumType(Roles, {
    name: 'Roles',
})

export const RolesResolver: Record<keyof typeof Roles, any> = {
    USER: 'USER',
    ADMIN: 'ADMIN'
}