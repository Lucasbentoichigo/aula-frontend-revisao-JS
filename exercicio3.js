const precos = [29.9, 50.0, 10.5, 100.0];

// Seu código aqui
const total = precos.reduce((acumulador, preco) => acumulador + preco, 0);

console.log(total);
