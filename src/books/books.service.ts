import { Book } from './interfaces/book.interface';
import { CreateBookDto } from './dto/create-book.dto';
import {Model} from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

@Injectable()
export class BooksService {
    constructor(@Inject('BookModelToken') private readonly bookModel: Model<Book>){}
    async create(createBookDto: CreateBookDto): Promise<Book> {
        const createBook = new this.bookModel(createBookDto);
        return await createBook.save();
    }
}