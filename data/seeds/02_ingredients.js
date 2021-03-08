exports.seed = async function (knex) {
	await knex('ingredients').insert([
		{ name: 'Kosher Salt' },
		{ name: 'Ground Black Pepper' },
		{ name: 'Fettuccine' },
		{ name: 'Olive Oil' },
		{ name: 'Boneless, Skinless Chicken Breats' },
		{ name: 'Unsalted Butter' },
		{ name: 'Heavy Cream' },
		{ name: 'Freshly Grated Nutmeg' },
		{ name: 'Freshly Grated Parmigiano-Reggiano' }
	]);
};
