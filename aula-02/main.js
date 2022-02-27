// var botChoice = 0;

// var userChoice = 0;

// var userChoiceGame = 0;

// var botWinner = 0;

// var userWinner = 0;

// function winner(){
// if (botWinner == 2){
//     alert('Tente outra vez o Bot ganhou')
//     winner()
// }
// else if (userWinner == 2){
//     alert('Parabéns você ganhou')

// }
// else{
//     function validGame(){
//         userChoice = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))

//         if(userChoice > 0 && userChoice < 4){
//             userChoiceGame = userChoice
//             playGame()
//         }
//         else{
//             alert('sua escolha deve ser de 1 à 3')

//             validGame
//         }
//     }
// }
// }


// function playGame(){

//         switch(userChoice) {
            
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
        
//         }
         
// }

// winner()

// console.log(botChoice)
// console.log(userChoice)
// console.log(botWinner)
// console.log(userWinner)



var botChoice = 0;

var userChoice = 0;

var userChoiceGame = 0;

var botWinner = 0;

var userWinner = 0;

function winner(){
if (botWinner == 2){
    alert('Tente outra vez o Bot ganhou')
    botWinner = 0;
    userWinner = 0;
    winner()
}
else if (userWinner == 2){
    alert('Parabéns você ganhou')

}
else{
 
    validGame()
    
} 
    
function validGame(){
        userChoice = parseInt(prompt('1- Papel, 2- Tesoura, 3- Pedra'))
        if (userChoice > 0 && userChoice < 4){
                userChoiceGame = userChoice
                playGame()
        }
        else{
            alert('digite numero de 1 à 3')
            validGame()
        }
}        


        function playGame(){

            botChoice = parseInt(Math.random()*3+1)
            switch(userChoiceGame) {
            
            case 1:                  

                if (botChoice == 2){
    
                    alert('o Bot ganhou')
                    botWinner = ++botWinner
                    
                    }
                else if (botChoice == 3){
    
                    alert('o Jogador ganhou')
                    userWinner = ++userWinner    
                    
                    }
                else {
    
                    alert('Empate');
                    
                    }
            break;

            case 2:
    
                if (botChoice == 2){
    
                    alert('Empate');
                                        
                    }
    
                else if (botChoice == 3){
    
                    alert('o Bot ganhou')
                    botWinner = ++botWinner                   
                    }
    
                else {
    
                    alert('o Jogador ganhou')
                    userWinner = ++userWinner  
                     
                    }
            break;             

            default:
                if (botChoice == 3){
    
                    alert('Empate');
                    
                    
                    }
                
                else if (botChoice == 1){
                
                    alert('o Bot ganhou')
                    botWinner = ++botWinner
                   
                    }
                
                else{
                
                    alert('o Jogador ganhou')
                    userWinner = ++userWinner 
                            
                    }
            break; 
            }
            winner()
        }    
}

winner()

console.log(botChoice)
console.log(userChoice)
console.log(botWinner)
console.log(userWinner)