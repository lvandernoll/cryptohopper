module.exports = {
  parser: '@typescript-eslint/parser',
  root: true,
  plugins: ['prettier', '@typescript-eslint', 'unused-imports'],
  parserOptions: {
    project: './tsconfig.json',
  },
  env: {
    browser: true,
    jest: true
  },
  settings: {
    react: {
      version: 'detect'
    }
  },
  extends: [
    'airbnb-typescript',
    'prettier/@typescript-eslint',
    'plugin:prettier/recommended',
  ],
  rules: {
    'no-plusplus': [ "error", { "allowForLoopAfterthoughts": true }],
    'consistent-return': 'off',
    'lines-between-class-members': 'off',
    'import/no-cycle': 'off',
    'no-unused-vars': 'off',
    'unused-imports/no-unused-imports': 'error',
    'unused-imports/no-unused-vars': [
      'warn',
      { 'vars': 'all', 'varsIgnorePattern': '^_', 'args': 'after-used', 'argsIgnorePattern': '^_' }
    ],
    '@typescript-eslint/camelcase': 'off',
    'react/prop-types': 0,
    'default-case': 0,
    '@typescript-eslint/no-use-before-define': 0,
    'react/static-property-placement': 0,
    'react/jsx-props-no-spreading': 0,
    'max-classes-per-file': 0,
    'class-methods-use-this': 0,
    'import/no-extraneous-dependencies': [ 'error', { devDependencies: true }],
    'import/prefer-default-export': 'off',
    'no-param-reassign': [
      'error',
      // Ignore for draft, e.g. immer js
      { props: true, ignorePropertyModificationsFor: ['draft'] }
    ],
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        trailingComma: 'all',
        printWidth: 80,
        endOfLine: 'auto',
      }
    ],
    semi: ['error', 'always'],
    'react/jsx-curly-newline': 'off',
    'react/jsx-first-prop-new-line': [2, 'multiline'],
    'react/jsx-max-props-per-line': [
      2,
      { maximum: 1, when: 'multiline' },
    ],
    'react/jsx-indent-props': [2, 2],
    'react/jsx-closing-bracket-location': [
      2,
      'tag-aligned',
    ],
    "sort-imports": ["error", {
      "ignoreCase": false,
      "ignoreDeclarationSort": true,
      "ignoreMemberSort": false,
      "memberSyntaxSortOrder": ["none", "all", "multiple", "single"],
    }]
  }
};
