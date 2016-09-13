module.exports = {
	entry: [
		'./src/index.js'
	],
	output: {
		path: __dirname,
		filename: 'bundle.js'
	},
	module: {
		loaders: [
			{
				test: /\.js$/,
				loader: 'babel',
				exclude: /node_modules/,
				presets: ['react', 'es2015']
			},
			{
				test: /\.css$/,
				loader: 'style-loader!css-loader',

			}
		]
	},
	resolve: {
		extensions: ['', '.js']
	}
};