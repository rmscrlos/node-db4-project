exports.seed = async function (knex) {
	await knex('rec_ing').insert([
		{ recipe_id: 1, ingredient_id: 1 },
		{ recipe_id: 1, ingredient_id: 2 },
		{ recipe_id: 1, ingredient_id: 3, quantity: 12, measurement: 'oz' },
		{ recipe_id: 1, ingredient_id: 4 },
		{ recipe_id: 1, ingredient_id: 5, quantity: 12, measurement: 'oz' },
		{ recipe_id: 1, ingredient_id: 6, quantity: 8, measurement: 'tbsp' },
		{ recipe_id: 1, ingredient_id: 7, quantity: 2, measurement: 'cups' },
		{ recipe_id: 1, ingredient_id: 8, quantity: 2, measurement: 'pinches' },
		{ recipe_id: 1, ingredient_id: 9, quantity: 1.5, measurement: 'cups' }
	]);
};
