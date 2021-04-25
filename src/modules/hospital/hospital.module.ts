import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {HospitalService} from './hospital.service';
import {HospitalResolver} from './hospital.resolver';
import { HospitalRepository } from './hospital.repository';
import { MedicoRepository } from '../medico/medico.repository';
import { PacienteRepository} from '../paciente/paciente.repository';

@Module({
    imports:[TypeOrmModule.forFeature([HospitalRepository, MedicoRepository, PacienteRepository])],
    providers:[HospitalService, HospitalResolver]
})
export class HospitalModule{}