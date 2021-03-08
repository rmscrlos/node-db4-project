const express = require('express');
const helmet = require('helmet');
const recipeRouter = require('./routes/index');

const server = express();

server.use(helmet());
server.use(express.json());

server.use(recipeRouter);

server.use((err, req, res, next) => {
	console.log(err);
	res.status(500).json({
		message: 'Something went wrong. Please, try again later.'
	});
});

module.exports = server;
