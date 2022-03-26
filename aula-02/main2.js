// var botChoice = 0;

// var userChoice = 0;



// var botWinner = 0;

// const compScore = document.getElementById('comp-score')
// compScore.innerHTML = botWinner

// var userWinner = 0;
// const userScore = document.getElementById('user-score')
// userScore.innerHTML = userWinner

// var result = "";

// const oldResult = document.getElementById('result')
// oldResult.innerHTML = result

// var winnerGame = "";
// const oldResult = document.getElementById('result')
// oldResult.innerHTML = result


// function winner(){
// if (botWinner == 2){
//     alert('Tente outra vez o Bot ganhou')
//     botWinner = 0;
//     userWinner = 0;
//     winner()
// }
// else if (userWinner == 2){
//     alert('Parabéns você ganhou')
//     let playAgain = confirm('você quer jogar novamente?')
//     if (playAgain){
//         botWinner = 0;
//         userWinner = 0;
//         winner()
//     }
//     else{
//         alert('obrigado por jogar')
//     }

// }
// else{
 
//     playGame()
    
// } 

//         function playGame(){

//             botChoice = parseInt(Math.random()*3+1)
//             switch(userChoice) {
            
//             case 1:                  

//                 if (botChoice == 2){
    
//                     result = "You Lost!";
//                     botWinner = ++botWinner
                    
//                     }
//                 else if (botChoice == 3){
    
//                     result = "You win!";
//                     userWinner = ++userWinner    
                    
//                     }
//                 else {
    
//                     result = "Draw!";
                    
//                     }
//             break;

//             case 2:
    
//                 if (botChoice == 2){
    
//                     result = "Draw!";
                                        
//                     }
    
//                 else if (botChoice == 3){
    
//                     result = "You Lost!";
//                     botWinner = ++botWinner                   
//                     }
    
//                 else {
    
//                     result = "You win!";
//                     userWinner = ++userWinner  
                     
//                     }
//             break;             

//             default:
//                 if (botChoice == 3){
    
//                     result = "Draw!";
                    
                    
//                     }
                
//                 else if (botChoice == 1){
                
//                     result = "You Lost!";
//                     botWinner = ++botWinner
                   
//                     }
                
//                 else{
                
//                     result = "You win!";
//                     userWinner = ++userWinner 
                            
//                     }
//             break; 
//             }
//             winner()
//         }    
// }
// winner()


//placar usuario
var initScoreUser = 0;

var userScore = document.getElementById('user-score')
userScore.innerText = initScoreUser;

//placar computador
var initScoreComp = 0;

var compScore = document.getElementById('comp-score')
compScore.innerText = initScoreComp;

//escolha do usuario
var userChoice = 0;

//escolha pedra
function stoneChoice(){
    return userChoice = 1;

}

//escolha papel
function paperChoice(){
    return userChoice = 2;

}

//escolha tesoura
function scissorChoice(){
    return userChoice = 3;

}


//resultado
var initResult = "";

var result = document.getElementById("result")
result.innerText = initResult


//o Jogo
        function playGame(){

            botChoice = parseInt(Math.random()*3+1)
            switch(userChoice) {
            
            case 1:                  

                if (botChoice == 2){
    
                    result = "You Lost!";
                    initScoreComp = ++initScoreComp
                    
                    }
                else if (botChoice == 3){
    
                    result = "You win!";
                    initScoreUser = ++initScoreUser    
                    
                    }
                else {
    
                    result = "Draw!";
                    
                    }
            break;

            case 2:
    
                if (botChoice == 2){
    
                    result = "Draw!";
                                        
                    }
    
                else if (botChoice == 3){
    
                    result = "You Lost!";
                    initScoreComp = ++initScoreComp                
                    }
    
                else {
    
                    result = "You win!";
                    initScoreUser = ++initScoreUser    
                     
                    }
            break;             

            default:
                if (botChoice == 3){
    
                    result = "Draw!";
                    
                    
                    }
                
                else if (botChoice == 1){
                
                    result = "You Lost!";
                    initScoreComp = ++initScoreComp   
                   
                    }
                
                else{
                
                    result = "You win!";
                    initScoreUser = ++initScoreUser   
                            
                    }
            break; 
            }
            winner()
        }   