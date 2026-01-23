// //operators
// // Arithmetic operator,comparison ,logical, assignment, unary , ternary
// //arithemic:
// //+ ,-,/,*,**,%
// //+ -->  ad and concatention
// //ex. 1+2, "user" + "name"
// //-
// //ex. 2-1
// // /, *
// //ex. 240/2, 25*2
// // % (modulas) (sheshfal)
// //ex. 12%4 --> 0
// //ex. 9%2 --> 1
// // ** (square) (exposination)
// //ex. 2**3 --> 8

// //comperison(ans: true, false)
// // ==
// // ex. 12 == 13,12 == "12" (don't check type, only check value, not strict comperison)
// // ===
// // ex. 12 === "12" (check type and value, strick comperison)
// //!=
// //ex.12 != 13 (reverse of ==,not strict comparison)
// //!==
// //ex. 12!== "12" (reserve of ===)
// //>=
// //ex. 22 >=22
// //<=
// //ex. 13 <=13
// //<
// //ex. 12<113,12<9,22<22
// //>
// //ex. 12 > 113 ,12 > 9, 13 > 13 


//Assignment
//=
// give a value, vlaue assignment operator
//ex. let a = 2;
// +=
//ex.a +=3;(add value into old value and save it into a)
// -=
//ex. a -= 4;(substract value into old value and save it into a)
// *=
//ex. a *= 2;
// /=
//ex. a /= 2;
// %=
//ex. a %= 2; (give remainder)


//Logical 
//&&(AND)
//ex.true && true --> true 12<13 && 14<15 -->
//false && true --> false 12>13 && 14<15 -->false
//true && false --> false
//false && false --> false

//||(OR)
//ex. true || true -->true
//false || ture -->true
// true || false -->true
//false || false -->false

//!(NOT)
//ex. !true -->false
//!false -->true
//!12 -->false --> !!12 -->true




//unary operator
//ex. +"5" --> 5
// +"name" -->NaN
//-
//ex. -5
//!
//ex.!12 -->false
//typeof
//ex. typeof "name" -->string
// ++
//ex.let a = 12
// a++ -->12 // post ex. a++ + a=> 25
// ++a -->13 // pre ex. a++ + a=> 26
// --
// ex.let a =3;
// a--
// a++



//Ternary
// ? :
//condition ? true : false  
//let a =12>13 ? console.log("true"): console.log("false");
  
//Typeof null --> object
// typeof [] --> object, let a=[]; a instanceof array --> true
//instanceof --> check type of reference data type // don't use typrof for reference data type
//typeof NaN --> number
//typeof --> premitive data type mate use krvo
//instanceof --> reference data type mate use krvo











let x = 10;
let y = 20;

if (x > 5 && y > 5) {
  console.log("Both are greater than 5");
}

// Both are greater than 5



let isAdmin = true;
let isLoggedIn = false;

// Access granted




let temp = 35;

if (!(temp > 30)) {
  console.log("Hot day");
} else {
  console.log("Pleasant day");
}

// 


let a = 0;

// Falsy value


let score = 78;

// Grade: C

let points = 120;

// Status: Gold


let loggedIn = true;
let hasToken = false;

// access: Deny


let f = 5;
a++;
console.log(a);

// 6


let g = 8;
++a;

// 9


let b = 4;
let c = b++;

// 5 4


let i = 4;
let j = ++j;
