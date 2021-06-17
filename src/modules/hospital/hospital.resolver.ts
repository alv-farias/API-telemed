import {Mutation, Query, Resolver, Args, Int} from '@nestjs/graphql';
import {HospitalService} from './hospital.service';
import {HospitalEntity} from './hospital.entity';
import {CreateHospitalInput, UpdateHospitalInput} from './hospital.type';
import { Auth } from 'src/decorators/auth.decorator';
import { Roles } from 'src/enums/role.enum';

@Resolver()
export class HospitalResolver{
    constructor(
        private readonly hospitalService: HospitalService
    ){}
    
    @Auth(Roles.ADMIN)
    @Query(()=> [HospitalEntity])
    async hospital(): Promise<HospitalEntity[]>{
        return this.hospitalService.findAll();
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> HospitalEntity)
    async createHospital(
        @Args('hospitalData', {type: ()=> CreateHospitalInput}) hospitalData: CreateHospitalInput
        ): Promise<HospitalEntity>{
        return await this.hospitalService.create(hospitalData);
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> HospitalEntity)
    async readHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<HospitalEntity>{
        return await this.hospitalService.read(hospitalId);
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> HospitalEntity)
    async updateHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number,
        @Args('hospitalData', {type: ()=> UpdateHospitalInput}) hospitalData: UpdateHospitalInput
        ): Promise<HospitalEntity>{
        return await this.hospitalService.update(hospitalId, hospitalData);
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> Boolean)
    async deleteHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<Boolean>{
        const del = await this.hospitalService.delete(hospitalId);
        if(del) return true;
        return false;
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> Boolean)
    async assignMed(
        @Args('medicoId', {type: ()=> Int}) medicoId: number,
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<Boolean>{
        return this.hospitalService.assignMedico(medicoId, hospitalId);
    }

    @Auth(Roles.ADMIN)
    @Mutation(()=> Boolean)
    async assignPac(
        @Args('pacienteId', {type: ()=> Int}) pacienteId: number,
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<Boolean>{
        return this.hospitalService.assignMedico(pacienteId, hospitalId);
    }
}