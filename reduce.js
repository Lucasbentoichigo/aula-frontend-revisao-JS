const itens = [
    { preco: 10, quantidade: 3 },
    { preco: 50, quantidade: 1 },
    { preco: 100, quantidade: 5}
]

const totalCarrinho = itens.reduce((total, item) => {
    return total + (item.preco * item.quantidade);
}, 0)

console.log(totalCarrinho);
