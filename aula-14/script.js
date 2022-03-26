let commentReference = document.querySelector('#comment')
let submitReference = document.querySelector('#submit')
let postsReference = document.querySelector('#posts')
let newPost = ""
let postsArray = []


submitReference.addEventListener('click', function(event){

    event.preventDefault()

    newPost = commentReference.value

    postsArray.push(newPost)

    
    localStorage.setItem('newPost',postsArray )

    postsReference.innerHTML = (`<p>
    
    ${localStorage.getItem('newPost')}
    
    </p>`)
    

})