import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import { AuthLoginUserDto } from '../dto/auth-login-user.dto';
import { AuthRegisterUserDto } from '../dto/auth-register-user.dto';
import { AuthChangePasswordUserDto } from '../dto/auth-change-password-user.dto';
import { AuthForgotPasswordUserDto } from '../dto/auth-forgot-password-user.dto';
import { AuthConfirmPasswordUserDto } from '../dto/auth-confirm-password-user.dto';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/register')
  async register(@Body() authRegisterUserDto: AuthRegisterUserDto) {
    return this.authService.registerUser(authRegisterUserDto);
  }

  @Post('/login')
  @UsePipes(ValidationPipe)
  async login(@Body() authLoginUserDto: AuthLoginUserDto) {
    return this.authService.authenticateUser(authLoginUserDto);
  }

  @Post('/change-password')
  @UsePipes(ValidationPipe)
  async changePassword(
    @Body() authChangePasswordUserDto: AuthChangePasswordUserDto,
  ) {
    return this.authService.changeUserPassword(authChangePasswordUserDto);
  }

  @Post('/forgot-password')
  @UsePipes(ValidationPipe)
  async forgotPassword(
    @Body() authForgotPasswordUserDto: AuthForgotPasswordUserDto,
  ) {
    return await this.authService.forgotUserPassword(authForgotPasswordUserDto);
  }

  @Post('/confirm-password')
  @UsePipes(ValidationPipe)
  async confirmPassword(
    @Body() authConfirmPasswordUserDto: AuthConfirmPasswordUserDto,
  ) {
    return await this.authService.confirmUserPassword(
      authConfirmPasswordUserDto,
    );
  }
}
