import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MedicoService} from './medico.service';
import {MedicoResolver} from './medico.resolver';
import { HospitalRepository } from '../hospital/hospital.repository';
import { PacienteRepository } from '../paciente/paciente.repository';
import { MedicoRepository } from './medico.repository';

@Module({
    imports:[TypeOrmModule.forFeature([HospitalRepository, MedicoRepository, PacienteRepository])],
    providers:[MedicoService, MedicoResolver]
})
export class MedicoModule{}