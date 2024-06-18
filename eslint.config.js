'use strict';

const neostandard = require('neostandard')({});

module.exports = [
  ...neostandard,
  {
    rules: {
      '@stylistic/semi': [2, 'always'],
      '@stylistic/no-extra-semi': 2,
      '@stylistic/indent': ['error', 2, {
        MemberExpression: 0,
      }],
      'object-shorthand': ['error', 'consistent'],
    },
  },
];
