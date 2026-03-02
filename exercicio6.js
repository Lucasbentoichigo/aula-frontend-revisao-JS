const produtos = [
  { id: 1, nome: "Teclado" },
  { id: 2, nome: "Mouse" },
  { id: 3, nome: "Monitor" }
];
const idParaRemover = 2;

// Seu código aqui
const produtosAtualizados = produtos.filter(produto => produto.id !== idParaRemover);

console.log(produtosAtualizados);
