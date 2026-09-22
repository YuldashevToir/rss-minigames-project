import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  {
    // Restrict linter passes strictly to pure TypeScript source assets
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      noInlineConfig: true,
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
      'unicorn': unicornPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error',
      'no-console': 'error',
      'unicorn/prevent-abbreviations': 'off',
      'unicorn/expiring-todo-comments': 'off',
      'unicorn/prefer-dom-node-append': 'error'
    },
  }
];
