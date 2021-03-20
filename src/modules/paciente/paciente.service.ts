import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {PacienteEntity} from './paciente.entity'
import {CreatePacienteInput, UpdatePacienteInput} from './paciente.type'

@Injectable()
export class PacienteService{
    constructor(
        @InjectRepository(PacienteEntity)
        private readonly pacienteRepository: Repository<PacienteEntity>
    ){}

    async findAll(): Promise<PacienteEntity[]>{
        return this.pacienteRepository.find();
    }

    async create(pacienteData: CreatePacienteInput): Promise<PacienteEntity>{
        const pacienteObj = await this.pacienteRepository.create(pacienteData);
        return this.pacienteRepository.save(pacienteObj);
    }

    async read(pacienteId: number): Promise<PacienteEntity>{
        const paciente = await this.pacienteRepository.findOne(pacienteId);
        if(!paciente) throw new NotFoundException();
        return paciente;
    }

    async update(pacienteId: number, pacienteData: UpdatePacienteInput): Promise<PacienteEntity>{
        const paciente = await this.pacienteRepository.findOne(pacienteId);
        if(!paciente) throw new NotFoundException();
        Object.assign(paciente, pacienteData);
        return this.pacienteRepository.save(paciente);
    }

    async delete(pacienteId: number): Promise<PacienteEntity>{
        const paciente = await this.pacienteRepository.findOne(pacienteId);
        if(!paciente) throw new NotFoundException();
        return this.pacienteRepository.remove(paciente);
    }
}