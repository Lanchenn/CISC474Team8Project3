const Recipe=require('../models/recipe');
const Database = require('../config/config');


//-------------------Functions below this line work------------------------------------------

//QUESTION for class: why does findById work but findOne doesn't?
exports.getRecipeByID = function (req, res, next) {
 //   console.log('in find recipe by id function');
    const id = req.params['id'];
   // console.log('id = '+id);
    return Recipe.findById(id, function (err, obj) {
        if (err) {
            res.status(400).send(err);
        }
        else if (!obj){
            console.log('obj with id '+id+' not found');
            res.status(450).json({});
        }
        else {
            res.status(200).json(obj);
        }
    });
}

exports.getRecipes=function(req,res,next){
 //   console.log('in general get recipes function');
    Recipe.find({},function(err,recipes){
        res.status(201).json(recipes)
    })
}

exports.createRecipe=function(req,res,next){
    
    var u=new Recipe({title: req.body.title, owner:req.body.owner, 
        description:req.body.description, ingredients:req.body.ingredients, steps:req.body.steps,
        mealType:req.body.mealType, worldCuisine:req.body.worldCuisine}); //don't include rating on create

    u.save(function(err,recipe){
        res.status(200).json(recipe);
    });


}

exports.getRecipeByAuth= function (req, res, next) {
   // console.log('in find recipe by author function');
    const owner = req.params['owner'];
    return Recipe.find({ owner: owner }, function (err, obj) {
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
   // console.log('in find recipe by meal type function');
    const mealType = req.params['mealType'];
    //console.log(mealType);
    return Recipe.find({ mealType: mealType }, function (err, obj) {
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
    // console.log('in find recipe by WC function');
     const worldCuisine = req.params['worldCuisine'];
     console.log(worldCuisine);//this gives undefined
     return Recipe.find({ worldCuisine: worldCuisine }, function (err, obj) {
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
 
 exports.deleteRecipeByID = function (req, res, next) {
    //console.log('in delete recipe by id function');
    const id = req.params['delID'];
    //console.log('id = '+id);
    Recipe.findByIdAndRemove(id, (err, Recipe)=>{
        res.status(200).send("deleted");
    });
}

//uncomment to debug
// exports.test=function(req,res,next){
//     res.status(200).json({
//         test: 'Good to go'
//     });
// }
