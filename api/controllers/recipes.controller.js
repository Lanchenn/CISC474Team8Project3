const Recipe=require('../models/recipe');



//Current focus is this function:
//Request correctly routes here now, but passess null...
//Need to fix.
exports.getRecipeByID=function(req, res, next){
    console.log('in find recipe by id function');

    //console.log('req= '+ req + ' res= '+res+' next= '+next);

   // console.log('id = '+req.body);
    //console.log(Recipe.find(item => item.id == id));

    return Recipe.find(item => item.id == id);

    // if(!recipe[id]){
    //     return callback(new Error(
    //         'No recipe with id ' + id
    //     )
    // );
    // return callback(null, recipe[id]);
    // }

    //    return Recipe.find(x => x.id == req.body)
    //res.status(200).json({result: 'not implemented'})
}

//Some definitions. When get by ID func complete, implement these in similar fashion
//double-check schema var names 1st if bugs occur
exports.getRecipeByMealType=function(mealType){
    console.log('in find recipe by meal type function');
    return Recipe.find(item => item.mealType == mealType);
}

exports.getRecipeByAuth=function(author){
    console.log('in find recipe by author function');
    return Recipe.find(item => item.author == author);
}
exports.getRecipeByWorld=function(wC){
    console.log('in find recipe by author function');
    return Recipe.find(item => item.worldCuisine == wC);
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
