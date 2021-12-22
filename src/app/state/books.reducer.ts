import { createReducer, on } from '@ngrx/store';

import { retrievedBookList } from './books.actions';
import { Book } from '../book-list/books.model';

export const initialState: ReadonlyArray<Book> = [];

const _booksReducer = createReducer(
  initialState,
  on(retrievedBookList, (state, { books }) => books)
);

export function booksReducer(state, action) {
  return _booksReducer(state, action);
}
