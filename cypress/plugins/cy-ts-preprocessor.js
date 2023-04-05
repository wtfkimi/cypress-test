const wp = require('@cypress/webpack-preprocessor');

const webpackOptions = {
	resolve: {
		extensions: ['.ts', '.js'],
		fallback: {
			path: require.resolve('path-browserify'),
			util: require.resolve('util/'),
			os: require.resolve('os-browserify'),
			querystring: false,
		},
	},
	module: {
		rules: [
			{
				test: /\.ts$/,
				exclude: [/node_modules/],
				use: [
					{
						loader: 'ts-loader',
						options: {
							transpileOnly: true,
						},
					},
				],
			},
		],
	},
};

const options = {
	webpackOptions,
};
module.exports = wp(options);
