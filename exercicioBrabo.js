const usuarios = [
	{ nome: "Ana", ativo: true },
	{ nome: "Carlos", ativo: false },
	{ nome: "Bruna", ativo: true }
];

const resultado = usuarios.map(usuario => `${usuario.nome} - ${usuario.ativo ? "Ativo" : "Inativo"}`);

console.log(resultado);
