// Dada a função calculaIdade, utilize os métodos call e apply para modificar o valor de this. Crie seus próprios objetos para esta atividade!

function calculaIdade(anos) {
	return `Daqui a ${anos} anos, ${this.nome} terá ${
		this.idade + anos
	} anos de idade.`;
}

const pessoa1 = {
	nome: 'Maria',
	idade: 23,
};

const pessoa2 = {
	nome: 'João',
	idade: 20,
};

const pessoa3 = {
	nome: 'Diego',
	idade: 13,
};

console.log(calculaIdade.call(pessoa1, 2));
console.log(calculaIdade.call(pessoa3, [2]));
