import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import * as config from 'config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: config.jwt.ignoreExpiration,
            secretOrKey: config.jwt.secret,
        })
    }

    async validate(payload: any){
        return {
            userID: payload.sub,
            username: payload.username,
            role: payload.role
        }
    }
}
