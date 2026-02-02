
<!-- example 1 -->
<h1>Example or Excercise:</h1>
<div>
<h3>Example 1 :</h3>
<p>console.log(nm);</p>
<p>let nm = "name";</p>
<p>Answer or Error:  ReferenceError: Cannot access 'nm' before initialization </p>
<p>Why : let is hoisted, but it stays in the Temporal Dead Zone until it is declared.
You cannot use it before declaration.</p>
</div>
 

 <!-- example 2 -->
<div>
<h3>Example 2 :</h3>
<p>console.log(b);</p>-
<p>var b = "username";</p>
<p>Answer or Error:  Answer:  Output: undefined </p>
<p>Why :  var is hoisted and automatically initialized with undefined. </p>
</div>
 
 <!-- example 3 -->
<div>
<h3>Example 3 :</h3>
<p>var x = 1;</p>
<p>{
    var x= 2;
}
</p>
<p>console.log(x);</p>
<p>Answer or Error:   Output: 2</p>
<p>Why : var is not block scoped. It overwrites the previous value.</p>
</div>


<!-- example 4 -->
<div>
<h3>Example 4 :</h3>
<p>let a = 10; </p>
<p>{
    let a = 20;
    console.log("Inside:", a);
}</p>
<p>
console.log("Outside:", a);
</p>
<p>Answer or Error:  answer</p>
<p>Why : let is block scoped, so inside and outside variables are different.</p>
</div>
 

<!-- example 5 -->
<div>
<h3>Example 5 :</h3>
<p>const person = {name: "demo"}; </p>
on console.log
<p>person.name= "user"; </p>
<p>person = {} ; </p>
<p>Answer or Error: Answer  </p>
<p>Why : const means the variable reference cannot change. But the object content can be changed.</p>
</div>








<!-- Javascript Datatype: -->

<h3>Example 1 :</h3>
<p>true + false </p>
<p>Answer : 1 </p>                     
<p>Why : true is converted to 1 and false is converted to 0.
So 1 + 0 = 1.</p>
</div>
 
<div>
<h3>Example 2 :</h3>
<p>null + 1 </p>
<p>Answer : 1 </p>                     
<p>Why : null becomes 0 in numeric calculation. So 0 + 1 = 1.</p>
</div>
 
<div>
<h3>Example 3 :</h3>
<p>"12" + 12 </p>
<p>Answer : "1212"</p>                     
<p>Why : When + is used with a string, JavaScript performs string concatenation. So "12" + "12" = "1212".</p>
</div>
 
<div>
<h3>Example 4 :</h3>
<p>!! undefined</p>
<p>Answer : false</p>                     
<p>Why :undefined is a falsy value.!undefined = true !!undefined = false Double !! converts value into boolean.</p>
</div>
 
<div>
<h3>Example 5 :</h3>
<p>"12" - 1 </p>
<p>Answer : 11</p>                     
<p>Why :- operator converts string into number. So 12 - 1 = 11.</p>
</div>
 
<div>
<p> why typeof NaN --> number </p> 
<p>NaN is a failed number oprations that why that type is number</p>
<p> ex. "hello" + 5 --> NaN</p>
<p>Answer : "number"</p>                     
<p>Why :- NaN means Not a Number, but it is produced from a numeric operation, so JavaScript keeps its datatype as number.</p>
</div>
 
<div>
<p>Undefined vs Null</p>
<p>let x;</p>
<p>console.log(x);</p>
<p>let y = null;</p>
<p>console.log(y);</p>
</div>
 






<!-- javascript operators -->

 <div>
<h1>Example 1 :</h1>
<p>let x = 10;</p>
<p>let y = 20;</p>
<p>if(x>5 && y > 5){
    console.log("Both are greater than 5");
}else{
    console.log("One or both are not greater than 5");
}</p>
<p>Answer :- Both are greater than 5</p>
<p>Why :- Both conditions are true, so && returns true.</p>
</div>

<div>
<h1>Example 2 :</h1>
<p>let isAdmin = true;</p>
<p>let isLoggedIn = false;</p>
<p>if(isAdmin || isLoggedIn){
    console.log("Acess granted");
}else{
    console.log("Acess Denied");
}</p>
<p>Answer : Access granted</p>
<p>Why :- || needs only one true value.</p>
</div>


<div>
<h1>Example 3 :</h1>
<p>let temp = 35;</p>
<p>if(!(temp > 30)){
    console.log("Hot day");
}else{
    console.log("Pleasant day");
}</p>
<p>Answer : Pleasant day</p>
<p>Why :- temp > 30 is true → !true becomes false.</p>
</div>


