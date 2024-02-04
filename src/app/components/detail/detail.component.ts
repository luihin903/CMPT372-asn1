import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Recipe } from 'src/app/models/Recipe';
import { RecipeService } from 'src/app/services/recipe.service';

@Component({
	selector: 'app-detail',
	templateUrl: './detail.component.html',
	styleUrls: ['./detail.component.css']
})
export class DetailComponent {

	recipe!: Recipe;
	id: number;

	constructor(activatedRoute: ActivatedRoute, rs: RecipeService) {
		this.id = activatedRoute.snapshot.params["id"];
		
		for (var i = 0; i < rs.length; i ++) {
			if (rs.recipes[i].id == this.id) {
				this.recipe = rs.recipes[i];
			}
		}
	}
}
