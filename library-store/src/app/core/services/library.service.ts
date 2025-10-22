import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable, retry, timeout } from 'rxjs';
import { environment } from '../../environments/environment';
import { Book } from '../models/book.model';
import { Genre } from '../models/genre.model';
import { Publisher } from '../models/publisher.model';


@Injectable({
  providedIn: 'root'
})
export class LibraryService {

  private URL_API = environment.URL_API;
  private httpClient = inject(HttpClient);

  protected books: Book[] = [];
  protected genres: Genre[] = [];
  protected publishers: Publisher[] = [];


  constructor() { }
  getAllBooks(): Observable<Book[]> {
    return this.httpClient.get<Book[]>(`${this.URL_API}/books`)
    .pipe(
      map((response) => response ?? []),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching books:', error);
        throw error;
      })
    );
  }

  getBookById(id: number): Observable<Book | undefined> {
    return this.httpClient.get<Book[]>(`${this.URL_API}/books/${id}`)
    .pipe(
      map((response:any) => response?.[0] as Book | undefined),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching books:', error);
        throw error;
      })
    );
  }

  getAllGenres(): Observable<Genre[]> {
    return this.httpClient.get<Genre[]>(`${this.URL_API}/genres`)
    .pipe(
      map((response:any) => response ?? []),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching genres:', error);
        throw error;
      })
    );
  }

  getGenreById(id: number): Observable<Genre | undefined> {
    return this.httpClient.get<Genre[]>(`${this.URL_API}/genres/${id}`)
    .pipe(
      map((response:any) => response?.[0] as Genre | undefined),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching genres:', error);
        throw error;
      })
    );
  }

  getAllPublishers(): Observable<Publisher[]> {
    return this.httpClient.get<Publisher[]>(`${this.URL_API}/publishers`)
    .pipe(
      map((response:any) => response ?? []),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching publishers:', error);
        throw error;
      })
    );
  }

  getPublisherById(id: number): Observable<Publisher | undefined> {
    return this.httpClient.get<Publisher[]>(`${this.URL_API}/publishers/${id}`)
    .pipe(
      map((response:any) => response?.[0] as Publisher | undefined),
      timeout(5000),
      retry(2),
      catchError((error) => {
        console.error('Error fetching publishers:', error);
        throw error;
      })
    );
  }
}
