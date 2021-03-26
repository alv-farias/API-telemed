import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {HospitalEntity} from './hospital.entity';
import {HospitalService} from './hospital.service';
import {HospitalResolver} from './hospital.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([HospitalEntity])],
    providers:[HospitalService, HospitalResolver]
})
export class HospitalModule{}