import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AdminEntity } from './admin.entity';
import { AdminService } from './admin.service';
import { AdminResolver } from './admin.resolver';

@Module({
    imports: [TypeOrmModule.forFeature([AdminEntity])],
    providers: [AdminService, AdminResolver],
    exports: [AdminService]
})
 export class AdminModule{}