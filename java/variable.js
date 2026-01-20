var a = "temp";
var _123 = "hello";
var $123 = "hello";
// var 123 = "number"
b = 24; //never use
// let
// let temp = "abc";
// const
const temp_const = "hello world !!";

// declarations and initializations
var d;  // declare
var temp_d = 12;  // declare and initialize for first time
// var add value into window
// var is function scoped
// var can be re-declared and reassigned
var name = "user name";
let name1 = "user name";

// reassignment , redeclaration
var temp = 12;
temp = "number"; // reassignment
var temp = "text"; // redeclaration   let temp = "text"; // redeclaration 
// let temp_a = 24;
// var temp_a = 34; // you can't redeclare with let variable
const temp_b = "name"
//temp_b = "username" // you can't reassign const variable







// scope (global , block , functional)
var e = 23;  // global scope
console.log("Global scope " + e);
{
    var e = 25;  // global scope
    console.log("block scope " + e );
}
function abc() {
    var e = 30;  // functional scope
    console.log("functional scope " + e);
}
abc();
console.log("outside let variable " + e);



// scope (global , block , functional)
let f = 23;  // global scope
console.log("Global scope " + f);
{
    let f = 25;  // global scope
    console.log("block scope " + f );
}
function abc() {
    let f = 30;  // functional scope
    console.log("functional scope " + f);
}
abc();
console.log("outside let variable " + f);


// temporal dead zone (TDZ)
console.log(temp_d);
var temp_d= 24;

// console.log(g);
                        // console.log(j);
                        // let j = 12;


// hoisting impact
// hoising --> when your create a variable into js that break into two part first is declare part that go to up and there initialization part that go down
var temp_d = 12;
// var temp_d; --> undefined; --> that go to up
// temp_d = 12; --> that go to down(means stuck into line 66)
// if you use console.log before initialization that give you undefined;
let temp_d_let = 24;
// let variable not use before intialization
// if you use console.log before initialization that give you error;
//hoisting impact on var, let, const
/*
var --> hoist --> undefined
let --> hoist --> error
const --> hoist --> error
*/



// console.log(nm);
// let nm = "name";


// console.log(b);
// var b = "username";


// var x = 1;
// {
//     var x = 2;
// }
// console.log(x);




// let aesha = 10; 
// {
//     let aesha = 20;
//     console.log("Inside:", aesha);
// }
// console.log("Outside:", aesha);

// Inside: 20
// Outside: 10


// const person = { name: "demo" };

// person.name = "user";   
// // person = {};        
// console.log(person.name)   

// user




