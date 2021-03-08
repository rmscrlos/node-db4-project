exports.seed = async function (knex) {
	await knex('instructions').insert([
		{
			step: 1,
			instruction:
				'Bring a large pot of water to a boil, and salt generously. Add the pasta and cook according to package directions until al dente (tender but still slightly firm). Drain and toss with a splash of oil.',
			recipe_id: 1
		},
		{
			step: 2,
			instruction:
				'Meanwhile, slice the chicken into 1/4-inch-thick strips, and lay them on a plate or a sheet of waxed paper. Season with salt and pepper',
			recipe_id: 1
		},
		{
			step: 3,
			instruction:
				'Heat a large skillet over medium heat. Add 2 tablespoons of the butter. When the butter melts, raise the heat to medium-high and add the chicken in 1 layer. Cook, without moving the pieces, until the underside has browned, 1 to 2 minutes. Flip the pieces, and cook until browned and cooked through, 2 to 3 minutes more. Transfer the chicken to a medium bowl.',
			recipe_id: 1
		},
		{
			step: 4,
			instruction:
				'Reduce the heat to medium. Add the remaining 6 tablespoons butter. Scrape the bottom of the skillet with a wooden spoon to release any browned bits. When the butter has mostly melted, whisk in the cream and nutmeg and bring to a simmer, then cook for 2 minutes. Lower the heat to keep the sauce just warm.',
			recipe_id: 1
		},
		{
			step: 5,
			instruction:
				'Whisk the Parmigiano-Reggiano into the sauce. Add the chicken and cooked pasta and toss well. Season with salt and pepper. Serve hot in heated bowls.',
			recipe_id: 1
		}
	]);
};
