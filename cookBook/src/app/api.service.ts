import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';

@Injectable()
export class ApiService {

  private privateRecipesURL = 'http://localhost:3000/api/recipes';
  private registerURL = 'http://localhost:3000/api/auth/register';

  constructor(private http: HttpClient) { }

  getRecipes() {
    return this.http
      .get(this.privateRecipesURL)
      .pipe(
        catchError(this.handleError)
      );
  }

  register(parameter) {
    return this.http.post(this.registerURL, parameter);
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

  purchase(item) {
    alert('You bought the: ${recipe.author}');
  }

}
