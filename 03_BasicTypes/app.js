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
var a = 12;
console.log(a);
// Tuples
var arr = ["harsh", 22];
// Enums-Enumerations
var UserRoles;
(function (UserRoles) {
    UserRoles["ADMIN"] = "admin";
    UserRoles["GUEST"] = "guest";
    UserRoles["SUPER_ADMIN"] = "super_admin";
})(UserRoles || (UserRoles = {}));
var StatusCodes;
(function (StatusCodes) {
    StatusCodes["ABANDONED"] = "abandoned status code 500";
    StatusCodes["NOTFOUND"] = "not found status code 404";
})(StatusCodes || (StatusCodes = {}));
StatusCodes.ABANDONED;
StatusCodes.NOTFOUND;
