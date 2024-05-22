let firstInput = document.querySelector(".input1")
let secondInput = document.querySelector(".input2")
let resultInput = document.querySelector(".result")
let sumButton = document.querySelector(".sumClass")
let minusButton = document.querySelector(".minusClass")
let multButton = document.querySelector(".multClass")
let divideButton = document.querySelector(".divideClass")

sumButton.addEventListener("click",sum )
minusButton.addEventListener("click", minus)
multButton.addEventListener("click", mult)
divideButton.addEventListener("click",divide)

function divide(){
    let parsedValue1 = parseInt(firstInput.value)
    let parsedValue2 = parseInt(secondInput.value)
     if(isNaN(parsedValue1) || isNaN(parsedValue2)){
         alert("Iki xanaya reqemler daxil edin")
         firstInput.value = ' '
         secondInput.value = ' '
     }
     if(parsedValue2 === 0){
        alert("0-a bolunme mumkun deyil")
        firstInput.value = ' '
        secondInput.value = ' '
     }
     else{
         resultInput.value = parsedValue1 / parsedValue2 
         firstInput.value = ' '
         secondInput.value = ' '   
     }
 }
 
function mult(){
    let parsedValue1 = parseInt(firstInput.value)
    let parsedValue2 = parseInt(secondInput.value)
     if(isNaN(parsedValue1) || isNaN(parsedValue2)){
         alert("Iki xanaya reqemler daxil edin")
         firstInput.value = ' '
         secondInput.value = ' '
     }
     else{
         resultInput.value = parseInt(firstInput.value) * parseInt(secondInput.value) 
         firstInput.value = ' '
         secondInput.value = ' '   
     }
 }
 
function minus(){
    let parsedValue1 = parseInt(firstInput.value)
    let parsedValue2 = parseInt(secondInput.value)
     if(isNaN(parsedValue1) || isNaN(parsedValue2)){
         alert("Iki xanaya reqemler daxil edin")
         firstInput.value = ' '
         secondInput.value = ' '
     }
     else{
         resultInput.value = parseInt(firstInput.value) - parseInt(secondInput.value) 
         firstInput.value = ' '
         secondInput.value = ' '   
     }
 }
 
function sum(){
   let parsedValue1 = parseInt(firstInput.value)
   let parsedValue2 = parseInt(secondInput.value)
    if(isNaN(parsedValue1) || isNaN(parsedValue2)){
        alert("Iki xanaya reqemler daxil edin")
        firstInput.value = ' '
        secondInput.value = ' '
    }
    else{
        resultInput.value = parseInt(firstInput.value) + parseInt(secondInput.value) 
        firstInput.value = ' '
        secondInput.value = ' '   
    }
}
