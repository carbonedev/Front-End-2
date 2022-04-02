//escolha do usuario
let userChoice = 0;

//placar usuario
let initScoreUser = 0;

let userScoreReference = document.getElementById('user-score')

//placar computador
let initScoreComp = 0;

let compScoreReference = document.getElementById('comp-score')

//capturando referencias html

let paperReference = document.querySelector('#paper')
let rockReference = document.querySelector('#rock')
let scissorReference = document.querySelector('#scissor')
let choiceUserReference = document.querySelector('#choiceUser')
let choiceCompReference = document.querySelector('#choiceComp')
let playGameReference = document.querySelector('#playGame')
let resultReference = document.querySelector('#result')

//escolha papel

paperReference.addEventListener('click', function(){
    
    userChoice = 1;
    choiceUserReference.innerHTML = `<img id="choiceUser" src="img/paper.png" alt=""></img>`
    
})



//escolha pedra
rockReference.addEventListener('click', function(){
    
    userChoice = 2;
    choiceUserReference.innerHTML = `<img id="choiceUser" src="img/rock.png" alt=""></img>`
    
    
})


//escolha tesoura
scissorReference.addEventListener('click', function(){
    
    userChoice = 3;
    choiceUserReference.innerHTML = `<img id="choiceUser" src="img/scissor.png" alt=""></img>`
    
    
})


//o Jogo

playGameReference.addEventListener('click', function(){
    botChoice = parseInt(Math.random()*3+1)
    switch(userChoice) {
        
        case 1:                  
        
        if (botChoice == 2){
            
            choiceCompReference.innerHTML = `<img id="choiceComp" src="img/rock.png" alt=""></img>`
            
            resultReference.innerHTML = `<div id="result">
                <p>Paper wraps Rock. You win! </p>
                </div>`
                
                userScoreReference = initScoreUser +1
                
                
            }
            else if (botChoice == 3){
                
                choiceCompReference.innerHTML = `<img id="choiceComp" src="img/scissor.png" alt=""></img>`
                    
                resultReference.innerHTML = `<div id="result">
                <p>Scissors cut Paper. You lose! </p>
                </div>`
                
                compScoreReference = initScoreComp +1
                
            }
                else {
                    
                    choiceCompReference.innerHTML = `<img id="choiceComp" src="img/paper.png" alt=""></img>`
                    
                    resultReference.innerHTML = `<div id="result">
                    <p>Draw! </p>
                    </div>`
                    
                }
                break;
                
                case 2:
                    
                    if (botChoice == 2){
                        
                        choiceCompReference.innerHTML = `<img id="choiceComp" src="img/rock.png" alt=""></img>`
                        
                        resultReference.innerHTML = `<div id="result">
                    <p>Draw! </p>
                    </div>`
                    
                }
                
                else if (botChoice == 3){
                    
                    choiceCompReference.innerHTML = `<img id="choiceComp" src="img/scissor.png" alt=""></img>`
                    
                    resultReference.innerHTML = `<div id="result">
                    <p>Rock blunts Scissors. You win! </p>
                    </div>`
                    
                    userScoreReference = initScoreUser +1
                }
                
                else {
                    
                    choiceCompReference.innerHTML = `<img id="choiceComp" src="img/paper.png" alt=""></img>`
                    
                    resultReference.innerHTML = `<div id="result">
                    <p>Paper wraps Rock. You lose! </p>
                    </div>`
                    
                    compScoreReference = initScoreComp +1
                    
                }
                break;             
                
                default:
                    if (botChoice == 3){
                        
                        choiceCompReference.innerHTML = `<img id="choiceComp" src="img/scissor.png" alt=""></img>`
                        
                        resultReference.innerHTML = `<div id="result">
                        <p>Draw! </p>
                        </div>`
                        
                        
                    }
                    
                    else if (botChoice == 1){
                        
                        choiceCompReference.innerHTML = `<img id="choiceComp" src="img/paper.png" alt=""></img>`
                        
                        resultReference.innerHTML = `<div id="result">
                        <p>Scissors cut Paper. You win! </p>
                    </div>`
                    
                    userScoreReference = initScoreUser +1
                    
                }
                
                    else{
                        
                        choiceCompReference.innerHTML = `<img id="choiceComp" src="img/rock.png" alt=""></img>`
                        
                        resultReference.innerHTML = `<div id="result">
                        <p>Rock blunts Scissors. You lose! </p>
                        </div>`
                        
                        compScoreReference = initScoreComp +1
                        
                        
                    }
            break; 
        }
    })
        
    userScoreReference.innerHTML = `<div id="user-score">${initScoreUser}</div>`;
    compScoreReference.innerHTML = `<div id="user-score">${initScoreComp}</div>`;
        
    
        console.log(compScoreReference)
        console.log(userScoreReference)
        
        

