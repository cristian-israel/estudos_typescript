# ESLint

- Installation
> npm install -g eslint @eslint/js @typescript-eslint/eslint-plugin @typescript-eslint/parser

###

- Create a configuration file
```js
// .eslint.config.js
const js = require("@eslint/js");
const ts = require("@typescript-eslint/eslint-plugin");
const tsParser = require("@typescript-eslint/parser");

module.exports = [
	js.configs.recommended,
  {
		files: ["**/*.ts", "**/*.tsx"],
    languageOptions: {
			parser: tsParser,
      sourceType: "module"
    },
    plugins: {
			"@typescript-eslint": ts
    },
    rules: {
			"@typescript-eslint/no-unused-vars": "warn",
      "@typescript-eslint/explicit-function-return-type": "off"
    }
  }
];
```

###

- Run ESLint
> eslint . --fix
