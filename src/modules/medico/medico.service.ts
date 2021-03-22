import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import {MedicoEntity} from './medico.entity'
import {CreateMedicoInput, UpdateMedicoInput} from './medico.type'

@Injectable()
export class MedicoService{
    constructor(
        @InjectRepository(MedicoEntity)
        private readonly medicoRepository: Repository<MedicoEntity>
    ){}

    async findAll(): Promise<MedicoEntity[]>{
        return this.medicoRepository.find();
    }
    
    async create(medicoData: CreateMedicoInput): Promise<MedicoEntity>{
        const medicoObj = await this.medicoRepository.create(medicoData);
        return this.medicoRepository.save(medicoObj);
    }

    async read(medicoId: number): Promise<MedicoEntity>{
        const medico = await this.medicoRepository.findOne(medicoId);
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
}