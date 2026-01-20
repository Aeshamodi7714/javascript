
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
<p>person.name= "user"; ✅</p>
<p>person = {} ; ❌ </p>
<p>Answer or Error: Answer  </p>
<p>Why : const means the variable reference cannot change. But the object content can be changed.</p>
</div>