import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { catchError } from 'rxjs/operators';
import { Http, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';

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

    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    /*    return this.http.post(this.registerURL, parameter, {headers: headers})
    .subscribe(res => console.log(res));
    */
    return this.http.post(this.registerURL, parameter, {headers: headers})
    .map((res: Response) => res.json());
  }

  private handleError(err: HttpErrorResponse | any) {
    console.error('An error occurred', err);
    return Observable.throw(err.message || err);
  }

  purchase(item) {
    alert('You bought the: ${recipe.author}');
  }

}
