// Basic Types
// primitives(Number,string,Boolean)
// Arrays
// Tuples
// Enums
// any,Unknown,void,Null,Undefined,Never

// Number =12,2.3,456,78
// string =characters eg:a,b,c,d "harsh"
//Boolean=true , false

// Primitives and references

// var a=12
// var b=a
// b+2

// var arr=[1,2,3,4,5]
// var arr2=arr

// [],{},() =>reference

// Primitive types

// var,Let,const

// Number

let a=12;
console.log(a)

// Tuples
let arr:[string,number]=["harsh",22]

// Enums-Enumerations

enum UserRoles{
  ADMIN="admin",
  GUEST="guest",
  SUPER_ADMIN="super_admin"
}

enum StatusCodes{
  ABANDONED="abandoned status code 500",
  NOTFOUND="not found status code 404"
}

StatusCodes.ABANDONED
StatusCodes.NOTFOUND

// Any,Unknown,Void,Null,undefined,Never

let no:number;
no=12;

let anyVariable; //when datatype is not declared it takes default any.Any data type can be used.

anyVariable=12;
anyVariable="harsh" //No Error

let know:unknown;
know=12
know="Strings"

if(typeof know==="string"){
  know.toUpperCase()
}

// Void-used when a function does not return anything.If a function returns a number or string or boolean then we use Number,string

function abcd():string
{
  return "string"
}

function cd():number
{
  return 12
}

function def():void{
  console.log("void data type")
}

// Null
 














