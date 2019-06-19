'use strict'

const tests = new Map()

function makeError( value ) {
    try {
        if ( typeof value == 'function' ) { // assume proper error
            throw new value()
        } else { // assume basic value error
            throw value
        }
    } catch( error ) {
        return error
    }
}

function Group( name ) {
    let map = new Map()
    tests.set( name, map )
    return map
}

Group( 'Arrays' )
    .set( 'Array', Array )
    .set( '[]', [] )
    .set( '[0]', [0] )
    .set( '[""]', [""] )
    .set( '[false]', [false] )
    .set( 'new Array(5)', new Array(5) )

Group( 'Booleans' )
    .set( 'Boolean', Boolean )
    .set( 'true', true )
    .set( 'false', false )
    .set( 'Boolean( true )', Boolean( true ) )
    .set( 'Boolean( false )', Boolean( false ) )
    .set( 'new Boolean( true )', new Boolean( true ) )
    .set( 'new Boolean( false )', new Boolean( false ) )

Group( 'Classes' )
    .set( 'class A {}', class A {} )
    .set( 'class B { constructor(){} }', class B { constructor(){} } )
    /* eslint-disable no-extra-parens */
    .set( 'new (class C {})', new (class C {}) )
    .set( 'new (class D { constructor(){} })', new (class D { constructor(){} }) )
    /* eslint-enable no-extra-parens */

// dates

Group( 'Errors' )
    .set( 'Error', Error )
    .set( 'throw "string"'  , makeError( 'string'  ) )
    .set( 'throw null'      , makeError( null      ) )
    .set( 'throw undefined' , makeError( undefined ) )
    .set( 'EvalError'       , EvalError              )
    .set( 'RangeError'      , RangeError             )
    .set( 'ReferenceError'  , ReferenceError         )
    .set( 'SyntaxError'     , SyntaxError            )
    .set( 'TypeError'       , TypeError              )
    .set( 'URIError'        , URIError               )

Group( 'Functions' )
    .set( 'Function', Function )
    .set( 'function(){}'      , function(){}       )
    .set( 'function foo(){}'  , function(){}       )
//    .set( 'async function(){}', async function(){} )
    .set( '() => {}'          , () => {}           )
    /* eslint-disable no-unused-vars */
    .set( 'foo => {}'         , foo => {}          )
    /* eslint-enable no-unused-vars */

Group( 'Generators' )
    .set( 'function* test() {}', function* test() {} )
    .set( '{ [Symbol.iterator]:()=>{}, next:()=>{} }', { [Symbol.iterator]:()=>{}, next:()=>{} } )
    .set( '{ [Symbol.iterator]:()=>{}, next:()=>{}, throw:()=>{} }', { [Symbol.iterator]:()=>{}, next:()=>{}, throw:()=>{} } )

// iterators

Group( 'Nulls' )
    .set( 'null', null )

Group( 'Numbers' )
    .set( 'Number', Number )
    .set( 'Math', Math )
    .set( '-0' , -0  )
    .set( '0'  , 0   )
    .set( '+0' , +0  )
    .set( '1'  , 1   )
    .set( '2.3', 2.3 )
    .set( '-4' , -4  )
    .set( 'Number(5)'    , Number(5)     )
    .set( 'new Number(6)', new Number(6) )
    .set( '0x11', 0x11 )
    .set( '0b11', 0b11 )
    .set( '0o11', 0o11 )
    .set( 'NaN' , NaN  )
    .set( 'Number.NaN', Number.NaN )
    .set( 'Number.MAX_SAFE_INTEGER', Number.MAX_SAFE_INTEGER )
    .set( '1 + Number.MAX_SAFE_INTEGER', 1 + Number.MAX_SAFE_INTEGER )
    .set( 'Number.MAX_VALUE', Number.MAX_VALUE )
    .set( 'Number.NEGATIVE_INFINITY', Number.NEGATIVE_INFINITY )
    .set( 'Number.POSITIVE_INFINITY', Number.POSITIVE_INFINITY )
    .set( '1e10000', 1e10000 )
    .set( 'Infinity', Infinity )
    .set( '-Infinity', -Infinity )

Group( 'Numberish' )
    .set( '"0"'      , "0"       )
    .set( '"012"'    , "012"     )
    .set( '"0x11"'   , "0x11"    )
    .set( '"0b11"'   , "0b11"    )
    .set( '"0o11"'   , "0o11"    )
    .set( '"1"'      , "1"       )
    .set( '"1.1"'    , "1.1"     )
    .set( '"10"'     , "10"      )
    .set( '"10.10"'  , "10.10"   )
    .set( '"100"'    , "100"     )
    .set( '"5e3"'    , "5e3"     )
    .set( '"1e10000"', "1e10000" )

Group( 'Objects' )
    .set( 'Object', Object )
    .set( '{}', {} )
    .set( '{ length:0 }'   , { length:0 }    )
    .set( '{ arguments:0 }', { arguments:0 } )
    .set( 'Object()'    , Object()     )
    .set( 'new Object()', new Object() )

// primitives

// regexps

// strings
Group( 'Strings' )
    .set( 'String', String )
    .set( '""', "" )
    .set( '" "', " " )
    .set( '"Foo"', "Foo" )
    .set( 'String("Bar")', String("Bar") )
    .set( 'new String("Baz")', new String("Baz") )

Group( 'Symbols' )
    .set( 'Symbol', Symbol )
    .set( 'Symbol.iterator', Symbol.iterator )

Group( 'Undefined' )
    .set( 'undefined', undefined )

//export const tests = new Map( Groups )
