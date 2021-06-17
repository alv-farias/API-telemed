import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { EncryptionTransformer } from 'typeorm-encrypted';
import { ObjectType, Field, Int, ID, HideField } from '@nestjs/graphql';
import * as config from "config";
import { Roles } from 'src/enums/role.enum';

@Entity()
@ObjectType()
export class AdminEntity{

    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;
    
    @Field(() => String)
    @Column()
    name: string;

    @Field(() => String)
    @Column()
    email: string;

    @Field(() => String)
    @Column({unique: true})
    username: string;

    @HideField()
    @Column({
        type: "varchar",
        nullable: false,
        transformer: new EncryptionTransformer(config.encrypt)
    })
    password: string;

    @Field()
    @Column({
        type: 'enum',
        enum: Roles,
        default: Roles.ADMIN,
        nullable: false
    })
    role: Roles;

}