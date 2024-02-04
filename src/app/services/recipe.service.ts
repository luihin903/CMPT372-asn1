import { Injectable } from '@angular/core';
import { Recipe } from '../models/Recipe';

@Injectable({
	providedIn: 'root'
})
export class RecipeService {

	recipes!: Recipe[];
	length!: number;


	constructor() {
		this.read();
	}

	add(newRecipe: object) {
		this.recipes.push(new Recipe(this.length, this.getTime(), newRecipe["title" as keyof object], newRecipe["ingredients" as keyof object], newRecipe["directions" as keyof object]));
		this.length ++;
		this.save();
	}

	delete() {

	}

	read(): void {
		var rString = JSON.parse(localStorage.getItem("recipes")!);
		var lString = localStorage.getItem("length")!
		
		if (rString != null) {
			this.recipes = rString.map((r: any) => new Recipe(r.id, r.time, r.title, r.ingredients, r.directions));
		}
		else {
			this.recipes = [];
		}
		
		if (lString != null) {
			this.length = parseInt(lString);
		}
		else {
			this.length = 0;
		}
		
	}

	save(): void {
		localStorage.setItem("recipes", JSON.stringify(this.recipes));
		localStorage.setItem("length", this.length.toString());
	}

	getTime(): string {
        var date = new Date(Date.now());
        
        var year = date.getFullYear();
        var month = ("0" + (date.getMonth() + 1)).slice(-2);
        var day = ("0" + date.getDate()).slice(-2);
        var hour = ("0" + date.getHours()).slice(-2);
        var minute = ("0" + date.getMinutes()).slice(-2);

        return `${hour}:${minute} ${day}/${month}/${year}`;
    }
}
