import {Mutation, Query, Resolver, Args, Int} from '@nestjs/graphql';
import {HospitalService} from './hospital.service';
import {HospitalEntity} from './hospital.entity';
import {CreateHospitalInput, UpdateHospitalInput} from './hospital.type';

@Resolver()
export class HospitalResolver{
    constructor(
        private readonly hospitalService: HospitalService
    ){}

    @Query(()=> [HospitalEntity])
    async hospital(): Promise<HospitalEntity[]>{
        return this.hospitalService.findAll();
    }

    @Mutation(()=> HospitalEntity)
    async createHospital(
        @Args('hospitalData', {type: ()=> CreateHospitalInput}) hospitalData: CreateHospitalInput
        ): Promise<HospitalEntity>{
        return await this.hospitalService.create(hospitalData);
    }

    @Mutation(()=> HospitalEntity)
    async readHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<HospitalEntity>{
        return await this.hospitalService.read(hospitalId);
    }

    @Mutation(()=> HospitalEntity)
    async updateHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number,
        @Args('hospitalData', {type: ()=> UpdateHospitalInput}) hospitalData: UpdateHospitalInput
        ): Promise<HospitalEntity>{
        return await this.hospitalService.update(hospitalId, hospitalData);
    }

    @Mutation(()=> Boolean)
    async deleteHospital(
        @Args('hospitalId', {type: ()=> Int}) hospitalId: number
        ): Promise<Boolean>{
        const del = await this.hospitalService.delete(hospitalId);
        if(del) return true;
        return false;
    }
}