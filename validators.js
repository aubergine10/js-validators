'use strict'

// CC0 aubergine10 Simple type validators
// https://github.com/aubergine10/js-validators

/* exslint-disable no-unused-vars */

const isArray = value => Array.isArray( value )

const isBoolean = value => typeof value === 'boolean' || value instanceof Boolean

const isBooleanPrimitive = value => typeof value === 'boolean'

// Based on https://stackoverflow.com/questions/40922531/how-to-check-if-a-javascript-function-is-a-constructor
const isConstructable = ( () => {
    const handler = { construct() { return handler } }
    return value => {
        if ( typeof value !== 'function' || value === Symbol ) return false
        /* eslint-disable no-extra-parens */
        try { return !!( new ( new Proxy(value, handler) )() ) } catch(e) { return false }
        /* eslint-enable no-extra-parens */
    }
})()

const isConstructible = isConstructable // convenience spelling

const isClass = value => isConstructable(value) && /^\s*class\s+/.test(value.toString())

const isDate = value => value instanceof Date

const isError = value => value instanceof Error //&& typeof value.message !== 'undefined'
/*
not detecting any errors
 */

const isFunction = value => typeof value === 'function'

// Based on https://stackoverflow.com/questions/16754956/check-if-function-is-a-generator
/* eslint-disable no-extra-parens */
const genCon = (function*(){yield undefined}).constructor
/* eslint-enable no-extra-parens */
const isGenerator = value => value && value instanceof genCon

const isGeneratorish = value => value && ( value instanceof genCon || typeof value[Symbol.iterator] == 'function' && typeof value['next'] == 'function' )

const isGeneratorishThrowable = value => value && ( value instanceof genCon || typeof value[Symbol.iterator] == 'function' && typeof value['next'] == 'function' && typeof value['throw'] == 'function' )

// Based on https://stackoverflow.com/questions/526559/testing-if-something-is-a-class-in-javascript
const isInvokable = value => isFunction( value ) && ( !value.hasOwnProperty( 'prototype' ) || value.hasOwnProperty( 'arguments' ) )
/*
failing function(){}
failing function name(){}
failing Boolean() etc
 */

const isIterable = value => value != null && typeof value[Symbol.iterator] === 'function' // note: strings are iterable

const isIterableExcludeString = value => value != null && !isString( value ) && typeof value[Symbol.iterator] === 'function'

const isNull = value => value === null

// Based on https://github.com/jonschlinkert/is-number - but excludes string numbers
// Note: Number instances sometimes require coersion before use. isNumberPrimitive() is probably better for general use.
const isNumber = value => typeof value === 'number' && value - value === 0 || value instanceof Number && Number.isFinite( +value )

// Based on https://github.com/jonschlinkert/is-number
const isNumberish = value => isNumber( value ) ||  isString( value ) && value.trim() !== '' && Number.isFinite( +value )

// Based on https://github.com/jonschlinkert/is-number - but excludes string numbers
const isNumberPrimitive = value => typeof value === 'number' && value - value === 0

const isObject = value => value !== null && typeof value === 'object'

const isPlainObject = value => value && typeof value === 'object' && value.constructor === Object

// Note: Returns true for NaN and non-finite numbers as they are technically primitive
const isPrimitive = value => typeof value === 'object' ? value === null : typeof value !== 'function'

const isRegExp = value => value && typeof value === 'object' && value.constructor === RegExp

const isString = value => typeof value === 'string' || value instanceof String

const isStringPrimitive = value => typeof value === 'string'

const isSymbol = value => typeof value === 'symbol'

const isUndefined = value => typeof value === 'undefined'
