module.exports = {
	entry: "./scripts/app.js",
	output: {
		path: __dirname,
		filename: "dist/scripts/app.js"
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
};
