import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class GoogleBooksService {

  private apiUrl = 'https://www.googleapis.com/books/v1/volumes';

  constructor(private http: HttpClient) { }

  searchBooks(query: string): Observable<any> {
    const url = `${this.apiUrl}?q=${query}`;
    return this.http.get(url);
  }

  getBookDetails(bookId: string): Observable<any> {
    const url = `${this.apiUrl}/${bookId}`;
    return this.http.get(url);
  }
}
