import { Component, OnInit} from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  constructor(public apiService: ApiService) { }

  ngOnInit() {
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
      console.log(JSON.stringify(data));
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
