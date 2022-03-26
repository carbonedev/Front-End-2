let buttonReference = document.querySelector('#mainButton')

let userNameInput = document.querySelector('')

userNameInput.addEventListener('mouseover', function(event)){
    console.log('mouse sobre o texto')
}

buttonReference.addEventListener('click', function(event){
    console.log('formulario enviado')
    document.querySelector('#mensagemSucesso').getElementsByClassName.opacity = 1
    event.preventDefault()
})

// buttonReference.onclick = clickouBotao

// window.onload = function(){

//     console.log(`O documento esta completamente carregado`)

// }

// function clickouBotao(){
//     console.log('clicou no botão')
// }