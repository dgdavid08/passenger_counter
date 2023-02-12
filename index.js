// document.getElementById("count-el").innerText = 5

//let myAge = 12
//let humanDogRatio = 7
//let myDogAge = myAge * humanDogAge
//console.log(myAge)

//function increment(){
//    console.log("The button was clicked")
//}
let countEl = document.getElementById("count-el")
let saveEl =document.getElementById("save-el")
let count = 0


function increment(){
    count = count +  1
    countEl.innerText = count
}

function save(){
    let getcount = count + "-"
    saveEl.innerText += getcount
    countEl.innertext = 0
    count = 0
    
}