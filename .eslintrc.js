module.exports = {
  parser: '@typescript-eslint/parser',
  settings: {
    react: {
      version: 'detect',
    },
  },
  parserOptions: {
    project: './tsconfig.json',
  },
  plugins: ['@typescript-eslint'],
  extends: ['plugin:react/recommended', 'plugin:@typescript-eslint/recommended'],
  rules: {
    // Overwrite rules specified from the extended configs e.g.
    '@typescript-eslint/explicit-function-return-type': 'off',
    "@typescript-eslint/no-explicit-any": ["off"],
    "prefer-const":"off"
  },
};
