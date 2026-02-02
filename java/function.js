//function
//what-->a set of statements that performs a task or calculates a value
//how-->we use the keyword function to declare a function
//why-->to avoid repetition of code and make it reusable

//types of function
//1.function declaration
function abc(){}
//2.function expression
let fnc = function(){};
//3.arrow function
let fnc1 = ()=>{};

function temp_cart(){
    console.log("adding product");
}

temp_cart();
temp_cart()
temp_cart()

function cart(product){
    // product -- params
    console.log("product:", product);
}
cart("laptop"); // mobile -- args
cart("mobile");
cart("tv");

// convert into arrow function
let cart1 = (product) => {
    console.log("product", product);
}
cart1("headphones");
cart1("smartwatch");
cart1("tablet");

// default, rest and spread parameters in functions
// default
function abc(v1, v2){
    console.log(v1, v2)
}
abc(20, 21);

function cart3(product, price = "product"){
    console.log("product:", product, "price:", price);
}
cart3(20000);

// rest --> jayre function ma multiple 

function abcd(v1, v2,v3,v4,v5,v6,v7,v8,v9,v10){
    console.log(v1, v2,v3,v4,v5,v6,v7,v8,v9,v10);
}
abcd(1,2,3,4,5,6,7,8,9,10);

function cart4(a, b,...product){
    console.log(a,b,product);
}
cart4("p1", "p2", "p3", "p4", "p5");

// retrun or early return
// retrun --> function mathi value bahar mokalva mate
function getValue1(value) {
    if (value < 25) return "Value is less than 25";
    else if (value < 50) return "Value is less than 50";
    else if (value < 75) return "Value is less than 75";
    return "Value is 100 or more";
}

let result = getValue1(80);
console.log(result);

// first Class Function
// function can be treated as variables

// function can be passed as arguments to other functions

// function can be returned from other functions

