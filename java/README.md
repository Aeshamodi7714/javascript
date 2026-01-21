
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
 