// function parametros(num1,num2) {
//     //let iguais = num1 === num2; 
//     //sempre que se faz uma comparação ele retorna um boleano true ou false.

//     let iguais = '';

//     if(num1 !== num2){
//         iguais = 'não';
//     }

//     let soma = num1 + num2; //como utiliza um operador de adição soma será do tipo number.
//     let compara10 = soma > 10
//     let compara20 = soma > 20



//     soma > 10 ? maior : menor 
//     soma > 20 ? maior : menor 

//     return soma

// }

// parametros(num1,num2)

// console.log(`Os numeros ${num1} e ${num2} ${nao} são iguais. Sua soma é ${soma}, que é ${iguais} que 10 e ${iguais} que 20.`);

//------------------------------------

// function comparaNumeros(num1, num2) {
// 	const primeiraFrase = criaPrimeiraFrase(num1, num2);
// 	const segundaFrase = criaSegundaFrase(num1, num2);

// 	return `${primeiraFrase} ${segundaFrase}`;
// }

// function criaPrimeiraFrase(num1, num2) {
// 	let primeiraFrase = `Os números ${num1} e ${num2}`;
// 	let simNao = '';

// 	if (num1 !== num2) {
// 		simNao = 'não';
// 	}

// 	return `${primeiraFrase} ${simNao} são iguais.`;
// }

// function criaSegundaFrase(num1, num2) {
// 	const soma = num1 + num2;

//     let comparaDez = soma > 10 ? 'maior' : 'menor'
//     let comparaVinte = soma > 20 ? 'maior' : 'menor'

// 	return `Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
// }

// console.log(comparaNumeros(20, 5));

//------------------

function comparaNumeros(num1, num2) {

    let primeiraFrase = `Os números ${num1} e ${num2}`;
    let simNao = '';

    if (num1 !== num2) {
        simNao = 'não';
    }

    const soma = num1 + num2;

    let comparaDez = soma > 10 ? 'maior' : 'menor'
    let comparaVinte = soma > 20 ? 'maior' : 'menor'

    return `${primeiraFrase} ${simNao} são iguais. Sua soma é ${soma}, que é ${comparaDez} do que 10 e ${comparaVinte} do que 20.`;
}

console.log(comparaNumeros(20, 25));