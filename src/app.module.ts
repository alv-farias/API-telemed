import { Module } from '@nestjs/common';
import { GraphQLModule } from '@nestjs/graphql'
import graphconfig from './configs/graphql.config';
import ormconfig from './configs/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PacienteModule} from './modules/paciente/paciente.module';
import {MedicoModule} from './modules/medico/medico.module';
import {HospitalModule} from './modules/hospital/hospital.module';
import { AuthModule } from './modules/auth/auth.module';

@Module({
  imports: [
    PacienteModule,
    MedicoModule,
    HospitalModule,
    AuthModule,
    GraphQLModule.forRoot(graphconfig),
    TypeOrmModule.forRoot(ormconfig)
  ],
})
export class AppModule {}
