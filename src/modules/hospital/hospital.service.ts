import {Injectable, NotFoundException} from '@nestjs/common'
import {InjectRepository} from '@nestjs/typeorm';
import {Repository} from 'typeorm';
import {HospitalEntity} from './hospital.entity';
import {CreateHospitalInput, UpdateHospitalInput} from './hospital.type';

@Injectable()
export class HospitalService{
    constructor(
        @InjectRepository(HospitalEntity)
        private readonly hospitalRepository: Repository<HospitalEntity>
    ){}

    async findAll(): Promise<HospitalEntity[]>{
        return this.hospitalRepository.find();
    }

    async create(hospitalData: CreateHospitalInput): Promise<HospitalEntity>{
        const hospitalObj = await this.hospitalRepository.create(hospitalData);
        return this.hospitalRepository.save(hospitalObj);
    }

    async read(hospitalId: number): Promise<HospitalEntity>{
        const hospital = await this.hospitalRepository.findOne(hospitalId);
        if(!hospital) throw new NotFoundException();
        return hospital;
    }

    async update(hospitalId: number, hospitalData: UpdateHospitalInput): Promise<HospitalEntity>{
        const hospital = await this.hospitalRepository.findOne(hospitalId);
        if(!hospital) throw new NotFoundException();
        Object.assign(hospital, hospitalData);
        return this.hospitalRepository.save(hospital);
    }

    async delete(hospitalId: number): Promise<HospitalEntity>{
        const hospital = await this.hospitalRepository.findOne(hospitalId);
        if(!hospital) throw new NotFoundException();
        return this.hospitalRepository.remove(hospital);
    }
}