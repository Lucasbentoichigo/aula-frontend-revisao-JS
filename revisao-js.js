const pessoa = {
    nome: "Lucas",
    idade: 17,
    falar: function() {
        console.log("Meu nome é " + this.nome + " e tenho " + this.idade + " anos.");
    }
};
pessoa.falar(); // Meu nome é Lucas e tenho 17 anos.

const usuario = {
    nome: "Lucas",
    logar: function() {
        setTimeout(() => {
            console.log("Usuario " + this.nome + " logado com sucesso!");
        }, 1000);
    }
};
usuario.logar();

const humano = {
    nome: "Lucas",
    falar() {
        console.log("Meu nome é " + this.nome);
    }
};
humano.falar(); // "Meu nome é Lucas"

//! Erro comum ao usar a palavra-chave "this" dentro de uma função anônima em um método
const pessoaaa = {
        nome: "Lucas",
        apresentar: function () {
            let self = this; // Armazena a referência ao objeto atual
            setTimeout(function () {
                console.log("Olá, meu nome é " + self.nome);
            }, 1000);
        }
};
 pessoaaa.apresentar(); // Output: Olá, meu nome é Lucas