import {EntityRepository, Repository} from 'typeorm';
import {MedicoEntity} from './medico.entity';

@EntityRepository(MedicoEntity)
export class MedicoRepository extends Repository<MedicoEntity>{}