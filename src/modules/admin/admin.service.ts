import {Injectable, NotFoundException} from '@nestjs/common';
import { AdminRepository} from './admin.repository';
import { AdminEntity } from './admin.entity';
import { CreateAdminInput, UpdateAdminInput } from './admin.type'

@Injectable()
export class AdminService{
    constructor(
        private readonly adminRepository: AdminRepository
    ){}

    async findAll(): Promise<AdminEntity[]>{
        return this.adminRepository.find();
    }

    async find(username: string): Promise<AdminEntity>{
        return this.adminRepository.findOne({where: {username: username}})
    }
    
    async create(adminData: CreateAdminInput): Promise<AdminEntity>{
        const adminObj = await this.adminRepository.create(adminData);
        return this.adminRepository.save(adminObj);
    }

    async read(adminId: number): Promise<AdminEntity>{
        const admin = await this.adminRepository.findOne(adminId);
        if(!admin) throw new NotFoundException();
        return admin;
    }

    async update(adminId: number, adminData: UpdateAdminInput): Promise<AdminEntity>{
        const admin = await this.adminRepository.findOne(adminId);
        if(!admin) throw new NotFoundException();
        Object.assign(admin, adminData);
        return this.adminRepository.save(admin);
    }

    async delete(adminId: number): Promise<AdminEntity>{
        const admin = await this.adminRepository.findOne(adminId);
        if(!admin) throw new NotFoundException();
        return this.adminRepository.remove(admin);
    }
}