import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../api.service';
import * as $ from 'jquery';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  ingredients: {};
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    const id = localStorage.getItem('currentRecipe');
    if (id !== '') {
      $('#notLoggedIn').hide();
      $('#recipeBody').show();
      this.getRecipeByID(id);
    }
    else {
      $('#recipeBody').hide();
      $('#notLoggedIn').show();
    }
  }

  createRecipe(body) {
    this.apiService.createRecipe(body).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  addRating(body) {
    this.apiService.addRating(body).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  getRecipeByID(id) {
    this.apiService.getRecipeByID(id).subscribe(data => {
      $('#title').text(data['title']);
      $('#author').text('By: ' + data['owner']);
      $('#mainIMG').attr('src', data['url']);
      $('#description').text(data['description']);
      $('#rating').text('Rating: ' + data['rating'] + '/5,');
      this.ingredients = data['ingredients'];
      $('#steps').text(data['steps']);

      const num = data['numRatings'];
      if (num !== 1) {
        $('#numRatings').text('Rated by: ' + num + ' people!');
      }
      else {
        $('#numRatings').text('Rated by: ' + num + ' person!');
      }
    });
  }

  getRecipeByOwner(owner) {
    this.apiService.getRecipeByOwner(owner).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  deleteRecipeByID(id) {
    this.apiService.deleteRecipeByID(id).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  getUsers() {
    this.apiService.getUsers().subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

}
