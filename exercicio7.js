const alunos = [
  { nome: "Ana", nota: 8.5 },
  { nome: "Beto", nota: 5.0 },
  { nome: "Caio", nota: 7.0 }
];

// Seu código aqui
const alunosComStatus = alunos.map(aluno => {
  return {
        nome: aluno.nome,
        nota: aluno.nota,
        status: aluno.nota >= 7 ? "Aprovado" : "Reprovado"
    };
});

console.log(alunosComStatus);
