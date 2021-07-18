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
npm install --save-dev eslint-plugin-promise eslint-plugin-standard eslint-plugin-node eslint-plugin-import
npm install --save-dev eslint-config-standard
npm install --save-dev eslint-config-semistandard
npm install --save-dev eslint-config-entrain
# note that eslint-plugin-promise, eslint-plugin-standard, eslint-plugin-node, eslint-plugin-import & eslint-config-standard are required peer dependencies
```

## Usage

Read up on how to use [sharable configs](http://eslint.org/docs/developer-guide/shareable-configs) at the eslint website.

For more details see [eslint-config-standard](https://github.com/feross/eslint-config-standard)

## Contributing

Contributions welcome! Please read the [contributing guidelines](CONTRIBUTING.md) first.

## License

[ISC](LICENSE.md)

## Changes

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
