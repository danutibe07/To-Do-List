module.exports = {
  "ecmaFeatures": {
    "modules": true,
    "spread" : true,
    "restParams" : true
},
  "env": {
      "browser": true,
      "commonjs": true,
      "es2021": true
  },
  "extends": "eslint:recommended",
  "overrides": [
  ],
  "rules" : {
      "no-unused-vars" : 2,
      "no-undef" : 2
  },
  "parserOptions": {
      "sourceType": "module"
  }
}