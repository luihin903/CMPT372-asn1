export class Recipe {
    
    id: number;
    time: string;
    title: string;
    ingredients: string;
    directions: string;

    constructor(id: number, time: string, title: string, ingredients: string, directions: string) {
        this.id = id;
        this.time = time;
        this.title = title;
        this.ingredients = ingredients;
        this.directions = directions;
    }
}