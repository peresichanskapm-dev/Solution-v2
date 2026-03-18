import js from "@eslint/js";
import reactPlugin from "eslint-plugin-react";
import reactHooksPlugin from "eslint-plugin-react-hooks";
import nextPlugin from "@next/eslint-plugin-next";
import prettierPlugin from "eslint-plugin-prettier";

export default [
	js.configs.recommended,
	{
		files: ["**/*.{js,jsx,mjs,cjs}"],
		languageOptions: {
			ecmaVersion: "latest",
			sourceType: "module",
			globals: {
				window: "readonly",
				document: "readonly",
				console: "readonly",
			},
		},
		plugins: {
			react: reactPlugin,
			"react-hooks": reactHooksPlugin,
			next: nextPlugin,
			prettier: prettierPlugin,
		},
		settings: {
			react: {
				version: "detect",
			},
		},
		rules: {
			"no-unused-vars": [
				"warn",
				{
					argsIgnorePattern: "^_",
					varsIgnorePattern: "^_",
				},
			],
			"no-console": "off",
			"no-debugger": "warn",
			"prefer-const": "warn",
			"no-var": "error",
			"react/react-in-jsx-scope": "off",
			"react/jsx-uses-react": "off",
			"react/prop-types": "off",
			"react-hooks/rules-of-hooks": "error",
			"react-hooks/exhaustive-deps": "warn",
			"next/no-img-element": "warn",
			"next/no-html-link-for-pages": "off",
			"prettier/prettier": "warn",
		},
	},
	{
		ignores: ["node_modules", ".next", "out", "dist", "build"],
	},
];
