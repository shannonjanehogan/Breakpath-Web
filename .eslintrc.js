module.exports = {
  "extends": [
    "eslint:recommended",
    "plugin:react/recommended"
  ],
  "env": {
    "browser": true,
    "commonjs": true,
    "es6": true,
    "jest": true,
    "mocha": true,
    "node": true
  },
  "parser": "babel-eslint",
  "parserOptions": {
    "ecmaVersion": 6,
    "sourceType": "module",
    "ecmaFeatures": {
      "experimentalObjectRestSpread": true,
      "jsx": true,
      "modules": true
    }
  },
  "plugins": [
    "react"
  ],
  "rules": {
    "arrow-body-style": [1],
    "no-console": [1],
    "strict": ["error", "global"],
    "curly": "warn"
  }
};
