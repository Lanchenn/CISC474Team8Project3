import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ApiService {

  private base = 'http://localhost:3000/api';

  constructor(private http: HttpClient) { }

  signin(body) {
    return this.http.post(this.base + '/auth/login', body);
  }

  register(body) {
    return this.http.post(this.base + '/auth/register', body);
  }

  getRecipes() {
    return this.http
      .get(this.base + '/recipes')
      .pipe(
        catchError(this.handleError)
      );
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }
}
