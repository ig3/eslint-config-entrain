# eslint-config-entrain

eslint sharable config for Entrain.

## Install

```bash
npm install --save-dev @ig3/eslint-config-entrain
```

## Usage

This package provides eslint version 9 flat configuration for CommonJS
modules.

Create file `eslint.config.js` containing:

```
'use strict';

const eslintConfigEntrain = require('@ig3/eslint-config-entrain');

module.exports = [
  ...eslintConfigEntrain
];
```

You can add or override rules or other configuration options using standard
eslint flat configuration.

example, one project required:

```
'use strict';

const eslintConfigEntrain = require('@ig3/eslint-config-entrain');
const globals = require('globals');

module.exports = [
  ...eslintConfigEntrain,
  languageOptions: {
    sourceType: 'commonjs',
    globals: {
      ...globals.node,
    }
  },
];
```

## Implementation
This implementation is based on
[neostandard](https://www.npmjs.com/package/neostandard).

Previous versions were based on
[eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard)
however that was stuck on eslint version 8 with no immediate plans to
support version 9 and the new flat configuration. The neostandard project
was forked to address the stalled development of standard.

For full details of creating and using shared configurations, see: 
[sharable configs](http://eslint.org/docs/developer-guide/shareable-configs).


## Rules

`eslint-config-entrain` is based on
[neostandard](https://www.npmjs.com/package/neostandard).

The following rules are changed:

```
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
```

[Semicolons are required](https://eslint.style/rules/default/semi)
but [no extra semicolons](https://eslint.style/rules/default/no-extra-semi)
are allowed, and
[2 spaces indentation (no tabs)](https://eslint.style/rules/default/indent)
without enforced indentaton of multi-line property chains.

[Object shorthand](https://eslint.org/docs/rules/object-shorthand) must be
used consistently (all shorthand or all long-form) but isn't required.

For example:

```
  functionReturningPromise()
  .then(result => {
    console.log('the result is: ', result);
  })
  .catch(err => {
    console.error('failed with: ', err);
  });
```

But if you prefer to indent the promise chain, that's OK too:

```
  functionReturningPromise()
    .then(result => {
      console.log('the result is: ', result);
    })
    .catch(err => {
      console.error('failed with: ', err);
    });
```

## Motivation

I quite liked [standardjs](https://standardjs.com/) except:

 1. For consistency with other languages that require semicolons (e.g. Perl,
    C, etc.) I prefer to use semicolons to terminate statements. [Automatic
    Semicolon
    Insertion](http://www.ecma-international.org/ecma-262/5.1/#sec-7.9) is
    an unfortunate misfeature of JavaScript. It is not ambiguous at all
    (despite much argument, disagreement and misunderstanding) but it
    requires the developer to be familiar with and pay attention to the
    rules: something that computers are good at but humans are not.

 2. I don't like indenting promise chains. One of the advantages of promises
    over callbacks is avoiding indentation and requiring the chain to be
    indented removes some of this benefit. But eslint-config-entrain doesn't
    enforce no indentation, so feel free to indent if that's your
    preference.

 3. Sometimes it is necessary to override settings.
    [standardjs](https://standardjs.com/) makes doing so difficult to
    impossible (e.g. it is practically impossible to set parser options when
    using `standard`). While consistency is good, sometimes exceptions are
    appropriate or even necessary (e.g. when developing a common node CJS
    module that is not using strict mode), particularly when working with
    existing / legacy code. 

 4. Working with a linter which I know is based on
    [eslint](https://eslint.org) but which doesn't behave according to the
    [eslint](https://eslint.org) documentation is frustrating, particularly
    as some of the features of [standardjs](https://standardjs.com) are not
    documented (e.g. details of the command line options).

 5. It doesn't support eslint version 9 and flat configuration, and the
    current version (as at 20240619) requires packages that are no longer
    supported, some of which have known faults. The package developers and
    contributors were unable to agree to a plan to support version 9,
    causing neostandard to be forked.

With this configuration, I can have all the rules of
[standardjs](https://standardjs.org), with just a couple of personal
preference deviations, by using the configuration as-is, but can easily
change anything, according to the needs of the specific project, following
standard [eslint](https://eslint.org) documentation: the best of both
worlds.

## License

[ISC](LICENSE.md)

## Changes
### 3.0.1 - 20220503

Override object-shorthand to consistent

### 3.0.0 - 20220503

Update dependencies.

```
 eslint-config-standard   ^16.0.3  →   ^17.0.0     
 eslint-plugin-import    >=2.25.3  →  >=2.26.0     
 eslint-plugin-promise    >=5.1.1  →   >=6.0.0     
 eslint                    ^8.2.0  →   ^8.14.0     
 tape                      ^5.3.1  →    ^5.5.3     
```

### 2.0.5 - 20211116
Update dependencies

### 2.0.4 - 20211027

* Update dependencies.
* Adapt tests to the new version of eslint.
* Add an eslint configuration

### 2.0.3 - 20210722

Update README.

### 2.0.2 - 20210720

Change peerDependencies to dependencies.

### 2.0.1 - 20210718

Removed peer dependency on eslint-plugin-standard

### 2.0.0 - 20210718

Update dependencies:

```
 eslint                   >=6.0.1  →  >=7.31.0
 eslint-config-standard   ^14.1.1  →   ^16.0.3
 eslint-plugin-import    >=2.18.0  →  >=2.23.4
 eslint-plugin-node       >=9.1.0  →  >=11.1.0
 eslint-plugin-promise    >=4.2.1  →   >=5.1.0
 eslint-plugin-standard   >=4.0.0  →   >=5.0.0
 tape                      ^4.9.1  →    ^5.2.2
```

## 4.0.0 - 20240619
 * Based on neostandard instead of standard
 * Configuration for eslint version 9 flat configuration
 * updated dependencies

## 4.0.1 - 20240619
 * Remove dependency @stylistic/eslint-plugin-js
