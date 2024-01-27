import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';

type token = {
  access_token: string;
}

@Injectable()
export class AuthService {
    constructor(
        private usersService: UsersService,
        private jwtService: JwtService
      ) {}
    
      async validateUser(username: string, pass: string): Promise<any> {
        const user = await this.usersService.findOne(username);
        if (user && user.password === pass) {
          const { password, ...result } = user;
          return result;
        }
        return null;
      }

      async signIn(username: string, pass: any): Promise<token> {
        const user = await this.usersService.findOne(username);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const payload = { sub: user.id, username: user.username };
        return {
          access_token: await this.jwtService.signAsync(payload),
        };  
      }

}