<div>
<h1>Example 4 :</h1>
<p>let a = 0;</p>
<p>if(a){
    console.log("Truthy value");
}else{
    console.log("Falsy value");
}</p>
<p>Answer : Falsy value</p>
<p>Why :- 0 is a falsy value in JavaScript.</p>
</div>


<div>
<h1>Example 5 :</h1>
<p>let score = 78;</p>
<p>let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "D";</p>
<p>console.log("Grade:", grade);</p>
<p>Answer : Grade: C</p>
<p>Why :- 78 ≥ 70 → Grade "C"</p>
</div>


<div>
<h1>Example 6 :</h1>
<p>let points = 120;</p>
<p>let status = points >= 100 ? "Gold" : points >= 50 ? "Silver" : "Bronze";</p>
<p>console.log("Status:", status);</p>
<p>Answer : Status: Gold</p>
<p>Why :- 120 ≥ 100 → "Gold"</p>
</div>

<div>
<h1>Example 7:</h1>
<p>let loggedIn = true;</p>
<p>let hasToken = false;</p>
<p>let access = loggedIn && hasToken ? "Allow" : "Deny";</p>
<p>console.log("access:", access);</p>
<p>Answer : access: Deny</p>
<p>Why :- Both must be true for &&. One is false.</p>
</div>

<div>
<h1>Example 8:</h1>
<p>let a = 5;</p>
<p>a++</p>
<p>console.log(a);</p>
<p>Answer : 6</p>
<p>Why :- Value increases after execution.</p>
</div>

<div>
<h1>Example 9:</h1>
<p>let a = 8;</p>
<p>++a</p>
<p>console.log(a);</p>
<p>Answer : 9</p>
<p>Why :- Value increases before execution.</p>
</div>

<div>
<h1>Example 10:</h1>
<p>let b = 4;</p>
<p>let c = b++</p>
<p>console.log(b, c);</p>
<p>Answer : 5 4</p>
<p>Why :- c gets old value, b increments later.</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let b = 4;</p>
<p>let c = ++b</p>
<p>console.log(b, c);</p>
<p>Answer :</p>
<p>Why :-</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let m = 10;</p>
<p>console.log(m--)</p>
<p>console.log(m);</p>
<p>Answer :</p>
<p>Why :-</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let n = 5;</p>
<p>let result = n++ + ++n;</p>
<p>console.log(result);</p>
<p>Answer :</p>
<p>Why :-</p>
</div>

<div>
<h1>Example 11:</h1>
<p>let likes = 100;</p>
<p>function likePost(){
result ++likes;
}</p>
<p>console.log(likePost());</p>
<p>console.log(likes);</p>
<p>Answer :</p>
<p>Why :-</p>
</div>

<div>
<h1>Example 12:</h1>
<p>let count = 5;</p>
<p>if(count-- === 5){   
console.log("Matched");
}else{
    console.log("Not Matched"); 
}</p>
<p>Answer :</p>
<p>Why :-</p>
</div>





<!-- Javascript Controlflow -->
<div>
<h1>Example 1 :</h1>
<p>let x = 2;</p>
<p>switch(x){
   case 2:
   console.log("Two");
   case 3:
   console.log("Three");
}</P>
<p>Answer or Error: Two
Three</p>
<p>Why : The switch statement does not have break after case 2.
When x === 2, execution starts at case 2 and falls through to case 3.
So both "Two" and "Three" are printed..</p>
<div>

<div>
<h1>Example 2 :</h1>
<p>Write a function getGrade(score) that:</p>
<p> Takes A student's score as input (0 to 100)</P>
<p>Returns the grade based on below logic:</P>
<p>90-100 A+</P>
<p>80-89 A</P>
<p>70-79 B</P>
<p>60-69 C</P>
<p>33-59 D</P>
<p>0-32 Fail</P>
<p>Anything Else Invalid Marks</P>
<p>Answer or Error: A+
</p>
<p>Why : score = 99
First condition score >= 90 && score <= 100 is true
Function immediately returns "A+"
Remaining conditions are skipped.</p>
<div>

<div>
<h1>Example 3 :</h1>
<p>Rock-Paper-Scissors:</p>
<p>rock - scissors --> rock</P>
<p>paper - rock --> paper</P>
<p>scissors - paper --> scissors</P>
<p>Answer or Error: rock
</p>
<p>Why : player1 = "rock" and player2 = "scissors"
First condition matches: player1 === "rock" && player2 === "scissors"</p>
<div>





<!-- looping examples -->


<div>
<h1>Example 1:</h1>
<p>Print number from 1 to 10 using a for loop.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=10; i++){
    console.log(i);
}
</p>

