module.exports = {
  "parserOptions": {
    "parser": "babel-eslint",
    "sourceType": "module",
    "allowImportExportEverywhere": false
  },
  "extends": [
    "eslint:recommended",
  ],
  "env": {
    "node": true,
    "browser": true,
    "es6": true
  },
  "settings": {
    "ecmascript": 6
  },
  "plugins": [
    "html"
  ],
  "rules": {
    "quotes": 0,
    "no-unused-vars": 1,
    "no-undef": 1,
    "camelcase": 0,
    "no-underscore-dangle": 0,
    "global-strict": 0,
    "no-multi-spaces": 0,
    "curly": 0,
    "comma-dangle": 0,
    "no-console": 0,
    "no-use-before-define": 0,
  },
  "globals": {
    "require": true,
    "define": true,
    "module": true,
  }
}
