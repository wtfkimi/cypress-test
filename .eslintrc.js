module.exports = {
	root: true,
	plugins: ['@typescript-eslint', 'import', 'prettier'],
	extends: ['airbnb-typescript/base', 'prettier', 'plugin:import/typescript'],
	parser: '@typescript-eslint/parser',
	parserOptions: {
		project: './tsconfig.eslint.json',
	},
	rules: {
		'@typescript-eslint/no-unused-vars': ['warn'],
		'@typescript-eslint/no-shadow': ['warn'],
		'@typescript-eslint/no-unused-expressions': ['warn'],
		'@typescript-eslint/no-useless-constructor': 'warn',
		'@typescript-eslint/no-use-before-define': ['warn'],
		'import/extensions': ['warn'],
		'import/no-extraneous-dependencies': [
			'warn',
			{ devDependencies: true },
		],
		'no-useless-constructor': 'off',
		'no-use-before-define': ['warn', { variables: false }],
	},
	globals: {
		cy: true,
		Cypress: true,
	},
};
