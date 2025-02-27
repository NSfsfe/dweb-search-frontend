module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    'plugin:vue/strongly-recommended',
    'eslint:recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: '@babel/eslint-parser',
  },
  settings: {
    'import/resolver': {
      alias: {
        map: [
          ['@', './src'],
        ],
        extensions: ['.ts', '.js', '.jsx', '.json', '.vue'],
      },
    },
  },
  rules: {
    'no-console': 'off',
    'max-len': [
      'warn', {
        code: 100,
        ignoreUrls: true,
      },
    ],
    'import/extensions': [
      'warn',
      'always',
      {
        js: 'never',
        ts: 'never',
        vue: 'never',
      },
    ],
    'import/prefer-default-export': 'off',
    'import/named': 'off',
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
      ],
      env: {
        jest: true,
      },
    },
  ],
};
