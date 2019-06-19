# js-validators

> :warning: This library is currently under construction and is not fully tested. Do not use in production environments.

Just a bunch of arrow functions that check if value is specific thing.

This library relies on a modern native ES6 implementation to work. It will not work in IE11 or older versions of Node.

## Validators

### isArray( value )

Returns `true` if `value` is an array, otherwise `false`.

Identical to `Array.isArray( value )`.

### isBoolean( value )

Returns `true` if `value` is a _primitive_ boolean value (`true` or `false`), otherwise `false`.

It will return `false` for `Boolean` _instances_ (eg. `new Boolean( true )`) and truthy / falsey values (eg. `null`, `0`, or `''` empty string).

### isConstructable( value )

Returns `true` if `value` can be instantiated with the `new` keyword, otherwise `false`.

Will return `false` for `Symbol` which, despite technically being constructable, will throw `Error: Symbol is not a constructor` if used with the `new` operator.

Classes and non-arrow functions are constructible. A `Proxy` is used to test for cosntructability _without_ instantiating an instance of `value`.

### isConstructible( value )

Identical to `isConstructable( value )`, just different spelling.

### isClass( value )

> :warning: **CAUTION**  
>  
> Transpiled code (eg. Babel, TypeScript, etc) will almost always convert ES6 classes in to normal functions and the resulting "function-based classes" would elicit a `false` result from `isClass()`.

Returns `true` if `value` is an actual ES6 `class`, otherwise `false`.

This is similar to `isConstructable`, but filters out normal functions.

### isDate( value )

Returns `true` if `value` is a `Date` instance, otherwise `false`.

### isError( value )

> :warning: There are errors with this validator, avoid using until further notice.

Returns `true` if `value` is some form of error object, otherwise `false`.

Will return `false` for errors that are primitive values (eg. `throw "foobar"`).

### isFunction( value )

Returns `true` if `value` is some kind of function, otherwise `false`.

Valid functions are:

* `function` - normal functions
* `arrow =>` - arrow functions
* (not yet tested) `async function` - async functions
* `function*` - generator functions
* `class` - ES6 classes

To filter to invokable functions, use `isInvokable()`. To filter to instantiatable functions use `isConstructable()`.

### isGenerator( value )

Returns `true` if `value` is a generator function defined with `function*` syntax, otherwise `false`.

### isGeneratorish( value )

Returns `true` if `value` is or looks like a generator, otherwise `false`.

This includes both `function*` and also objects which implement both `[Symbol.iterator]()` & `next()` methods. It does not check for presence of a `throw()` method.

Note that just because something has `[Symbol.iterator]()` & `next()` methods doesn't necessarily mean it is actually a generator, so use this with care!

### isGeneratorishThrowable( value )

Like `isGeneratorish()` but also requires presence of the `.throw()` method.

This is a much more reliable check than `isGeneratorish()` as non-generators are far less likely to have a `.throw()` method.

### isInvokable( value )

> :warning: There are errors with this validator, avoid using until further notice.

Returns `true` if `value` is an invokable function, otherwise `false`.

Note that it does not actually invoke the function, so it's possible there will be some false positives, for example the following function is technically invokable but will throw an error if not called with the `new` operator:

```es6
function foo() {
   if ( !new.target ) throw 'This can only be used with the "new" operator'
}
```

### isIterable( value )

Returns `true` if `value` implements `[Symbol.iterator]()` method, otherwise `false`.

Iterators can be used in `for .. of` loops. Note that strings are iterable.

### isIterableExcludeString( value )

Like `isIterable()` but excludes strings.

### isNull( value )

Returns `true` if `value` is defined as `null`, otherwise `false`.

Fam, it's literally `value === null`.

### isNumber( value )

Returns `true` if `value` is a _primitive and finite_ number value, otherwise `false`.

It will return `false` for `Number` _instances_ (eg. `new Number( true )`) and strings.

### isNumberish( value )

Like `isNumber()` but also allows strings containing numbers.

### isObject( value )

Returns `true` if `value` is an object of any kind, otherwise `false`.

Will return `false` for primitive values (including `null`), functions and classes, but will return `true` for arrays and instances of classes.

### isPlainObject( value )

Returns `true` if `value` is a _plain object_, otherwise `false`.

By _plain object_ we mean something that is derived from an _unextended_ `Object`.

Will return `false` for primitive values (including `null`), arrays, functions, classes, and instances of classes.

### isPrimative( value )

Returns `true` if `value` is a primitive value, otherwise `false`.

Will return `false` for object instances of primitive values (eg. `new Number(5)`).

### isRegExp( value )

Returns `true` if `value` is a regular expression, otherwise `false`.

### isString( value )

Returns `true` if `value` is a _primitive_ string value, otherwise `false`.

It will return `false` for `String` _instances_ (eg. `new String( 'foo' )`).

### isSymbol( value )

Returns `true` if `value` is a symbol, otherwise `false`.

### isUndefined( value )

Returns `true` if `value` is defined as `undefined`, otherwise `false`.

Fam, it's literally `value === undefined`.
