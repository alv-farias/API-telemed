import { Field, ID, InputType } from "@nestjs/graphql";

@InputType()
export class CreatePacienteInput{

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
    cel: String;

    @Field(()=> String)
    email: String;
}

@InputType()
export class UpdatePacienteInput{
    @Field(()=> String, {nullable: true})
    nome?: String;

    @Field(()=> String, {nullable: true})
    endereco?: String;

    @Field(()=> String, {nullable: true})
    uf?: String;

    @Field(()=> String, {nullable: true})
    cidade?: String;

    @Field(()=> String, {nullable: true})
    cep?: String;

    @Field(()=> String, {nullable: true})
    tel?: String;

    @Field(()=> String, {nullable: true})
    cel?: String;

    @Field(()=> String, {nullable: true})
    email?: String;
}