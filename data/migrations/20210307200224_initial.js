exports.up = async function (knex) {
	await knex.schema.createTable('recipes', table => {
		table.increments('id');
		table.text('name').notNull();
	});

	await knex.schema.createTable('ingredients', table => {
		table.increments('ingredient_id');
		table.text('name').notNull().unique();
	});

	await knex.schema.createTable('instructions', table => {
		table.increments('instruction_id');
		table.integer('step').notNull();
		table.text('instruction').notNull();
		table.integer('recipe_id').references('id').inTable('recipes');
	});

	await knex.schema.createTable('rec_ing', table => {
		table.integer('recipe_id').notNull().references('id').inTable('recipes');
		table.integer('ingredient_id').notNull().references('ingredient_id').inTable('ingredients');
		table.float('quantity');
		table.text('measurement');
		table.primary(['recipe_id', 'ingredient_id']);
	});
};

exports.down = async function (knex) {
	await knex.schema.dropTableIfExists('rec_ing');
	await knex.schema.dropTableIfExists('instructions');
	await knex.schema.dropTableIfExists('ingredients');
	await knex.schema.dropTableIfExists('recipes');
};
