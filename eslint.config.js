import tsParser from '@typescript-eslint/parser';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import unicornPlugin from 'eslint-plugin-unicorn';

export default [
  // 1. Activate the official Unicorn recommended guidelines baseline
  unicornPlugin.configs['flat/recommended'],
  
  // 2. Lay down your strict RS School project specific quality rules
  {
    files: ['src/**/*.ts'],
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
    },
    linterOptions: {
      noInlineConfig: true, // Absolute ban on inline lint changes inside source files
    },
    plugins: {
      '@typescript-eslint': tsPlugin,
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'error', // 0 explicit any types allowed
      'no-console': 'error',                         // 0 console.log production statements allowed
      
      // Fine-tune Unicorn rules for development convenience and crash prevention
      'unicorn/prevent-abbreviations': 'off',       // Allowed for common development folder shortcodes
      'unicorn/expiring-todo-comments': 'off',      // Deactivated to bypass version compatibility error with ESLint v9
    },
  }
];
