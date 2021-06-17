import { Mutation, Query, Resolver, Args, Int } from '@nestjs/graphql';
import { AdminService } from './admin.service';
import { AdminEntity } from './admin.entity';
import { CreateAdminInput, UpdateAdminInput } from './admin.type';
import { Auth } from 'src/decorators/auth.decorator';
import { Roles } from 'src/enums/role.enum';

@Resolver()
export class AdminResolver{
    constructor(
        private readonly adminService: AdminService
    ){}

    @Query(() => [AdminEntity])
    async admins(): Promise<AdminEntity[]>{
        return await this.adminService.findAll();
    }

    @Mutation(() => AdminEntity)
    async createAdmin(
        @Args('adminData', {type: () => CreateAdminInput}) adminData: CreateAdminInput
    ): Promise<AdminEntity>{
        return await this.adminService.create(adminData);
    }

    @Mutation(() => AdminEntity)
    async readAdmin(
        @Args('adminId', {type: () => Int}) adminId: number
    ): Promise<AdminEntity>{
        return await this.adminService.read(adminId);
    }

    @Mutation(() => AdminEntity)
    async updateAdmin(
        @Args('adminId', {type: () => Int}) adminId: number,
        @Args('adminData', {type: () => UpdateAdminInput}) adminData: UpdateAdminInput
    ): Promise<AdminEntity>{
        return await this.adminService.update(adminId, adminData);
    }
    
    @Auth(Roles.ADMIN)

    @Mutation(() => Boolean)
    async deleteAdmin(
        @Args('adminId', {type: () => Int}) adminId: number
    ): Promise<Boolean>{
        const del = await this.adminService.delete(adminId);
        if(del) return true;
        return false;
    }
}