let inputReference = document.querySelector('input')
let submitReference = document.querySelector('submit')

submitReference.addEventListener('click', function(event){

    event.preventDefault()

    fetch(`https://api.github.com/users/${inputReference.value}`).then(response => {
        response.json().then(
            success => {
                
            }
        )
    })



})