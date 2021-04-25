import {EntityRepository, Repository} from 'typeorm';
import {PacienteEntity} from './paciente.entity';

@EntityRepository(PacienteEntity)
export class PacienteRepository extends Repository<PacienteEntity>{}