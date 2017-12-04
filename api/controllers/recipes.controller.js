const Recipe=require('../models/recipe');


//Current focus is this function:
//Debug: returns nothing - err 450 obj doesn't exist, even w/ verified data. Problem w/ DB?
exports.getRecipeByID = function (req, res, next) {
    console.log('in find recipe by id function');
    const id = req.params['id'];
    return Recipe.findOne({ id: id }, function (err, obj) {
        if (err) {
            res.status(400).send(err);
        }
        else if (!obj){
            res.status(450).json({});
        }
        else {
            res.status(200).json(obj);
        }
    });
}

exports.getRecipeByMealType= function (req, res, next) {
    console.log('in find recipe by meal type function');
    const mealType = req.params['mealType'];
    return Recipe.findOne({ mealType: mealType }, function (err, obj) {
        if (err) {
            res.status(400).send(err);
        }
        else if (!obj){
            res.status(450).json({});
        }
        else {
            res.status(200).json(obj);
        }
    });
}

exports.getRecipeByAuth= function (req, res, next) {
    console.log('in find recipe by author function');
    const author = req.params['author'];
    return Recipe.findOne({ author: author }, function (err, obj) {
        if (err) {
            res.status(400).send(err);
        }
        else if (!obj){
            res.status(450).json({});
        }
        else {
            res.status(200).json(obj);
        }
    });
}
exports.getRecipeByWorld= function (req, res, next) {
    console.log('in find recipe by author function');
    const worldCuisine = req.params['worldCuisine'];
    return Recipe.findOne({ worldCuisine: worldCuisine }, function (err, obj) {
        if (err) {
            res.status(400).send(err);
        }
        else if (!obj){
            res.status(450).json({});
        }
        else {
            res.status(200).json(obj);
        }
    });
}


//-------------------------------------------------------------
//Works
exports.getRecipes=function(req,res,next){
    console.log('in general get recipes function');
    Recipe.find({},function(err,recipes){
        res.status(201).json(recipes)
    })
}

//Works
exports.createRecipe=function(req,res,next){
    // res.status(200).json({
    //     test: 'Good to go2'
    // });
    
    var u=new Recipe({title: req.body.title, owner:req.body.owner, 
        description:req.body.description, ingredients:req.body.ingredients, steps:req.body.steps,
        mealType:req.body.mealType, worldCuisine:req.body.worldCuisine}); //don't include rating on create

    u.save(function(err,recipe){
        res.status(200).json(recipe);
    });


}
//Works
exports.test=function(req,res,next){
    res.status(200).json({
        test: 'Good to go'
    });
}
