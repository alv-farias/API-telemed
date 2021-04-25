import {Entity, Column, PrimaryGeneratedColumn, ManyToOne} from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql';
import {HospitalEntity} from '../hospital/hospital.entity';
import { MedicoEntity } from '../medico/medico.entity';

@Entity()
@ObjectType()
export class PacienteEntity{

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field(()=> String)
    @Column()
    nome: String;

    @Field(()=> String)
    @Column()
    endereco: String;

    @Field(()=> String)
    @Column()
    uf: String;

    @Field(()=> String)
    @Column()
    cidade: String;

    @Field(()=> String)
    @Column()
    cep: String;

    @Field(()=> String)
    @Column()
    tel: String;

    @Field(()=> String)
    @Column()
    cel: String;

    @Field(()=> String)
    @Column()
    email: String;

    @Field(()=> HospitalEntity)
    @ManyToOne(()=> HospitalEntity, hospital=> hospital.pacientes)
    hospital: HospitalEntity;

    @Field(()=> MedicoEntity, {nullable:true})
    @ManyToOne(()=> MedicoEntity, medico=> medico.pacientes, {nullable:true})
    medico?: MedicoEntity;
}