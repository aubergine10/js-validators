'use strict'

// CC0 aubergine10 Simple type validators
// https://github.com/aubergine10/js-validators

export const isArray     = value => Array.isArray( value )
export const isBoolean   = value => typeof value === 'boolean'
export const isDate      = value => value instanceof Date
export const isError     = value => value instanceof Error && typeof value.message !== 'undefined'
export const isFunction  = value => typeof value === 'function'
//export const isIterator  = value => Symbol.iterator in Object(value)
export const isIterator  = value => value != null && typeof value[Symbol.iterator] === 'function' // note: strings are iterable
export const isNull      = value => value === null
export const isNumber    = value => typeof value === 'number' && value - value === 0 // Number.isFinite( value )
export const isObject    = value => value && typeof value === 'object' && value.constructor === Object
export const isPrimitive = value => typeof value === 'object' ? value === null : typeof value !== 'function'
export const isRegExp    = value => value && typeof value === 'object' && value.constructor === RegExp
export const isString    = value => typeof value === 'string' || value instanceof String
export const isSymbol    = value => typeof value === 'symbol'
export const isUndefined = value => typeof value === 'undefined'

// https://stackoverflow.com/a/48036194/5240636
const handler = { construct() { return handler } }
export const isConstructor = value => {
    if ( typeof value !== 'function' ) return false
    /* eslint-disable no-extra-parens */
    try { return !!( new ( new Proxy(value,handler) )() ) } catch(e) { return false }
    /* eslint-enable no-extra-parens */
}
