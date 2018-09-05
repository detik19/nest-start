import { BooksService } from './books.service';
import { DatabaseModule } from './../database/database.module';
import { Module } from '@nestjs/common';
import { BooksController } from './books.controller';
import { booksProviders } from './books.provider';

@Module({
  imports: [DatabaseModule],
  controllers: [BooksController],
  providers: [BooksService, ...booksProviders],
})
export class BooksModule {}
