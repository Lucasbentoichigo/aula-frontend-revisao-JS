const calculadora = {
    valor: 0,
    adicionar: function(num) {
        this.valor += num;
    }
};

calculadora.adicionar(10);
console.log(calculadora.valor); // Deve exibir: 10

//Exercício 2: O Problema do Callback (setTimeout)

const pet = {
    nome: "Rex",
    latir: function() {
          let self = this;
        setTimeout(function() {
            console.log(self.nome + " latia: Au Au!");
        }, 1000);
    }
};
pet.latir(); 

//Exercício 3: O Erro da Arrow Function no Objeto

const carro = {
    marca: "Toyota",
    exibirMarca() {
        console.log("A marca do carro é: " + this.marca);
    }
};
carro.exibirMarca();
//Mal uso da arrow function

//Exercício 4: O Contador com setInterval
function Relogio() {
    this.segundos = 0;

    setInterval(() => {
        this.segundos++;
        console.log("Segundos passados: " + this.segundos);
    }, 1000);
}
const meuRelogia= new Relogio()

//Exercício 5: Refatorando o "Truque Antigo"
const usuario = {
    username: "dev_javascript",
    tags: ['js', 'programação', 'web'],
    listarTags() {
        this.tags.forEach(tag => {
            console.log(this.username + " marcou a tag: " + tag);
        });
    }
};

usuario.listarTags();


