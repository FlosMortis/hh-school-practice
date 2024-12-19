import globals from 'globals';
import pluginJs from '@eslint/js';
import prettier from 'eslint-config-prettier';

/** @type {import('eslint').Linter.Config[]} */
export default [
    pluginJs.configs.recommended,
    {
        languageOptions: { globals: globals.browser },
        rules: {
            'no-const-assign': 'error', // Пример твоего кастомного правила
        },
    },
    prettier // Подключение конфигурации Prettier
];
