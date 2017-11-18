const testController=require('./controllers/test-controller'),
userController=require('./controllers/users.controller'),
recipeController=require('./controllers/recipes.controller'),
express = require('express');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const userRoutes = express.Router();
    const recipesRoutes = express.Router();

    userRoutes.get('/',userController.getUsers);
    userRoutes.get('/:id',userController.getUser);
    userRoutes.post('/',userController.createUser);

    //use these to test new stuff (don't forget to add proper prefix - see below)
    recipesRoutes.get('/', recipeController.getRecipes);
    recipesRoutes.get('/:id', recipeController.getRecipe);
    recipesRoutes.post('/', recipeController.createRecipe);


    apiRoutes.use('/users',userRoutes);
    apiRoutes.use('/recipes', recipesRoutes); //prefix

    apiRoutes.get('/test', testController.test);
    
    //attach router to root
    app.use('/api', apiRoutes);
};