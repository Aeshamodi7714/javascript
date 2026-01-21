// DATA TYPES :
// Two Types of Data Types:
// 1. Primitive Data Types
// copy --> real value
let a = 5;
let b = a;

// types: string , number , boolean , null , undefined , symbol , bigint

// 2. Non-Primitive Data Types (Reference Data Types)  [], (), {}
// copy --> give reference of parent
let d = [1, 2, 3];
let e = d;

// types: arrays [] , objects {} , functions ()



// <-- Primitive Data Types -->
// types: string , number , boolean , null , undefined , symbol , bigint
// string:
// '' - single quotes
// "" - double quotes
// `` - backticks 
let f = "name";
 f = "username";
 f = `firstname`;

 // number:
 let g = 12;
 g = 12.25;
 g = -25;

// boolean:
let h = true;
h = false;      

// null:
// you give a value
let i = null;

// undefined:
// you don't give a value, by default value
let j;  


// symbol:
// unique immutable value
let u1 = Symbol("uid");
let u2 = Symbol("uid");
// check u1 === u2
let obj = { uid: 1, name: "test", email: "test@test.com"};
let u3 = "uid";
let u4 = Symbol("uid");
// obj[u3] = "001";

// bigint:
// check range of number , Number.MAX_SAFE_INTEGER
let number = 9007199254740991;
number = number + 6;
let num2 = 9007199254740991n;
num2 + 4n;

// <-----Non-Primitive Data Types-----> 
// types: arrays [], objects {}, functions ()
let temp_array = ["user1", "user2", "user3"];
let temp_obj = { name: "test", age: 9, phone_number: 558998554 };
let profiles = [
    { name: "test1", age: 10, phone_number: 98989775 },
    { name: "test2", age: 15, phone_number: 989889775 },
    { name: "test3", age: 11, phone_number: 989875575 }
];
function name(params) {} 



// Dynamic Typing
let u_name = "username"; // string
u_name = 123; // number
u_name = {}; // object
// javascript --> typescript(ts)

// typeof quirks
// typeof 12
// check type of variable use --> ex. typeof NaN, typeof null, 1 + "1", 1 == "1", 1 === "1"
// why typeof NaN --> number
// NaN is a failed number oprations that why that type is number
// ex. "hello" - 5 --> NaN


// type coeration
// "5" + 1 // + --> value Add and Coeration(Mix)
// "5" - 1

// Truthy vs Falsy Values
// 0, false, "", null, undefined, NaN, document.all, -- false
// ex. !!0  --> check value is true and false
// ex. if(null){}  js convert it into false
// ex. if(-1){}  js convert it into true
// all --> true







