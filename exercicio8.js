const clientes = [
  { nome: "Lucas", email: "lucas@test.com", ativo: true },
  { nome: "Julia", email: "julia@test.com", ativo: false },
  { nome: "Marcos", email: "marcos@test.com", ativo: true }
];

// Seu código aqui
const emailsAtivos = clientes
    .filter(cliente => cliente.ativo)
    .map(cliente => cliente.email);

console.log(emailsAtivos);
