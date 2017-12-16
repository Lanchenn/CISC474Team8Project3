const Recipe=require('../models/recipe');
const Database = require('../config/config');




//-------------------Functions below this line work------------------------------------------
exports.initTestData=function(req,res,next){
    
    var a=new Recipe({"title":"Avocado Toast", "owner":"Mia Adams", "description":"A quick breakfast meal", "ingredients": ["avocado", "olive oil", "bread"], "steps": ["Toast the bread", "Add olive oil", "Add avocado"], "mealType": "Breakfast", "worldCuisine": "USA", "rating":"3", "numRatings":"1", "url": "https://23209-presscdn-pagely.netdna-ssl.com/wp-content/uploads/2016/04/5MinuteAvocadoToastIMG_8273edit-340x340.jpg"});
    var b=new Recipe({"title":"Teriyaki Tofu", "owner":"Jessica Davey", "description":"Main dinner dish using teriyaki saucec and tofu", "ingredients": ["tofu", "teriyaki sauce", "flour"], "steps": ["Drain tofu and roll in flour", "Cook in frying pan until halfway done", "Add sauce and finish cooking"], "mealType": "Dinner", "worldCuisine": "Japan", "rating":"5", "numRatings":"3", "url":"http://img.taste.com.au/KCM58ylc/taste/2016/11/teriyaki-tofu-with-warm-udon-and-seaweed-salad-110651-1.jpeg"});
    var c=new Recipe({"title":"Grilled Cheese", "owner":"Estella Aviles", "description":"Classic and delicious lunch", "ingredients": ["bread", "cheese", "butter"], "steps": ["Spread butter on bread", "Put cheese on bread", "Cook on stove until done"], "mealType": "Lunch", "worldCuisine": "USA", "rating":"4", "numRatings":"1", "url":"https://atmedia.imgix.net/c3a8c1079c6970caf7188768531f20699d22f0d7?auto=format&q=45&w=600.0&h=800.0&fit=max&cs=strip"});
    var d=new Recipe({"title":"Paella", "owner":"Lan Chen", "description":"Spanish rice dish", "ingredients": ["rice", "sofrito", "shrimp"], "steps": ["Heat the sofrito", "Add the rice & cook", "Cook shrimp", "Mix and serve"], "mealType": "Dinner", "worldCuisine": "Spain", "rating":"3", "numRatings":"2", "url":"https://www.goya.com/media/3961/shrimp-paella.jpg?quality=80"});
    var e=new Recipe({"title":"Bacalaitos", "owner":"Wenyi Yin", "description":"Snack or part of a lunch meal", "ingredients": ["bacalao", "flour", "cilantro", "sazon seasoning", "oil"], "steps": ["Cut and wash bacalao", "Cook balacao in pot until done", "mix all ingredients in bowl", "fry in oil"], "mealType": "Lunch", "worldCuisine": "Puerto Rico", "rating":"5", "numRatings":"1", "url":"https://i.ytimg.com/vi/36yOqYOCW2E/maxresdefault.jpg"});
    var f=new Recipe({"title":"Oatmeal and Fruit", "owner":"Esme Li", "description":"A healthy breakfast meal", "ingredients": ["oatmeal", "fruit of your choice", "honey", "milk of your choice"], "steps": ["Cook oatmeal on stove with milk", "stir in honey to taste", "add fruit"], "mealType": "Breakfast", "worldCuisine": "USA", "rating":"5", "numRatings":"5", "url":"https://caloriecontrol.org/wp-content/uploads/steviabenefits.orgAdobeStock_60846844-1-759136f4a34b91fee32be82d1e22881b2d2d744d-740x494.jpeg"});
    var g=new Recipe({"title":"Salmon Onigiri", "owner":"Mia Adams", "description":"Rice balls with salmon filling", "ingredients": ["white short rice (sushi rice)", "seaweed sheet", "cooked salmon"], "steps": ["cook rice in rice cooker", "chop salmon", "spread rice in the middle of the seaweed sheet", "add salmon on top", "close into a pyramid shape", "wrap in plastic wrap to set in place"], "mealType": "Lunch", "worldCuisine": "Japan", "rating":"4", "numRatings":"2", "url":"https://upload.wikimedia.org/wikipedia/commons/1/1c/Salmon_onigiri_by_yomi955.jpg"});
    
    a.save(function(err,recipe){
       ;
    });
    b.save(function(err,recipe){
        ;
    });
    c.save(function(err,recipe){
    ;
    });
    d.save(function(err,recipe){
     ; 
    });
    e.save(function(err,recipe){
      ;
    });
    f.save(function(err,recipe){
       ;
    });
    g.save(function(err,recipe){
       ;
    });

    res.status(201).json("done");
}

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
        mealType:req.body.mealType, worldCuisine:req.body.worldCuisine, rating:0, numRatings:0, url:req.body.url});

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
//function to update rating of a recipe
//params: recipe_id, rating
exports.addRating= function (req, res, next) {
    const id = req.body.id;
   // console.log(id);
    const paramRating = parseInt(req.body.rating);
    //console.log(paramRating);
    return Recipe.findById(id, function (err, obj) {
         if (err) {
             console.log('error');
             res.status(400).send(err);
         }
         else if (!obj){
            res.status(400).send('obj not found');
         }
         else {
             console.log('obj found');
            if(obj.rating==0){
                console.log('rating is zero');
                obj.rating = paramRating;
                console.log('here1');
                obj.numRatings = 1;
                console.log('here2');
                obj.save((err, todo) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.status(200).send(obj);
                });
            }
            else{
                //console.log(obj.rating);
                console.log('rating = '+obj.rating + ' numRatings = '+obj.numRatings+' paramRating = '+paramRating)
                console.log('value1 = '+obj.rating*obj.numRatings);
                console.log((obj.rating*obj.numRatings));
                console.log(obj.numRatings+1);
                
                newRating = ((obj.rating*obj.numRatings)+paramRating)/(obj.numRatings+1);
                //console.log(newRating);
                obj.rating = newRating;
                obj.numRatings++;
                //console.log(obj.rating);

                obj.save((err, obj) => {
                    if (err) {
                        res.status(500).send(err)
                    }
                    res.status(200).send(obj);
                });
            }
         }
     });
 }
//uncomment to debug
// exports.test=function(req,res,next){
//     res.status(200).json({
//         test: 'Good to go'
//     });
// }