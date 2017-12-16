/**
    OVERVIEW: Schema for DB recipe entries defined here. Fields:
            - title
            - owner
            - description
            - ingredients
            - steps
            - mealType
            - worldCuisine
            - rating
            - numRatings
            - url
**/

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        title: {type: String, required: true},
        owner: {type: String},
        description: {type: String},
        ingredients: {type: [String], required: true},
        steps: {type: String, required: true},
        mealType: {type: String, required: true},
        worldCuisine: {type: String, required: true},
        rating: {type: Number},
        numRatings: {type: Number},
        url: {type: String, required: true}
})

//getters
RecipeSchema.methods.getTitle=function() {
    return this.title;
  }
  RecipeSchema.methods.getOwner=function() {
    return this.owner;
  }
  RecipeSchema.methods.getDescription=function() {
    return this.description;
  }
  RecipeSchema.methods.getIngredients=function() {
    return this.ingredients;
  }
  RecipeSchema.methods.getSteps=function() {
    return this.steps;
  }
  RecipeSchema.methods.getMealType=function() {
    return this.mealType;
  }
  RecipeSchema.methods.getWorldCuisine=function() {
    return this.worldCuisine;
  }
  RecipeSchema.methods.getRating=function() {
    return this.rating;
  }
  RecipeSchema.methods.getNumRatings=function() {
    return this.numRatings;
  }
  RecipeSchema.methods.getURL=function() {
    return this.url;
  }



module.exports = mongoose.model('Recipe', RecipeSchema);