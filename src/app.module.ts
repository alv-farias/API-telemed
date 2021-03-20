import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql'
import graphconfig from './configs/graphql.config';
import ormconfig from './configs/orm.config';
import { TypeOrmModule } from '@nestjs/typeorm';
import {PacienteModule} from './modules/paciente/paciente.module';

@Module({
  imports: [
    PacienteModule,
    GraphQLModule.forRoot(graphconfig),
    TypeOrmModule.forRoot(ormconfig)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
