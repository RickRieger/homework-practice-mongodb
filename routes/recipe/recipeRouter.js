var express = require('express');
var router = express.Router();

var recipeController = require("./controller/recipeController");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.json({index:'index path'});
});

router.get("/get-all-recipes", function (req, res) {
  recipeController.getAllRecipes(function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});


router.post("/create-recipe", function (req, res) {
  recipeController.createRecipe(req.body, function (err, payload) {
    if (err) {
      res.status(500).json({ message: "Error", error: err });
    } else {
      res.json({ message: "success", data: payload });
    }
  });
});
module.exports = router;