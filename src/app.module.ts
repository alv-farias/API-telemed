import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import graphconfig from './configs/graphql.config';
import ormconfig from './configs/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PacienteModule} from './modules/paciente/paciente.module';
import {MedicoModule} from './modules/medico/medico.module';
import {HospitalModule} from './modules/hospital/hospital.module';

@Module({
  imports: [
    PacienteModule,
    MedicoModule,
    HospitalModule,
    GraphQLModule.forRoot(graphconfig),
    TypeOrmModule.forRoot(ormconfig)
  ],
})
export class AppModule {}
