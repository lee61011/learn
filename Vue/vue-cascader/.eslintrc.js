module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/essential',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'linebreak-style': ["off", "windows"],
    'prefer-arrow-callback': 'off',
    "max-len": [0, 80, 4], //字符串最大长度
    "semi": [0, "never"],
    "prefer-const": 0,
    "no-trailing-spaces": 1,
    "padded-blocks": 1,
    "no-multiple-empty-lines": [2, { "max": 1 }]
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
