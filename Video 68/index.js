console.log("Hello World");

let boxes = document.getElementsByClassName("box");
console.log(boxes);

boxes[3].style.backgroundColor = "red";// by index using getElementsByClassName

document.getElementById("redbox").style.backgroundColor = "blue";//by id using getElementById
document.querySelector(".box").style.backgroundColor = "green";//by id using querySelector and will select the first element .

document.querySelectorAll(".box").forEach((box) => {
    box.style.backgroundColor = "yellow";
})//by using querySelectorAll and will select all elements with the class name box
document.getElementsByTagName("div")
//by using getElementsByTagName and will select all elements with the tag name div

console.log(document.getElementsByTagName("div"))
//by using getElementsByTagName and will select all elements with the tag name div

console.log(document.getElementsByName("test_name"))//by using getElementsByName and will select all elements with the name test_name


let e = document.getElementsByTagName("div")
console.log(e[3].matches("#redbox"))//by using matches and will check if the element matches the selector
console.log(e[3].matches(".box"))//by using matches and will check if the element matches the selector

console.log(document.querySelector(".container").contains(document.querySelector("body")))//by using contains and will check if the element contains the selector adn it will retrun false as it does not contain the body

console.log(document.querySelector("body").contains(document.querySelector(".container")))//by using contains and will check if the element contains the selector adn it will retrun true as it does contain the body