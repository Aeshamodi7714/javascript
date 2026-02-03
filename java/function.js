// //function
// //what-->a set of statements that performs a task or calculates a value
// //how-->we use the keyword function to declare a function
// //why-->to avoid repetition of code and make it reusable

// //types of function
// //1.function declaration
// function abc(){}
// //2.function expression
// let fnc = function(){};
// //3.arrow function
// let fnc1 = ()=>{};

// function temp_cart(){
//     console.log("adding product");
// }

// temp_cart();
// temp_cart()
// temp_cart()

// function cart(product){
//     // product -- params
//     console.log("product:", product);
// }
// cart("laptop"); // mobile -- args
// cart("mobile");
// cart("tv");

// // convert into arrow function
// let cart1 = (product) => {
//     console.log("product", product);
// }
// cart1("headphones");
// cart1("smartwatch");
// cart1("tablet");

// // default, rest and spread parameters in functions
// // default
// function abc(v1, v2){
//     console.log(v1, v2)
// }
// abc(20, 21);

// function cart3(product, price = "product"){
//     console.log("product:", product, "price:", price);
// }
// cart3(20000);

// // rest --> jayre function ma multiple 

// function abcd(v1, v2,v3,v4,v5,v6,v7,v8,v9,v10){
//     console.log(v1, v2,v3,v4,v5,v6,v7,v8,v9,v10);
// }
// abcd(1,2,3,4,5,6,7,8,9,10);

// function cart4(a, b,...product){
//     console.log(a,b,product);
// }
// cart4("p1", "p2", "p3", "p4", "p5");

// // retrun or early return
// // retrun --> function mathi value bahar mokalva mate
// function getValue1(value) {
//     if (value < 25) return "Value is less than 25";
//     else if (value < 50) return "Value is less than 50";
//     else if (value < 75) return "Value is less than 75";
//     return "Value is 100 or more";
// }

// let result = getValue1(80);
// console.log(result);

// // first Class Function
// // function can be treated as variables
// // let fnc= function(){}
// // let fnc = () =>{}
//     let buyNow1 = function (product, price){
//         console.log(product, price)
//     }

//     buyNow1("S24 FE", 50500);

// // convert into arrow function

// function can be passed as arguments to other functions
// let fnc = function(){}
// fnc(function(){})
// function  abc1(v1, v2){
//     console.log(v2);
//     return v1();
// }
// abc1(function(){
//     console.log("first class function")
// }, "Hello")


// function abc2(v1, v2){
//     return v1();
//     console.log(v2);
// }

// abc2(function(){
//     console.log("first class function")
// }, "Hello")

// // function can be returned from other functions
// function abc(){
//     return function(){
//         console.log("function within function")
// }
// }
// abc()();

// function abc(){
//     return ()=>{
//         console.log("arrow function within function")
// }
// }
// abc2()();


// higher order function (HOF)
// function that takes another function as an argument or returns a function as a result (eva function je return kare ek function athava accept kare ek function athava accept kare ek function params ma)

// function abcd(val){val();}
// --> abcd(function(){console.log("Hello")})
// function abcd(val){} --> higher order function

// function abcd(){ return function(){} } abcd()() --> higher order function

// pure vs impure function
// pure function -->function je same input par same output aapse ane koi bahar na state ne modify na kare (pure function --> je function bahar na state ne modify na kare)
let a = 20;
function chnage_a(){
    return "a not change(pure function)" + a;
}// --> pure function

console.log(chnage_a());

// impure function --> function je same par same output aapse ane koi bahar na state ne modify kare (impure function --> je function bahar na state ne modify kare)
function change_a1(){
    a++;
    return "a changed(impure function)" + a;
} // --> impure function
console.log(change_a1());

// closure function
// function je potana parent function na variables ne access kari shake(return thava valo function use karse parent function na koi variable)(function within function)
function outer(){
    let outer_var = "Outer function variable";
    function inner(){
        console.log(outer_var);
    }
    inner();
}
outer();

//lexical scope --> nested function can access variables declared in their outer scope
function outer1(){
    let outer_var = "Outer function variable";
    function inner1(){
        console.log(outer_var);
        let inner_var = "Inner function variable";
        function most_inner(){
            console.log(outer_var);
            console.log(inner_var);
        }
        most_inner();
    }
    inner1();
}
outer1();

//IIFE - Immediately Invoked function expression
(function (){})();//function je declare karta j call thai jay
(function(){
    console.log("IIFE executed");
})();

//hosting in function
//use case --> show project structure

temp_fnc();

function temp_fnc(){
    console.log("hosting in function ")
}






// Example 1: Function Declaration vs Function Expression (Hoisting)
function declared() {
  console.log("I am hoisted");
}

const expressed = function () {
  console.log("I am not hoisted");
};


// Example 2
greet();
function greet(){
  console.log("Hello!");
}


// Example 3: Normal Function → Arrow Function
const add = (a, b) => a + b;


// Example 4: Params & Args
function welcome(name){
  console.log("Welcome " + name);
}
welcome("user");


// Example 5: Parameters vs Arguments
function temp(a, b, c){
  console.log(a, b, c);
}
temp(1, 2);


// Example 6: Default Parameter
function temp_user(name = "Guest"){
  console.log("Hello " + name);
}
temp_user();


// Example 7: Rest Operator
function number(...numbers){
  console.log(numbers);
}
number(1, 2, 3, 4, 5);


// Example 8: Rest Parameters Total (Correct Version)
function calculateTotal(...scores){
  let total = 0;
  scores.forEach(val => {
    total += val;
  });
  return total;
}
let sumtotal = calculateTotal(10, 20, 30, 40, 50);
console.log(sumtotal);


// Example 9: Early Return
function checkAge(age){
  if(age < 18){
    return "Too Young";
  }
  return "Access Granted";
}
console.log(checkAge(20));


// Example 10: Return Value
function f(){
  return;
}
console.log(f());

// Example 11: First-class citizens
let fn = function () {
  return "Function as value";
};
console.log(fn());


// Example 12: Function assigned to variable
let n = function () {
  console.log("Hello");
};
n();


// Example 13: Function passed into another function
function abcd(val) {
  val();
}
abcd(function () {
  console.log("Hello");
});


// Example 14: Higher Order Function
function higherOrder(fn) {
  fn();
}
higherOrder(function () {
  console.log("I am callback");
});


// Example 16: Impure Function
let total = 5;
function num(n) {
  total += n;
}
num(3);
console.log(total);


// Example 17: Pure Function
function pureNum(total, n) {
  return total + n;
}
console.log(pureNum(5, 3));


// Example 18: Closure
function outer() {
  let x = 10;
  return function () {
    console.log(x);
  };
}
let inner = outer();
inner();


// Example 19: Closure Counter
function outerCounter() {
  let count = 0;
  return function () {
    count++;
    console.log(count);
  };
}
const counter = outerCounter();
counter();
counter();


// Example 20: IIFE
(function () {
  console.log("Initialized");
})();


// Example 21: IIFE with private variable
let fun = (function () {
  let score = 0;
  return {
    getScore: function () {
      console.log(score);
    },
    setScore: function (val) {
      score = val;
    }
  };
})();
fun.getScore();
fun.setScore(10);
fun.getScore();


// Example 22: Function Expression Hoisting
try {
  temp_var();
} catch (e) {
  console.log("Error");
}
var temp_var = function () {
  console.log("Hello");
};


// Example 23: Function Declaration Hoisting
temp_fun();
function temp_fun() {
  console.log("Hello");
}
