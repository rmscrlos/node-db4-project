exports.seed = async function (knex) {
	await knex('recipes').insert([{ name: 'Chicken Alfredo' }]);
};
