import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';
import { AdminRepository } from './admin.repository';

@Module({
    imports: [TypeOrmModule.forFeature([AdminRepository])],
    providers: [AdminService, AdminResolver],
    exports: [AdminService]
})
 export class AdminModule{}