<p><b>Why:</b></p>
<p>
The for loop starts from 1 and increases the value by 1 each time.
It keeps running until the value becomes greater than 10.
</p>
</div>


<div>
<h1>Example 2:</h1>
<p>Print number from 10 to 1 using while loop.</p>

<p><b>Answer:</b></p>
<p>
let i = 10;
while(i >= 1){
    console.log(i);
    i--;
}
</p>

<p><b>Why:</b></p>
<p>
The while loop runs as long as the condition is true.
Here, the value starts from 10 and decreases by 1 each time.
</p>
</div>


<div>
<h1>Example 3:</h1>
<p>Print even numbers from 1 to 20 using for loop.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=20; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}
</p>

<p><b>Why:</b></p>
<p>
Even numbers are divisible by 2.
The condition i % 2 === 0 checks whether the number is even.
</p>
</div>


<div>
<h1>Example 4:</h1>
<p>Print odd numbers from 1 to 15 using while loop.</p>

<p><b>Answer:</b></p>
<p>
let i = 1;
while(i <= 15){
    if(i % 2 !== 0){
        console.log(i);
    }
    i++;
}
</p>

<p><b>Why:</b></p>
<p>
Odd numbers are not divisible by 2.
The condition i % 2 !== 0 checks for odd numbers.
</p>
</div>


<div>
<h1>Example 5:</h1>
<p>Print the multiplication table of 5.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=10; i++){
    console.log(`5 x ${i} = ${5*i}`);
}
</p>

<p><b>Why:</b></p>
<p>
The loop runs from 1 to 10 and multiplies 5 with each number
to print the table of 5.
</p>
</div>


<div>
<h1>Example 6:</h1>
<p>Find the sum of numbers from 1 to 100 using a loop.</p>

<p><b>Answer:</b></p>
<p>
let sum = 0;
for(let i=1; i<=100; i++){
    sum = sum + i;
}
console.log(sum);
</p>

<p><b>Why:</b></p>
<p>
Each number from 1 to 100 is added to the sum variable.
Finally, the total sum is printed.
</p>
</div>


<div>
<h1>Example 7:</h1>
<p>Print all numbers between 1 to 50 that are divisible by 3.</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=50; i++){
    if(i % 3 === 0){
        console.log(i);
    }
}
</p>

<p><b>Why:</b></p>
<p>
A number divisible by 3 gives a remainder of 0.
The condition checks this and prints the number.
</p>
</div>


<div>
<h1>Example 8:</h1>
<p>Ask the user for a number and print whether each number from 1 to that number is even or odd.</p>

<p><b>Answer:</b></p>
<p>
let num = prompt("Give a number");
for(let i=1; i<=num; i++){
    if(i % 2 === 0){
        console.log(i + " is even");
    }else{
        console.log(i + " is odd");
    }
}
</p>

<p><b>Why:</b></p>
<p>
The number is taken from the user.
The loop checks each number and prints whether it is even or odd.
</p>
</div>


<div>
<h1>Example 9:</h1>
<p>Count how many numbers between 1 to 100 are divisible by 3 or 5.</p>

<p><b>Answer:</b></p>
<p>
let count = 0;
for(let i=1; i<=100; i++){
    if(i % 3 === 0 || i % 5 === 0){
        count++;
    }
}
console.log(count);
</p>

<p><b>Why:</b></p>
<p>
If a number is divisible by 3 or 5, the counter is increased.
At the end, the total count is printed.
</p>
</div>


<div>
<h1>(Break) Example 10:</h1>
<p>Stop at First Multiple of 7</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=100; i++){
    console.log(i);
    if(i % 7 === 0){
        break;
    }
}
</p>

<p><b>Why:</b></p>
<p>
When the first multiple of 7 is found, the break statement
stops the loop completely.
</p>
</div>


<div>
<h1>(Continue) Example 11:</h1>
<p>Skip Multiples of 3</p>

<p><b>Answer:</b></p>
<p>
for(let i=1; i<=20; i++){
    if(i % 3 === 0){
        continue;
    }
    console.log(i);
}
</p>

<p><b>Why:</b></p>
<p>
The continue statement skips the current iteration.
So, multiples of 3 are not printed.
</p>
</div>


<div>
<h1>(Break + Continue) Example 12:</h1>
<p>Print First 5 Odd Numbers</p>

<p><b>Answer:</b></p>
<p>
let count = 0;
for(let i=1; i<=100; i++){
    if(i % 2 === 0){
        continue;
    }
    console.log(i);
    count++;
    if(count === 5){
        break;
    }
}
</p>

<p><b>Why:</b></p>
<p>
Even numbers are skipped using continue.
Each odd number increases the counter.
When 5 odd numbers are printed, break stops the loop.
</p>
</div>
;