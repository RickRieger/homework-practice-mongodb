const Recipe = require("../model/Recipe");


module.exports = {
  getAllRecipes: function (callback) {
    Recipe.find({}, function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },

  createRecipe: function (body, callback) {
    let createdRecipe = new Recipe({
      recipeName: body.recipeName,
    });

    createdRecipe.save(function (err, payload) {
      if (err) {
        callback(err, null);
      } else {
        callback(null, payload);
      }
    });
  },
  
}