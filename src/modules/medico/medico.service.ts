import {Injectable, NotFoundException} from '@nestjs/common';
import { PacienteRepository } from '../paciente/paciente.repository';
import {MedicoEntity} from './medico.entity'
import { MedicoRepository } from './medico.repository';
import {CreateMedicoInput, UpdateMedicoInput} from './medico.type'

@Injectable()
export class MedicoService{
    constructor(
        private readonly medicoRepository: MedicoRepository,
        private readonly pacienteRepository: PacienteRepository
    ){}

    async findAll(): Promise<MedicoEntity[]>{
        return this.medicoRepository.find({relations:['pacientes', 'hospital']});
    }
    
    async create(medicoData: CreateMedicoInput): Promise<MedicoEntity>{
        const medicoObj = await this.medicoRepository.create(medicoData);
        return this.medicoRepository.save(medicoObj);
    }

    async read(medicoId: number): Promise<MedicoEntity>{
        const medico = await this.medicoRepository.findOne(medicoId, {relations:['pacientes','hospital']});
        if(!medico) throw new NotFoundException();
        return medico;
    }

    async update(medicoId: number, medicoData: UpdateMedicoInput): Promise<MedicoEntity>{
        const medico = await this.medicoRepository.findOne(medicoId);
        if(!medico) throw new NotFoundException();
        Object.assign(medico, medicoData);
        return this.medicoRepository.save(medico);
    }

    async delete(medicoId: number): Promise<MedicoEntity>{
        const medico = await this.medicoRepository.findOne(medicoId);
        if(!medico) throw new NotFoundException();
        return this.medicoRepository.remove(medico);
    }

    async assignPacientes(pacienteId: number, medicoId: number): Promise<Boolean>{
        const medico = await this.medicoRepository.findOne(medicoId);
        if(!medico) throw new NotFoundException();
        const paciente = await this.pacienteRepository.findOne(pacienteId, {relations: ['medico']});
        if(!paciente) throw new NotFoundException();
        Object.assign(paciente, {medico});
        await this.pacienteRepository.save(paciente);
        return true;
    }
}