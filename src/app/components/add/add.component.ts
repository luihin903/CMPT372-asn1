import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RecipeService } from '../../services/recipe.service';
import { Router } from '@angular/router';

@Component({
	selector: 'app-add',
	templateUrl: './add.component.html',
	styleUrls: ['./add.component.css']
})
export class AddComponent {

	form: FormGroup;

	constructor(private rs: RecipeService, private router: Router) {
		let formControls = {
			title: new FormControl("", [Validators.required]),
			ingredients: new FormControl("", [Validators.required]),
			directions: new FormControl("", [Validators.required])
		}
		this.form = new FormGroup(formControls);
	}

	onSubmit(newRecipe: object) {
		this.rs.add(newRecipe);
		this.router.navigate([""]);
	}
}
