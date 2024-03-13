import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
    // https://eslint.style/rules
    overrides: {
      'style/brace-style': ['error', '1tbs'],
    },
  },
  ignores: ['tsconfig.json'],
});
