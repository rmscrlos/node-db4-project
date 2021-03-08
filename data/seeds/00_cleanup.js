exports.seed = async function (knex) {
	await knex('rec_ing').truncate();
	await knex('instructions').truncate();
	await knex('ingredients').truncate();
	await knex('recipes').truncate();
};
