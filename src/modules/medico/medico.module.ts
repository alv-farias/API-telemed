import {Module} from '@nestjs/common';
import {TypeOrmModule} from '@nestjs/typeorm';
import {MedicoEntity} from './medico.entity';
import {MedicoService} from './medico.service';
import {MedicoResolver} from './medico.resolver';

@Module({
    imports:[TypeOrmModule.forFeature([MedicoEntity])],
    providers:[MedicoService, MedicoResolver]
})
export class MedicoModule{}