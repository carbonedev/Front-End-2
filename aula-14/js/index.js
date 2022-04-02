// Referencia do HTML

let pictureReference = document.getElementById('picture')
let nameReference = document.getElementById('name')
let emailReference = document.getElementById('email')
let randomRefernece = document.getElementById('random')





// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona
random()
function random(){fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta
        renderizarDadosUsuario(data.results[0])
        console.log(data)
    });}

    function renderizarDadosUsuario(dados) {
        
        pictureReference.src = dados.picture.medium
        nameReference.innerText = `Nome Completo: ${dados.name.first} ${dados.name.last}`
        emailReference.innerText = dados.email
        
        
        /* -------------------------------- Tarefa 1 -------------------------------- */
        // Aqui devem desenvolver uma função que seja exibida na tela:
        // a foto, o nome completo do usuário e o e-mail.
        // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.
    }
    
    
    randomRefernece.addEventListener('click', function(event){
        event.preventDefault()
        random()
        /* --------------------------- Tarefa 2 (extra) --------------------------- */
        // Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
        // Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
        // Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.
    })