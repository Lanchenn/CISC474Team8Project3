import { Component, OnInit} from '@angular/core';
import { Subscription } from 'rxjs/Subscription';
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

}
