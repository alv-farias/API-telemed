import {EntityRepository, Repository} from 'typeorm';
import {HospitalEntity} from './hospital.entity';

@EntityRepository(HospitalEntity)
export class HospitalRepository extends Repository<HospitalEntity>{}