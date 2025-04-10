console.log("Solution to Exercise 70");

let boxes = document.getElementsByClassName("box");
console.log(boxes);


function getRandomColor() {
    let a = Math.ceil(0+ Math.random() * 255);
    let b = Math.ceil(0+ Math.random() * 255);
    let c = Math.ceil(0+ Math.random() * 255);

    return `rgb(${a},${b},${c})`;
}

function updateColors(){
    Array.from(boxes).forEach((element) => {
        element.style.backgroundColor = getRandomColor();
        element.style.color = getRandomColor();
    });
}
updateColors();
const colorRefreshInterval = 2000; // 2 seconds
setInterval(updateColors, colorRefreshInterval);


