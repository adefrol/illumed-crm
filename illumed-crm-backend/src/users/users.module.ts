import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm'
import { User } from './entities/users.entity'
/* import { usersProviders } from './users.providers' */

@Module({
  imports: [TypeOrmModule.forFeature([User])],
  exports: [UsersService],
  providers: [UsersService],
})
export class UsersModule {}
