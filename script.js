// let nome = prompt("Digite aqui o seu nome");

// console.log (`O nome digitado foi ${nome}`);

// alert(`Seja bem vindo, ${nome}! Aproveite sua visita!`);

let numero = NUMBER(prompt("Digite aqui um numero:"));

IF(isNaN(Number(numero)) || numero === null){
        console.log("valor invalido");
}

if(numero > 10){
    console.log ("É um numero maior que 10");
    
}

else if (numero > 10){
    console.log("É um numero menor que 10");
    
    }

else if (numero < 10){
console.log("É um numero menor que 10");

}

else{
    console.log ("O número é igual a 10");
}



// Exemplo de While


//inicialização

let limite = Number(prompt("Digite o limite do contador"));
let contador = 1;

while(contador < limite){ //condição
    console.log(contador);

    //atualização
    contador = contador + 2;
    contador += 2;
    // contador++;
}

// ENQUANTO

