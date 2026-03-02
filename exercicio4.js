const usuarios = [
  { id: 1, nome: "João", email: "joao@email.com" },
  { id: 2, nome: "Maria", email: "maria@email.com" },
  { id: 3, nome: "José", email: "jose@email.com" }
];

// Seu código aqui
const nomesUsuarios = usuarios.map(usuario => usuario.nome)

console.log(nomesUsuarios);
