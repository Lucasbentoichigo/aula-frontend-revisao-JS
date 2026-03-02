const carrinho = [
  { produto: "Notebook", preco: 4500.0, quantidade: 1 },
  { produto: "Mouse", preco: 150.0, quantidade: 2 },
  { produto: "Teclado", preco: 300.0, quantidade: 1 }
];

// Seu código aqui (dica: preco * quantidade)
const totalCarrinho = carrinho.reduce((total, item) => total + item.preco * item.quantidade, 0);

console.log(totalCarrinho);
