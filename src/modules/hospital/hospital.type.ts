import {Field, ID, InputType} from '@nestjs/graphql';

@InputType()
export class CreateHospitalInput{
    
    @Field(()=> String)
    nome: String;

    @Field(()=> String)
    endereco: String;

    @Field(()=> String)
    uf: String;

    @Field(()=> String)
    cidade: String;

    @Field(()=> String)
    cep: String;
    
    @Field(()=> String)
    tel: String;

    @Field(()=> String)
    email: String;

    @Field(()=> String)
    nome_fantasia: String;

    @Field(()=> String)
    cnes: String;

    @Field(()=> Boolean)
    sus: Boolean;
}

@InputType()
export class UpdateHospitalInput{

    @Field(()=> String)
    nome?: String;

    @Field(()=> String)
    endereco?: String;

    @Field(()=> String)
    uf?: String;

    @Field(()=> String)
    cidade?: String;

    @Field(()=> String)
    cep?: String;
    
    @Field(()=> String)
    tel?: String;

    @Field(()=> String)
    email?: String;

    @Field(()=> String)
    nome_fantasia?: String;

    @Field(()=> String)
    cnes?: String;

    @Field(()=> Boolean)
    sus?: Boolean;
}