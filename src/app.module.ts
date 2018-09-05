import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BooksModule } from './books/books.module';
import { AuthModule } from './auth/auth.module';
import { AuthService } from 'auth/auth.service';
import { UsersModule } from './users/users.module';
@Module({
  imports: [
    BooksModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService, AuthService],
})
export class AppModule {}
