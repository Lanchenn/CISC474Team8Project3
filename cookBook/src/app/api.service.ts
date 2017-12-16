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

  createRecipe(body) {
    return this.http.post(this.base + '/recipes', body);
  }

  addRating(body) {
    return this.http.post(this.base + '/recipes/rating', body);
  }

  initializeTestData(body) {
    return this.http.post(this.base + '/recipes/init', body);
  }

   /*
   // recipesRoutes.post('/addRating/:id/:rating', recipeController.addRating);//use json obj instead at req.body
    recipesRoutes.post('/', recipeController.createRecipe);
    recipesRoutes.post('/rating', recipeController.addRating);
    recipesRoutes.post('/init', recipeController.initTestData);

  */

  getRecipeByID(id) {
    return this.http.get(this.base + '/recipes/' + id);
  }

  getRecipeByWorldCuisine(worldCuisine) {
    return this.http.get(this.base + '/recipes/world/' + worldCuisine);
  }

  getRecipeByMealType(mealType) {
    return this.http.get(this.base + '/recipes/type/' + mealType);
  }

  getRecipeByOwner(owner) {
    return this.http.get(this.base + '/recipes/owner/' + owner);
  }

  deleteRecipeByID(id) {
    return this.http.get(this.base + '/recipes/delete/' + id);
  }

  getUsers() {
    return this.http.get(this.base + '/users');
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
