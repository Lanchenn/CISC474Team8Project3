export class Recipe {
    title: string; // req
    owner: string;
    description: string;
    ingredients: string; // req
    steps: string; // req
    mealType: string; // req
    worldCuisine: string; // req
    rating: number;
    numRatings: number;
}
