import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  private worldCuisine;
  constructor(public apiService: ApiService) { }

  ngOnInit() {
  }

  getRecipeByWorldCuisine(worldCuisine) {
    this.apiService.getRecipeByWorldCuisine(worldCuisine).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  getRecipeByMealType(mealType) {
    this.apiService.getRecipeByMealType(mealType).subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

  getRecipes() {
    this.apiService.getRecipes().subscribe(data => {
      console.log(JSON.stringify(data));
    });
  }

}
