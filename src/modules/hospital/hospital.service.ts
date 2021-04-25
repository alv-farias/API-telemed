import {Injectable, NotFoundException} from '@nestjs/common'
import { MedicoRepository } from '../medico/medico.repository';
import { PacienteRepository } from '../paciente/paciente.repository';
import {HospitalEntity} from './hospital.entity';
import { HospitalRepository } from './hospital.repository';
import {CreateHospitalInput, UpdateHospitalInput} from './hospital.type';

@Injectable()
export class HospitalService{
    constructor(
        private readonly hospitalRepository: HospitalRepository,
        private readonly medicoRepository: MedicoRepository,
        private readonly pacienteRepository: PacienteRepository
    ){}

    async findAll(): Promise<HospitalEntity[]>{
        return this.hospitalRepository.find();
    }

    async create(hospitalData: CreateHospitalInput): Promise<HospitalEntity>{
        const hospitalObj = await this.hospitalRepository.create(hospitalData);
        return this.hospitalRepository.save(hospitalObj);
    }

    async read(hospitalId: number): Promise<HospitalEntity>{
        const hospital = await this.hospitalRepository.findOne(hospitalId, {relations:['medicos','pacientes']});
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

    async assignMedico(medicoId: number, hospitalId: number): Promise<Boolean>{
        const hospital = await this.hospitalRepository.findOne(hospitalId);
        if(!hospital) throw new NotFoundException();
        const medico = await this.medicoRepository.findOne(medicoId, {relations: ['hospital']});
        if(!medico) throw new NotFoundException();
        Object.assign(medico, {hospital});
        await this.medicoRepository.save(medico);
        return true;
    }

    async assignPaciente(pacienteId: number, hospitalId: number): Promise<Boolean>{
        const hospital = await this.hospitalRepository.findOne(hospitalId);
        if(!hospital) throw new NotFoundException();
        const paciente = await this.pacienteRepository.findOne(pacienteId, {relations: ['hospital']});
        if(!paciente) throw new NotFoundException();
        Object.assign(paciente, {hospital});
        await this.pacienteRepository.save(paciente);
        return true;
    }
}