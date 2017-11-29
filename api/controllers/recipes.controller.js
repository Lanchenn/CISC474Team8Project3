const Recipe=require('../models/recipe');

exports.getRecipes=function(req,res,next){
    console.log('in general get recipes function');
    Recipe.find({},function(err,recipes){
        res.status(201).json(recipes)
    })
}
exports.test=function(req,res,next){
    res.status(200).json({
        test: 'Good to go'
    });
}
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
//implement this Monday
exports.getRecipe=function(id){
    console.log('in find recipe by id function');
    //return 'here';
    console.log(recipe.find(item => item.id == id));

    return recipe.find(item => item.id == id);

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