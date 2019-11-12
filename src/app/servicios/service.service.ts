import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class Service {
  urlBase = 'https://jsonplaceholder.typicode.com/posts';
  constructor(protected http: HttpClient) { }

  getPosts(): Observable<any> {
    console.log('OK....');
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
    });
    return this.http.get(this.urlBase, { headers })
      .pipe(catchError(error => throwError(error)));
  }
}
