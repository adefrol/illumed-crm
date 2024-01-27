import { Body, Controller, Post, HttpCode, HttpStatus, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './guards/local-auth.guard'

@Controller('auth')
export class AuthController {
    constructor(private authService: AuthService) {}

    @UseGuards(LocalAuthGuard)
    @HttpCode(HttpStatus.OK)
    @Post('login')
    signIn(@Body() signInDto: Record<string, any>) {
      return this.authService.signIn(signInDto.username, signInDto.password);
    }
}
