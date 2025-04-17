let button =document.getElementById("btn");
button.addEventListener("dblclick", function(){
    // alert("i was clicked");

document.querySelector(".box").innerHTML="<b>hello you were cliecked </b>";

})

button.addEventListener("contextmenu", function(){
    alert("right click please");
})
// document.querySelector(".box").innerHTML="<b>hello you were cliecked </b>";


// button.addEventListener("keydown", function(e){
    document.addEventListener("keydown", function(e){

    // alert("right click please");
    console.log(e.key,e.code);

// document.querySelector(".box").innerHTML="<b>hello you were cliecked </b>";

})