progress-bar-formatter
======================

#### Formats a progress bar ####

[![NPM version](https://badge.fury.io/js/progress-bar-formatter.png)](http://badge.fury.io/js/progress-bar-formatter "Fury Version Badge")

[![NPM installation](https://nodei.co/npm/progress-bar-formatter.png?mini=true)](https://nodei.co/npm/progress-bar-formatter "NodeICO Badge")

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