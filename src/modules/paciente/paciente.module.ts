import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {PacienteEntity} from './paciente.entity';
import {PacienteService} from './paciente.service';
import {PacienteResolver} from './paciente.resolver'

@Module({
    imports:[TypeOrmModule.forFeature([PacienteEntity])],
    providers:[PacienteService, PacienteResolver]
})
export class PacienteModule{}