import { inject, Injectable } from '@angular/core';

import { HttpClient } from '@angular/common/http';
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
  getAllBooks(): Book[] {
    return [];
  }

  getBookById(id: number): Book | undefined {
    return undefined;
  }

  getAllGenres(): Genre[] {
    return [];
  }

  getGenreById(id: number): Genre | undefined {
    return undefined;
  }

  getAllPublishers(): Publisher[] {
    return [];
  }

  getPublisherById(id: number): Publisher | undefined {
    return undefined;
  }
}
