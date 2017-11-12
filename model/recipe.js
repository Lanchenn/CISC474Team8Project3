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
**/

const mongoose = require('mongoose'),
Schema = mongoose.Schema;

const RecipeSchema = new Schema({
        title: {type: String, required: true},

        //add validation to check that user is a username,
        //or set type to acct (will be user'defined)
        //leave as not required? Option to post anonymously?
        owner: {type: String},

        description: {type: String},

        //1 <= ingredients <= 20
        ingredients: {type: [String], required: true},
        
        //can make into array if we want to enter data in UI as
        //separate steps. Simpler as one long string, though
        steps: {type: String, required: true},

        mealType: {type: String, required: true},
        worldCuisine: {type: String, required: true},
        rating: {type: Number}
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



module.exports = mongoose.model('Recipe', RecipeSchema);