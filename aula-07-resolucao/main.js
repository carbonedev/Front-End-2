
//capturando os locais no HTML
let numberOne = document.getElementById('numberOne')
let numberTwo = document.getElementById('numberTwo')
let sum = document.getElementById('sum')
let sub = document.getElementById('sub')
let mul = document.getElementById('mul')
let div = document.getElementById('div')
let result = document.getElementById('result')

function sum(){
    sum = document.addEventListener("click",function(event){
        event.result = numberOne + numberTwo
    })
}

