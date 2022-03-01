/** @format */

module.exports = {
  extends: ['./base.js'],
  env: {
    node: true,
  },
  overrides: [
    {
      files: ['*.ts'],
      parser: '@typescript-eslint/parser',
      extends: [
        'eslint:recommended',
        'plugin:node/recommended-module',
        'plugin:promise/recommended',
        'plugin:@typescript-eslint/eslint-recommended',
        'plugin:@typescript-eslint/recommended-requiring-type-checking',
        'airbnb-base',
        'airbnb-typescript/base',
        'prettier',
      ],
      parserOptions: {
        project: ['./services/**/tsconfig.json','./packages/**/tsconfig.json'],
        // 2019 until Node 16
        ecmaVersion: 2019,
        ecmaFeatures: {
          legacyDecorators: true,
        },
      },
      rules: {
        'no-unused-vars': 'warn',
        // We don't run import and this was labeling imports from 3rd party packages
        // as errors
        'node/no-unpublished-import': 'off',
        // Conflicted with TS import checking, which is better
        'node/no-missing-import': 'off',
        // TSOA requires controllers use named exports, otherwise seems like
        // a style choice
        'import/prefer-default-export': 'off',
        // More of a style rule now that modules can handle this scenario
        '@typescript-eslint/no-use-before-define': 'off',
        'node/no-unsupported-features/es-syntax': [
          'error',
          {
            // Ignore dynamicImports until https://github.com/mysticatea/eslint-plugin-node/pull/256
            // Then remove the entire rule, as the "modules" part is already generated
            // from somewhere else
            ignores: ['dynamicImport', 'modules'],
          },
        ],
      },
      // VSCode says "Property overrides is not allowed" (I assume it means nested), but they are:
      // https://eslint.org/docs/user-guide/configuring/configuration-files#how-do-overrides-work
      overrides: [
        {
          files: ['*.controller.ts'],
          rules: {
            // Not sure if converting these methods to static would work or not,
            // so ignoring this rule since it goes against how the TSOA examples work
            'class-methods-use-this': 0,
          },
        },
        {
          files: ['*.spec.ts'],
          extends: ['plugin:jest/recommended'],
          rules: {
            // Disable so that the rule is covered by the Jest config instead
            // https://github.com/typescript-eslint/typescript-eslint/blob/v4.31.1/packages/eslint-plugin/docs/rules/unbound-method.md
            '@typescript-eslint/unbound-method': 'off',
          },
        },
      ],
    },
  ],
};
