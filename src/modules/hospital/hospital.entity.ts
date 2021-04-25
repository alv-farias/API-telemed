import {Entity, Column, PrimaryGeneratedColumn, OneToMany} from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql';
import {MedicoEntity} from '../medico/medico.entity';
import { PacienteEntity } from '../paciente/paciente.entity';

@Entity()
@ObjectType()
export class HospitalEntity{

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
    email: String;

    @Field(()=> String)
    @Column()
    nome_fantasia: String;

    @Field(()=> String)
    @Column()
    cnes: String;

    @Field(()=> Boolean)
    @Column()
    sus: Boolean;

    @Field(()=> [MedicoEntity])
    @OneToMany(()=> MedicoEntity, medico=>medico.hospital)
    medicos: MedicoEntity[]

    @Field(()=> [PacienteEntity])
    @OneToMany(()=> PacienteEntity, paciente=>paciente.hospital)
    pacientes: PacienteEntity[]
}