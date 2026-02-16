// Event – page par koi pan action karo tene ek event rise karshe, page par click, hover, typing all are event
// Event Listener – event nu reaction — give reaction when click, dblclick, hover, typing

// Add Event Listener
// select --> event --> function --> what you change
// element.addEventListener("event_name", function(){})


// ===============================================

// Common Events : click, input, change, submit, mouseover, keyup
// Click
// let btn = document.querySelector(".btn1");

// btn.addEventListener("click", () => {
//     if (btn.textContent === "Dark Mode") {
//         btn.textContent = "Light Mode";
//         document.body.style.backgroundColor = "black";
//     } else {
//         btn.textContent = "Dark Mode";
//         document.body.style.backgroundColor = "white";
//     }
// });




// ===== Color Change Button =====
let colorBtn = document.querySelector(".button");
let box = document.querySelector(".color-card");

colorBtn.addEventListener("click", () => {
    if (box.style.backgroundColor === "black") {
        box.style.backgroundColor = "white";
    } else {
        box.style.backgroundColor = "black";
    }
});

// ===== Dark Mode Button =====
let btn = document.querySelector(".btn1");

btn.addEventListener("click", () => {
    if (btn.textContent === "Dark Mode") {
        btn.textContent = "Light Mode";
        document.body.style.backgroundColor = "black";
        document.body.style.color = "white";
    } else {
        btn.textContent = "Dark Mode";
        document.body.style.backgroundColor = "white";
        document.body.style.color = "black";
    }
});
  


//input
// how to know which is typed ?
let inp = document.querySelector("input");
// console.dir(inp);

inp.addEventListener("input",(dets)=>{
    //console.log(dets);
    if(dets.data !== null){
        console.log(dets.data);
    }
});








    // alert("Button Clicked")