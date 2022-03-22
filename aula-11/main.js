let inputNameReference = document.querySelector('#inputName')
let inputLastNameReference = document.querySelector('#inputLastName')
let validateReference = document.querySelector('#validate')
let showTheDataTrimReference = document.querySelector('#showTheDataTrim')
let showTheDataUpperReference = document.querySelector('#showTheDataUpper')
let showTheDataLowerReference = document.querySelector('#showTheDataLower')
let showTheDataConcatReference = document.querySelector('#showTheDataConcat')
let showTheDataReplaceReference = document.querySelector('#showTheDataReplace')
let change = ""


validateReference.addEventListener('click', function(event){

    event.preventDefault()

    inputNameReference = inputNameReference.value
    console.log(inputNameReference)

    inputLastNameReference = inputLastNameReference.value
    console.log(inputLastNameReference)

    change = inputNameReference.replace('e','3')

    

    showTheDataTrimReference.innerHTML = `Nome sem espaços não utilizados: ${inputNameReference.trim()}`
    showTheDataUpperReference.innerHTML = `Nome com caracteres maiusculos: ${inputNameReference.toUpperCase()}`
    showTheDataLowerReference.innerHTML = `Nome com caracteres minusculos: ${inputNameReference.toLowerCase()}`
    showTheDataConcatReference.innerHTML = `Nome e sobrenome: ${inputNameReference.concat(inputLastNameReference)}`
    showTheDataReplaceReference.innerHTML = `Letras trocadas: ${change.replace('a','@')}`
    










})