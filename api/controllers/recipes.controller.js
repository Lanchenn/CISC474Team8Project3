const Recipe=require('../models/recipe');

exports.getRecipes=function(req,res,next){
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
    // console.log('req.body=');
    // console.log(req.body);
    // console.log('req body title=');
    // console.log(req.body.title);
    // console.log('u = ');
    // console.log(u);
    var u=new Recipe({title: req.body.title, owner:req.body.owner, 
        description:req.body.description, ingredients:req.body.ingredients, steps:req.body.steps,
        mealType:req.body.mealType, worldCuisine:req.body.worldCuisine}); //don't include rating on create

    u.save(function(err,recipe){
        res.status(200).json(recipe);
    });


}
exports.getRecipe=function(req,res,next){
    res.status(200).json({result: 'not implemented'})

}