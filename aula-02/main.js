// var botChoice = 0;

// var userChoice = 0;

// var userChoiceGame = 0;

var botWinner = 0;

const compScore = document.getElementById('comp-score')
compScore.innerHTML = botWinner

var userWinner = 0;
const userScore = document.getElementById('user-score')
userScore.innerHTML = userWinner

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
 
//     validGame()
    
// } 
    
// function validGame(){
//         userChoice = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
//         if (userChoice > 0 && userChoice < 4){
//                 userChoiceGame = userChoice
//                 playGame()
//         }
//         else{
//             alert('digite numero de 1 à 3')
//             validGame()
//         }
// }        


//         function playGame(){

//             botChoice = parseInt(Math.random()*3+1)
//             switch(userChoiceGame) {
            
//             case 1:                  

//                 if (botChoice == 2){
    
//                     alert('o Bot ganhou')
//                     botWinner = ++botWinner
                    
//                     }
//                 else if (botChoice == 3){
    
//                     alert('o Jogador ganhou')
//                     userWinner = ++userWinner    
                    
//                     }
//                 else {
    
//                     alert('Empate');
                    
//                     }
//             break;

//             case 2:
    
//                 if (botChoice == 2){
    
//                     alert('Empate');
                                        
//                     }
    
//                 else if (botChoice == 3){
    
//                     alert('o Bot ganhou')
//                     botWinner = ++botWinner                   
//                     }
    
//                 else {
    
//                     alert('o Jogador ganhou')
//                     userWinner = ++userWinner  
                     
//                     }
//             break;             

//             default:
//                 if (botChoice == 3){
    
//                     alert('Empate');
                    
                    
//                     }
                
//                 else if (botChoice == 1){
                
//                     alert('o Bot ganhou')
//                     botWinner = ++botWinner
                   
//                     }
                
//                 else{
                
//                     alert('o Jogador ganhou')
//                     userWinner = ++userWinner 
                            
//                     }
//             break; 
//             }
//             winner()
//         }    
// }
// winner()
