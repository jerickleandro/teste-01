const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});


let somatorioDivisiveis = (valor, soma) =>{  
    try {
        let total = soma;
        if(valor === 0 || isNaN(valor)){
            return total;
        }
        
        let n = total == 0 ? parseInt(valor-1) : parseInt(valor);
        if((n % 3) === 0  || (n % 5) ===0 ){
            return somatorioDivisiveis(n-1, (total + n));
        }
        return somatorioDivisiveis(n-1, total);
        
    } catch (error) {
        console.error(error);
        return ; 
    }
}



rl.question('Digite o número que deseja ver o somatório dos divisíveis por 3 ou por 5:', resposta => {
    console.log(somatorioDivisiveis(resposta,0));
    
    rl.close();
});