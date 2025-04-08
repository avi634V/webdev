let obj1 = {
    1: "crazy",
    2: "amazing",
    3: "fire"
}

let obj2 = {
    1: "Engine",
    2: "Foods",
    3: "Garments"
}
let obj3 = {
    1: "Bros",
    2: "Limited",
    3: "Hub"
}
var ran1 = Math.floor(Math.random() * 3) + 1;
console.log(ran1);
var ran2 = Math.floor(Math.random() * 3) + 1;
console.log(ran2)
var ran3 = Math.floor(Math.random() * 3) + 1;
console.log(ran3)

let businessName = obj1[ran1] + obj2[ran2] + obj3[ran3];
console.log(businessName);
console.log(obj1[1])