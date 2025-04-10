// document.querySelector(".box")//selects the first element with class box
// document.querySelector(".box").innerHTML//shows the htmlcdocument.querySelector(".container").innerHTML)//shows the html
// document.querySelector(".box").innerText//shows the text
// document.querySelector(".container").innerHTML//shows the html
// document.querySelector(".container").innerText//shows the innertext
// document.querySelector(".container").outerHTML//shows the innertext
// document.querySelector(".container").tagName //returns the tag name of the element which is div in this case
// document.querySelector(".container").nodeName//returns the node name of the element 
// document.querySelector(".container").textContent//shows the text content of the element
// document.querySelector(".box").innerHTML = "Hey I am Avijit"//this will change the inner html of the element with class box
// document.querySelector(".box").hasAttribute("style")//this will check if the element has the attribute style or not
// document.querySelector(".box").getAttribute("style")//this will get the value of the attribute style 
// document.querySelector(".box").setAttribute("style", "color:red")//this will set the value of the attribute style to color:red  
// document.querySelector(".box").removeAttribute("style")//this will remove the attribute style from the element
// document.querySelector(".box").attributes//this will return all the attributes of the element
// document.designMode = "on"//this will set the design mode of the document to on
// document.querySelector(".box").dataset//this will return all the data attributes of the element like who is the author and what is the title


// // let div = document.createElement("div"); //this will create a new div element
// // div.innerHTML = "This is a new div and i have been inserted" ; //this will set the inner html of the div
// // div.setAttribute("class", "created");  //this will set the class of the div to created
// // document.querySelector(".container").append(div);  //this will append the div to the container
// // document.querySelector(".container").before(div);  
// // document.querySelector(".container").after(div);  
// // document.querySelector(".container").prepend(div);

// let cont = document.querySelector(".container");
// cont.insertAdjacentHTML("beforebegin", "<h1>Hey I am Avijit</h1>")//this will insert the html before the container
// cont.insertAdjacentHTML("afterbegin", "<h1>Hey I am Avijit</h1>")//this will insert the html after the container
// cont.insertAdjacentHTML("beforeend", "<h1>Hey I am Avijit</h1>")//this will insert the html before the container
// cont.insertAdjacentHTML("afterend", "<h1>Hey I am Avijit</h1>")//this will insert the html after the container


document.querySelector(".container").classList// this will return all the classes of the element
document.querySelector(".container").className// this will return all the name of classes of the element
document.querySelector(".container").classList.add("Aviijit_class");//this will add the class Aviijit_class to the element
document.querySelector(".container").classList.remove("Aviijit_class");// this will remove the class Aviijit_class from the element
document.querySelector(".container").classList.toggle("Aviijit_class");// this will toggle the class Aviijit_class from the element
