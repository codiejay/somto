module.exports = {
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  settings: {
    'import/resolver': {
      node: {
        paths: ['.', 'components', 'styles'],
        extensions: ['.js', '.jsx'],
      },
    },
    react: {
      version: 'detect',
    },
  },
  extends: ['plugin:react/recommended', 'next', 'airbnb', 'prettier'],
  plugins: ['react', 'prettier'],
  rules: {
    'import/extensions': 'off',
    'import/default': 'off',
    'import/prefer-default-export': 'off',
    'import/no-unresolved': 'off',
    'no-plusplus': 'off',
    'import/order': 'off',
    'react/jsx-curly-brace-presence': 'off',
    'arrow-body-style': 'off',
    'prefer-template': 'off',
    'react/function-component-definition': [
      2,
      { namedComponents: 'arrow-function' },
    ],
    'react/jsx-filename-extension': [1, { extensions: ['.js', '.jsx'] }],
    'react/jsx-props-no-spreading': 'off',
    'react/prop-types': 'off',
    'react/react-in-jsx-scope': 'off',
    '@next/next/no-page-custom-font': 'off',
  },
};
