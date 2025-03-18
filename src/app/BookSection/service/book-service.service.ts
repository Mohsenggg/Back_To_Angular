import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Book } from '../model/Book';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookServiceService {
  constructor(private http: HttpClient) {}



  addUpdateBook(book: Book): Observable<Book> {
    return this.http.put<Book>("http://localhost:8080/connect/saveBook", book);
  }


  deleteBookById(id: Number): Observable<Book> {
    return this.http.delete<Book>("http://localhost:8080/connect/deleteBook/"+id);
  }


}
