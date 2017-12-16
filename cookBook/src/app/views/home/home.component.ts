import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipes: {};
  constructor(public apiService: ApiService) { }

  ngOnInit() {
    this.getRecipes();
  }

  getRecipeByWorldCuisine(worldCuisine) {
    this.apiService.getRecipeByWorldCuisine(worldCuisine).subscribe(data => {
      this.recipes = data;
    });
  }

  getRecipeByMealType(mealType) {
    this.apiService.getRecipeByMealType(mealType).subscribe(data => {
      this.recipes = data;
    });
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe(data => {
      this.recipes = data;
    });
  }

}
