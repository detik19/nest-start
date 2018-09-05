import { BooksService } from './books.service';
import { Controller, Body, Post } from '@nestjs/common';
import { CreateBookDto } from './dto/create-book.dto';

@Controller('books')
export class BooksController {
    constructor(private readonly booksService: BooksService){}

    @Post()
    async create(@Body() createBookDto: CreateBookDto) {
        this.booksService.create(createBookDto);
    }
}
