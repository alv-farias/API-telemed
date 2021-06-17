import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AdminModule} from '../admin/admin.module';
import { AuthService } from './auth.service';
import { AuthResolver } from './auth.resolver';
import * as config from 'config';
import { JwtStrategy } from './jwt.strategy';
import { LocalStrategy } from './local.strategy';
import { PassportModule } from '@nestjs/passport';

@Module({
  imports: [
    AdminModule,
    PassportModule,
    JwtModule.register({
      secret: config.jwt.secret,
      signOptions: {
        expiresIn: config.jwt?.signOptions.expiresIn
      }
    })
  ],
  providers: [AuthService, AuthResolver, JwtStrategy, LocalStrategy],
  exports: [AuthService, JwtModule]
})
export class AuthModule {}
