import {Mutation, Query, Resolver, Args, Int} from '@nestjs/graphql';
import {MedicoService} from './medico.service';
import {MedicoEntity} from './medico.entity';
import {CreateMedicoInput, UpdateMedicoInput} from './medico.type';

@Resolver()
export class MedicoResolver{
    constructor(
        private readonly medicoService: MedicoService
    ){}

    @Query(()=> [MedicoEntity])
    async medico(): Promise<MedicoEntity[]>{
        return this.medicoService.findAll();
    }

    @Mutation(()=> MedicoEntity)
    async createMedico(
        @Args('medicoData', {type: ()=> CreateMedicoInput}) medicoData: CreateMedicoInput
        ):Promise<MedicoEntity>{
        return await this.medicoService.create(medicoData);
    }
    
    @Mutation(()=> MedicoEntity)
    async readMedico(
        @Args('medicoId', {type: ()=> Int}) medicoId: number
        ): Promise<MedicoEntity>{
        return await this.medicoService.read(medicoId);
    }

    @Mutation(()=> MedicoEntity)
    async updateMedico(
        @Args('medicoData', {type: ()=> UpdateMedicoInput}) medicoData: UpdateMedicoInput,
        @Args('medicoId', {type: ()=> Int}) medicoId: number
        ): Promise<MedicoEntity>{
        return await this.medicoService.update(medicoId, medicoData);
    }

    @Mutation(()=> Boolean)
    async deleteMedico(
        @Args('medicoId', {type: ()=> Int}) medicoId: number
        ): Promise<Boolean>{
        const del = await this.medicoService.delete(medicoId);
        if(del) return true;
        return false;
    }

    @Mutation(()=> Boolean)
    async assignPac(
        @Args('pacienteId', {type: ()=> Int}) pacienteId: number,
        @Args('medicoId', {type: ()=> Int}) medicoId: number
        ): Promise<Boolean>{
        return this.medicoService.assignPacientes(pacienteId, medicoId);
    }
}