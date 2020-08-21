module.exports = {
  parser: "babel-eslint",
  extends: ["eslint:recommended", "plugin:react/recommended"],
  parserOptions: {
    ecmaVersion: 7,
    sourceType: "module",
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
};
