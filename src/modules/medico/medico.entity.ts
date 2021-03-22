import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';
import {ObjectType, Field, ID} from '@nestjs/graphql';

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
}