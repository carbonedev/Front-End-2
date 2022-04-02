let nomeReference = document.querySelector('#nome')
let passReference = document.querySelector('#pass')
let telReference = document.querySelector('#tel')
let buttonReference = document.querySelector('#button')
let userName = ""




buttonReference.addEventListener('keyup', function(event){
    
    userName = nomeReference
    console.log(userName)
    if (userName == "") {
        buttonReference.removeAttribute("disabled");
    }
  });

buttonReference.addEventListener('click', function(event){
    event.preventDefault()
    
    if(nomeReference.value !== ""){
    
        buttonReference.removeAttribute('disabled')
    
    }
    
})