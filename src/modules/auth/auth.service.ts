import { Injectable, Logger } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AdminService } from '../admin/admin.service';

@Injectable()
export class AuthService {
    constructor(
        private adminService: AdminService,
        private jwtService: JwtService
    ){}

    async validateUser(username: string, password: string){
        const user = await this.adminService.find(username);
        if(user && user.password === password){
            const {password, ...rest} = user;
            return rest;
        }
        return null;
    }

    async login(user: any){
        const payload = {username: user.username, sub: user.id, role: user.role}
        return {
            access_token: this.jwtService.sign(payload),
            payload
        }
    }
}