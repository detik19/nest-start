import { BookSchema } from './schemas/book.schema';
import { Connection } from 'mongoose';

export const booksProviders = [
    {
        provide: 'BookModelToken',
        useFactory: (connection: Connection) => connection.model('Book', BookSchema),
        inject: ['DbConnectionToken'],
    },
];
