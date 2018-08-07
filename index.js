module.exports = {
  env: {
    es6: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:flowtype/recommended',
    'plugin:import/recommended',
    'prettier',
    'prettier/flowtype',
  ],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  plugins: ['flowtype', 'import', 'prettier'],
  rules: {
    'array-callback-return': 'warn',
    'default-case': ['warn', { commentPattern: '^no default$' }],
    'dot-location': ['warn', 'property'],
    eqeqeq: ['warn', 'allow-null'],
    'import/order': 'warn',
    'new-parens': 'warn',
    'no-array-constructor': 'warn',
    'no-caller': 'warn',
    'no-eval': 'warn',
    'no-extend-native': 'warn',
    'no-extra-bind': 'warn',
    'no-extra-label': 'warn',
    'no-implied-eval': 'warn',
    'no-iterator': 'warn',
    'no-label-var': 'warn',
    'no-lone-blocks': 'warn',
    'no-loop-func': 'warn',
    'no-multi-str': 'warn',
    'no-new-func': 'warn',
    'no-new-object': 'warn',
    'no-new-wrappers': 'warn',
    'no-octal-escape': 'warn',
    'no-script-url': 'warn',
    'no-self-compare': 'warn',
    'no-sequences': 'warn',
    'no-shadow-restricted-names': 'warn',
    'no-sparse-arrays': 'warn',
    'no-template-curly-in-string': 'warn',
    'no-this-before-super': 'warn',
    'no-throw-literal': 'warn',
    'no-unused-vars': [
      'error',
      {
        ignoreRestSiblings: true,
        varsIgnorePattern: '^_',
        argsIgnorePattern: '^_',
      },
    ],
    'no-use-before-define': [
      'warn',
      {
        functions: false,
        classes: false,
        variables: false,
      },
    ],
    'no-useless-computed-key': 'warn',
    'no-useless-concat': 'warn',
    'no-useless-constructor': 'warn',
    'no-useless-rename': 'warn',
    'no-var': 'error',
    'no-with': 'warn',
    'no-whitespace-before-property': 'warn',
    'prefer-const': 'error',
    'prettier/prettier': ['error', require('./prettier.config')],
    'unicode-bom': ['warn', 'never'],
  },
}
