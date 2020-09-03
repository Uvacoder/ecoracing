module.exports = {
  extends: ['stylelint-config-standard', 'stylelint-config-prettier'],
  // add your custom config here
  // https://stylelint.io/user-guide/configuration
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'function',
          'if',
          'each',
          'include',
          'return',
          'for',
          'mixin',
          'screen',
        ],
      },
    ],

    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'declaration-block-single-line-max-declarations': null,
    'declaration-empty-line-before': null,
  },
}
