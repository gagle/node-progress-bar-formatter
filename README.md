progress-bar-formatter
======================

#### Progress bar formatter ####

[![npm version][npm-version-image]][npm-url]
[![Travis][travis-image]][travis-url]
[![Coveralls][coveralls-image]][coveralls-url]

#### Example ####

```javascript
var pbf = require ("progress-bar-formatter");

var progress = pbf.create ();
console.log (progress.format (0.4));
//##########··············
```

#### Functions ####

- [_module_.create([options]) : Formatter](#create)

#### Objects ####

- [Formatter](#formatter_object)

---

<a name="create"></a>
___module_.create([options]) : Formatter__

Returns a new [Formatter](#formatter_object) instance.

Options:

- __complete__ - _String_  
  The character that shows completion progress. Default is `#`.
- __incomplete__ - _String_  
  The character that shows the remaining progress. Default is `·`.
- __length__ - _Number_  
  The length of the progress bar. Default is `24`.

---

<a name="formatter_object"></a>
__Formatter__

__Methods__

- [Formatter#format(n) : String](#formatter_format)

---

<a name="formatter_format"></a>
__Formatter#format(n) : String__

Formats the progress bar. `n` is a number between 0 and 1.

[npm-version-image]: https://img.shields.io/npm/v/progress-bar-formatter.svg?style=flat
[npm-url]: https://npmjs.org/package/progress-bar-formatter
[travis-image]: https://img.shields.io/travis/gagle/node-progress-bar-formatter.svg?style=flat
[travis-url]: https://travis-ci.org/gagle/node-progress-bar-formatter
[coveralls-image]: https://img.shields.io/coveralls/gagle/node-progress-bar-formatter.svg?style=flat
[coveralls-url]: https://coveralls.io/r/gagle/node-progress-bar-formatter