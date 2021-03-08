const db = require('../../data/config');

const getRecipes = () => {
	return db('recipes');
};

const getShoppingList = recipe_id => {
	return db('rec_ing as ri')
		.innerJoin('recipes as r', 'r.id', 'ri.recipe_id')
		.innerJoin('ingredients as i', 'i.ingredient_id', 'ri.ingredient_id')
		.where('ri.recipe_id', recipe_id)
		.select('r.id', 'i.name', 'ri.quantity', 'ri.measurement');
};

const getInstructions = recipe_id => {
	return db('instructions as i')
		.innerJoin('recipes as r', 'r.id', 'i.recipe_id')
		.where('i.recipe_id', recipe_id)
		.select('i.instruction_id', 'i.step', 'i.instruction', 'r.name as recipe_name');
};

module.exports = {
	getRecipes,
	getShoppingList,
	getInstructions
};
