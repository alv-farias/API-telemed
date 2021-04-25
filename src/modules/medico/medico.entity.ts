import {Entity, Column, PrimaryGeneratedColumn, ManyToOne, OneToMany} from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql';
import {HospitalEntity} from '../hospital/hospital.entity';
import { PacienteEntity } from '../paciente/paciente.entity';


@Entity()
@ObjectType()
export class MedicoEntity{

    @Field(()=> ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field(()=> String)
    @Column()
    nome: String;

    @Field(()=> String)
    @Column()
    endereco: String

    @Field(()=> String)
    @Column()
    uf: String

    @Field(()=> String)
    @Column()
    cidade: String

    @Field(()=> String)
    @Column()
    cep: String

    @Field(()=> String)
    @Column()
    tel: String

    @Field(()=> String)
    @Column()
    cel: String

    @Field(()=> String)
    @Column()
    crm: String

    @Field(()=> String)
    @Column()
    email: String

    @Field(()=> HospitalEntity, {nullable:true})
    @ManyToOne(()=> HospitalEntity, hospital=>hospital.medicos, {nullable:true})
    hospital?: HospitalEntity

    @Field(()=> [PacienteEntity], {nullable:true})
    @OneToMany(()=> PacienteEntity, paciente=>paciente.medico, {nullable:true})
    pacientes?: PacienteEntity[]
}