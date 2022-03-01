import sum from "./somar.js";
import subtract from "./subtrair.js";
import multiply from "./multiplicar.js";
import share from "./dividir.js";

var value1 
var value2 
var choice
var result

operation()

function values(){
    value1 = parseInt(prompt('Digite o 1 número da operação'))
    value2 = parseInt(prompt('Digite o 2 número da operação'))
      
}

function operation (){
    choice = parseInt(prompt('Escolha o numero da operação que deseja execultar : 1-soma, 2-subtração, 3- multiplicação, 4- divisão'))
    if (choice > 0 && choice < 5){

        values()

            switch (choice){
                case 1: 
                    // alert('somar')
                    result = sum(value1, value2)
                break;
                case 2:
                    // alert('subtrair')
                    result = subtract(value1, value2)
                break;
                case 3:
                    // alert('multiplicar')
                    result = multiply(value1, value2)
                break;
                default:
                    // alert('dividir')
                    result = share(value1, value2)
                break;
                       
            }

            alert(`O resultado é ${result}`)  

            let newCalculation = confirm('Deseja fazer mais alguma operação?')
            if (newCalculation){
                operation()
            }
            else{
                alert('Obrigado')
            }

    }
else {
    alert('digite o número correto da operação que deseja executar')
    operation()
}
    
}











