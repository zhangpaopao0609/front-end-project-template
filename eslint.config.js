import antfu from '@antfu/eslint-config';

export default antfu({
  stylistic: {
    semi: true,
  },
  ignores: ['tsconfig.json'],
});
