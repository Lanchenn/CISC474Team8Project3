const testController=require('./controllers/test-controller'),
userController=require('./controllers/users.controller'),
recipeController=require('./controllers/recipes.controller'),
authenticationController=require('./controllers/authentication.controller'),
express = require('express');
passportService = require('./security/passport');


module.exports = function(app) {  
    // Initializing route groups
    const apiRoutes = express.Router();
    const userRoutes = express.Router();
    const recipesRoutes = express.Router();
    const authenticationRoutes = express.Router();

    userRoutes.get('/',userController.getUsers);
    userRoutes.get('/:id',userController.getUser);
    userRoutes.post('/',userController.createUser);

    //use these to test new stuff (don't forget to add proper prefix - see below)
    recipesRoutes.get('/', recipeController.getRecipes);
    recipesRoutes.get('/:id', recipeController.getRecipeByID); //get recipe with id=id
    recipesRoutes.get('/owner/:owner', recipeController.getRecipeByAuth); //get all recipes written by user with id=authID
    recipesRoutes.get('/type/:mealType', recipeController.getRecipeByMealType); //get recipes with mealtype = myType
    recipesRoutes.get('/world/:worldCuisine', recipeController.getRecipeByWorld); //get recipes with worldCuisine = worldType

    recipesRoutes.get('/delete/:delID', recipeController.deleteRecipeByID); //get recipes with worldCuisine = worldType
    

    recipesRoutes.post('/', recipeController.createRecipe);

    authenticationRoutes.post('/register', authenticationController.register);
    authenticationRoutes.post('/login', authenticationController.login);
    authenticationRoutes.get('/authorize',passportService.requireAuth,authenticationController.authorize);

    apiRoutes.use('/users',userRoutes);
    apiRoutes.use('/recipes', recipesRoutes); //prefix

    apiRoutes.get('/test', testController.test);
    apiRoutes.use('/auth',authenticationRoutes);
    
    //attach router to root
    app.use('/api', apiRoutes);
};