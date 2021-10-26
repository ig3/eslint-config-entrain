# eslint-config-entrain

[![npm][npm-image]][npm-url]
[![travis][travis-image]][travis-url]

[npm-image]: https://img.shields.io/npm/v/eslint-config-semistandard.svg?style=flat-square
[npm-url]: https://www.npmjs.com/package/eslint-config-semistandard
[travis-image]: https://img.shields.io/travis/standard/eslint-config-semistandard.svg?style=flat-square
[travis-url]: https://travis-ci.org/standard/eslint-config-semistandard

eslint sharable config for Entrain

## Install

```bash
npm install --save-dev @ig3/eslint-config-entrain
```

## Usage

In `package.json` of the package where you want to use
`@ig3/eslint-config-entrain`, add a section to configure eslint to use the
shared configuration:

```
  "eslintConfig": {
    "extends": "@ig3/eslint-config-entrain"
  }
```

You can add any other configuration you want to the same section. For
example, one project required:

```
  "eslintConfig": {
    "extends": "@ig3/eslint-config-entrain",
    "rules": {
      "node/no-callback-literal": "off"
    },
    "parserOptions": {
      "sourceType": "script"
    }
  }
```

This overrode one rule setting and changed one parser option, otherwise all
settings as per `eslint-config-entrain`.

For full details of creating and using shared configurations, see: 
[sharable configs](http://eslint.org/docs/developer-guide/shareable-configs).

Alternatively, you can use an
[eslint configuration file](https://eslint.org/docs/user-guide/configuring/configuration-files#configuration-file-formats).
Again, this is merely a configuration of eslint, so everything in the
[eslint](https://eslint.org/) documentation works as expected.


## Rules

`eslint-config-entrain` is based on
[eslint-config-standard](https://github.com/feross/eslint-config-standard).

Three rules are changed:

```
{
  "extends": "standard",

  "rules": {
    "semi": [2, "always"],
    "no-extra-semi": 2,
    "indent": [ "error", 2, { "MemberExpression": 0 }]
  }
}
```

[Semicolons are required](https://eslint.org/docs/rules/semi)
but [no extra semicolons](https://eslint.org/docs/rules/no-extra-semi)
are allowed, and
[2 spaces indentation (no tabs)](https://eslint.org/docs/rules/indent)
without enforced indentaton of multi-line property chains.

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

I quite like [standardjs](https://standardjs.com/) except:

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

With this configuration, I can have all the rules of
[standardjs](https://standardjs.org), with just a couple of personal
preference deviations, by using the configuration as-is, but can easily
change anything, according to the needs of the specific project, following
standard [eslint](https://eslint.org) documentation: the best of both
worlds.

## License

[ISC](LICENSE.md)

## Changes

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
