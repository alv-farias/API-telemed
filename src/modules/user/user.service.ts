import {Injectable, NotFoundException} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserEntity } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user.type';


@Injectable()
export class UserService{
    constructor(
        @InjectRepository(UserEntity)
        private readonly userRepository: Repository<UserEntity>
    ){}

    async findAll(): Promise<UserEntity[]>{
        return this.userRepository.find();
    }
    
    async create(userData: CreateUserInput): Promise<UserEntity>{
        const userObj = await this.userRepository.create(userData);
        return this.userRepository.save(userObj);
    }

    async read(userId: number): Promise<UserEntity>{
        const user = await this.userRepository.findOne(userId);
        if(!user) throw new NotFoundException();
        return user;
    }
    
    async update(userId: number, userData: UpdateUserInput): Promise<UserEntity>{
        const user = await this.userRepository.findOne(userId);
        if(!user) throw new NotFoundException();
        Object.assign(user, userData);
        return this.userRepository.save(user);
    }

    async delete(userId: number): Promise<UserEntity>{
        const user = await this.userRepository.findOne(userId);
        if(!user) throw new NotFoundException();
        return this.userRepository.remove(user);
    }

    
    

}