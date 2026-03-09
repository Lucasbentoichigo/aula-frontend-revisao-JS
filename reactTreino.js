//1
const categorias = ["Eletrônicos", "Roupas", "Livros"];

// Seu código aqui
const categoriasJSX = categorias.map((categoria) => `<li>${categoria}</li>`);
console.log(categoriasJSX);
// Resultado esperado: ["<li>Eletrônicos</li>", "<li>Roupas</li>", "<li>Livros</li>"]

console.log("--------------------------------------------------------------");

//2

const usuarios = [
  { id: 101, nome: "Aline" },
  { id: 102, nome: "Bruno" }
];

// Seu código aqui
const componentesUsuarios = usuarios.map(
    (usuario) => `<UserCard key="${usuario.id}" nome="${usuario.nome}" />`,
);
console.log(componentesUsuarios);
// Resultado esperado: ['<UserCard key="101" nome="Aline" />', '<UserCard key="102" nome="Bruno" />']

console.log('--------------------------------------------------------------');

//3
const comentarios = [
  { id: 1, texto: "Ótimo post!" },
  { id: 2, texto: "Não gostei." },
  { id: 3, texto: "Me ajudou muito, valeu!" }
];
const idExcluido = 2;

// Seu código aqui
const novoEstadoComentarios  = comentarios.filter((comentario) => comentario.id !== idExcluido);
console.log(novoEstadoComentarios);

console.log('--------------------------------------------------------------');

//4
const notificacoes = [
  { id: 1, mensagem: "Bem-vindo!", lida: false },
  { id: 2, mensagem: "Você tem 1 nova mensagem", lida: false },
  { id: 3, mensagem: "Atualização de sistema", lida: true }
];
const idLida = 2;

// Seu código aqui (Dica: use map com uma condição (if/ternário) dentro)
const novoEstadoNotificacoes = notificacoes.map((notificacao) => {
    if (notificacao.id === idLida) {
        return { ...notificacao, lida: true };
    } else {
        return notificacao;
    }
});
console.log(novoEstadoNotificacoes);

console.log('--------------------------------------------------------------');

//5
const estadoCarrinho = [
  { id: "p1", nome: "Cadeira Gamer", quantidade: 1 },
  { id: "p2", nome: "Monitor", quantidade: 2 },
  { id: "p3", nome: "Cabo HDMI", quantidade: 3 }
];

// Seu código aqui
const totalDeItensNoCarrinho = estadoCarrinho.reduce((total, item) => total + item.quantidade, 0);
console.log(totalDeItensNoCarrinho);
