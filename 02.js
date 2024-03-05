function fibonacci(numero) {
  //Declaração de variáveis.
  let primeiroNumero = 0;
  let segundoNumero = 1
  let proximoNumero = 1;
  let arrayFibonacci = [];

  //Estrutura de repetição que calcula o número de fibonacci até o valor estipulado.
  while(numero > proximoNumero) {
    primeiroNumero = segundoNumero + proximoNumero;
    segundoNumero = proximoNumero
    proximoNumero = primeiroNumero

    arrayFibonacci.push(proximoNumero)
  }
  
  //Estrutura condicional que verifica se o valor estipulado pertence a sequência.
  if(arrayFibonacci.includes(numero)) {
    console.log("Este número pertence a sequência.");
  } else {
    console.log("Este número NÃO pertence a sequência.");
  }
}

//Impressão do teste.
fibonacci(55);

