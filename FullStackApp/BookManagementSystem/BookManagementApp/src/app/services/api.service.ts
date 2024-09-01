import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { endpoints } from '../config/endpoints.config';
import { BookResponse } from './models/books';
import { Author } from '../pages/home/pages/authors/models/author.model';
import { UserResponse } from './models/users/user-response.model';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private readonly http: HttpClient) {}

  createBook(title: string, authorId: string, yearWritten: number) {
    return this.http.post<BookResponse>(endpoints.books, {
      title: title,
      authorId: authorId,
      yearWritten: yearWritten,
    });
  }

  updateBook(bookId: string, title: string) {
    return this.http.put<BookResponse>(`${endpoints.books}/${bookId}`, {
      bookId: bookId,
      title: title,
    });
  }

  deleteBook(bookId: string) {
    return this.http.delete<BookResponse>(`${endpoints.books}/${bookId}`);
  }

  authors() {
    return this.http.get<Author[]>(`${endpoints.authors}`);
  }

  books(search?: string | undefined) {
    let url = `${endpoints.books}`;

    if (search) {
      url += `&search${search}`;
    }

    return this.http.get<BookResponse[]>(url);
  }

  users(search?: number) {
    let url = `${endpoints.users}`;

    if (search) {
      url += `&search${search}`;
    }
    return this.http.get<UserResponse[]>(url);
  }
}
