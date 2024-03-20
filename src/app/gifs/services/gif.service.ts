import { HttpClient } from '@angular/common/http';
import { EventEmitter, Injectable } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Datum, Welcome } from '../interfaces/gif.interface';
import { environment } from 'src/environments/environments';

@Injectable({
  providedIn: 'root'
})
export class GifService {
  

  baseUrl = environment.baseURL
  apiKey = environment.apiKey

  listarProductos = new EventEmitter<Datum[]>()

  constructor(private http: HttpClient) { }

  getGifs(term: string): Observable <Welcome | any>{
    return this.http.get<Welcome>(`${this.baseUrl}${this.apiKey}&q=${term}`)
    .pipe(
      catchError (()=> of([]))
    )
  }
}
