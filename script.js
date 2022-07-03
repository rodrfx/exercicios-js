// Escreva uma função que recebe uma string como argumento, extrair os 3 últimos caracteres da string e retorne o resultado

function myFunction(str) {
	return str.slice(-3);
}

const result = myFunction('abcdef');
console.log(result);
