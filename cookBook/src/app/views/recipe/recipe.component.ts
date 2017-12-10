import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
import { Recipe } from '../../recipe';
import { ApiService } from '../../api.service';

@Component({
  selector: 'app-recipe',
  templateUrl: './recipe.component.html',
  styleUrls: ['./recipe.component.css']
})
export class RecipeComponent implements OnInit {

  recipeSub: Subscription;
  privateRecipes: Recipe[];
  error: any;

  constructor(public apiService: ApiService) {
  }

  ngOnInit() {
    this.recipeSub = this.apiService.getRecipes().subscribe(
      recipes => this.privateRecipes = recipes,
      err => this.error = err
    );
  }

}
