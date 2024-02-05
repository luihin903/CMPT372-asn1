import { Component } from '@angular/core';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';
import { Recipe } from '../../models/Recipe';

@Component({
	selector: 'app-view',
	templateUrl: './view.component.html',
	styleUrls: ['./view.component.css']
})
export class ViewComponent {

	recipes: Recipe[];

	constructor(private rs: RecipeService, private router: Router) {
		this.recipes = rs.recipes;
	}

}
