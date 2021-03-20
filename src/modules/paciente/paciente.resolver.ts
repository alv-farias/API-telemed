import { Mutation, Query, Resolver, Args, Int } from '@nestjs/graphql';
import { PacienteService } from './paciente.service';
import { PacienteEntity } from './paciente.entity';
import { CreatePacienteInput, UpdatePacienteInput } from './paciente.type';

@Resolver()
export class PacienteResolver{
    constructor(
        private readonly pacienteService: PacienteService
    ){}

    @Query(() => [PacienteEntity])
    async paciente(): Promise<PacienteEntity[]>{
        return await this.pacienteService.findAll();
    }

    @Mutation(() => PacienteEntity)
    async createPaciente(
        @Args('pacienteData', {type: () => CreatePacienteInput }) pacienteData: CreatePacienteInput
        ):Promise<PacienteEntity>{
        return await this.pacienteService.create(pacienteData);
    }

    @Mutation(() => PacienteEntity)
    async readPaciente(
        @Args('pacienteId', {type: () => Int})  pacienteId: number
        ): Promise<PacienteEntity>{
        return await this.pacienteService.read(pacienteId);
    }

    @Mutation(() => PacienteEntity)
    async updaterPaciente(
        @Args('pacienteData', {type: () => UpdatePacienteInput }) pacienteData: UpdatePacienteInput,
        @Args('pacienteId', {type: () => Int})  pacienteId: number
        ): Promise<PacienteEntity>{
        return await this.pacienteService.update(pacienteId, pacienteData);
    }

    @Mutation(() => Boolean)
    async deletePaciente(
        @Args('pacienteId', {type: () => Int})  pacienteId: number
        ): Promise<Boolean>{
        const del = await this.pacienteService.delete(pacienteId);
        if(del) return true;
        return false;
    }
}