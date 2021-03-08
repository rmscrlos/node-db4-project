const express = require('express');
const recipeModel = require('../models/model');

const router = express.Router();

// get all recipes
router.get('/recipes', async (req, res, next) => {
	try {
		const recipes = await recipeModel.getRecipes();
		res.json(recipes);
	} catch (err) {
		next(err);
	}
});

// get ingredients of recipe by id
router.get('/recipes/:id/ingredients', async (req, res, next) => {
	try {
		const ingredients = await recipeModel.getShoppingList(req.params.id);
		res.json(ingredients);
	} catch (err) {
		next(err);
	}
});

// get all instructions of recipe by id
router.get('/recipes/:id/instructions', async (req, res, next) => {
	try {
		const instructions = await recipeModel.getInstructions(req.params.id);
		res.json(instructions);
	} catch (err) {
		next(err);
	}
});

module.exports = router;
