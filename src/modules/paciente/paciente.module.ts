import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PacienteService} from './paciente.service';
import {PacienteResolver} from './paciente.resolver'
import { HospitalRepository } from '../hospital/hospital.repository';
import { MedicoRepository } from '../medico/medico.repository';
import { PacienteRepository } from './paciente.repository';

@Module({
    imports:[TypeOrmModule.forFeature([HospitalRepository, MedicoRepository, PacienteRepository])],
    providers:[PacienteService, PacienteResolver]
})
export class PacienteModule{}