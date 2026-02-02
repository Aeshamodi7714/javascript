// loops -- repeating code blocks
// 1 1 1 1 1
// 1 2 3 4 5 6

// for-loop
// why use for-loop? when you know how many times you want to repeat a block of code
// print 1 to 10 --> console.log(1); console.log(2); ... console.log(10);
// kaya thi javanu chhe --> kaya sudhi javanu chhe --> kevi rite javanu chhe
// for (ex.) -> 50 -> increment by 1
// (start; end; change)
// for (let i = 1; i <= 10; i++) {
//   console.log(i);
// }

// for (let k = 9; k >= -1; k--) {
//   console.log(k);
// }

// for (let j = 1; j <= 10; j++) {
//   console.log("Hello");
// }
// for (let j = 1; j <= 10; j++) {
//    document.writeln("Hello");
//  }

// while loop -- do while loop
// kaya thi javanu chhe -> Kaya rokavanu chhe -> Kevi rite javanu chhe
// while (ex. 1 -> Hello world -> stop when condition false)
// start
// while(end){
// code
// change
// }
// let d = 1;
// while (d <= 10) {
//     console.log("while loop: " , d)
//     d++
// }


// make it true loops
//  let k = 50;
// while  (k = 20) {
//  console.log(k);
// k++;
// }

// let a = 60;
// while (k <= 20) {
//     console.log(a);
//     a++;
// }

// let c = 30;
// while (c > 20) {
//     console.log(c);
//     a++;
// }

// let p = "Hello";
// while (p >= 20) {
//  console.log(p);
//  d++;
// }

// let f = 50;
// while (f <= 60) {
//  console.log(f);
//  f--;
// }

// let q = 50;
// while (q <= 60) {
//  console.log(q);
//  q--;
// }

//break

for(let a= 1; a<=201; a++){
  console.log(a);
  if(a ===30){
    break;
  }
}


//continue 
for (let a=1; a<=10; a++){
  if(a===5){
    continue;
  }
  console.log(a);
}

// do while loop
// do {} while (end);
// start
// do{
//   code
//   change}
// while(end);
let j = 12; // start
do {
  console.log("do while loop:", j); // code
  j++; // change (condition)
} while (j < 20); // while check after executing code block (end)

let z = 15; // start
do {
  console.log("do while loop error:", z); // code
  z++; // change (condition)
} while (z < 10);
// why:

//break


for(let b= 1; b<=201; b++){
  console.log("loop with break:", b);
  if(b ===30){
    break;
  }     
}





//  Example 1
for (let B = 1; B <=10; B++){
    if (B < 11)
        console.log ("loop start", B);
}

// Example 2
// for (let C = 10; C >= 1; C--){
//         console.log ("loop start 2", C);
//     }

// Example 3
// for(let i=1; i<=20; i++)
// if(i%2 ===0){
// console.log(i);
// }

// // Example 4
// let i = 1;
// while (i <= 15) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
//   i++;
// }

// example 5
// for(let i=1; i<=20; i++){
//     console.log(`6 x ${i} = ${6*i}`);
// }

// // example 6
// let sum = 0;
// for(let i=1; i<=10; i++){
//     // let sum =0;
//     sum = sum + i;
//     // console.log(sum);
// }
// console.log(sum);

// // example 7
// for(let i=1; i<=50; i++){
//     if(i%3 === 0){
//         console.log(i);
//     }
// }

// for(let i=1; i <= numl; i++){
//     if(i%2 === 0){
//         console.log(i, " is even");
//     }else{
//         console.log(i, " is odd");
//     }
// }