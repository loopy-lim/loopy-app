import pluginQuery from '@tanstack/eslint-plugin-query';

module.exports = {
  ...pluginQuery,
  extends: ['expo', 'prettier'],
  plugins: ['prettier', 'react', 'react-native'],
  rules: {
    'prettier/prettier': ['error', { endOfLine: 'auto' }],
  },
};
