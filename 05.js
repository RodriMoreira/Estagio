//Declaração de variáveis
const texto = "inverter caracteres"
let textoInvertido = ""

//Laço de repetição que inverte o texto
for(let i = texto.length -1; i >= 0; i--) {
  textoInvertido += texto[i]
}

//Impressão da variável textoInvertido.
console.log(textoInvertido);