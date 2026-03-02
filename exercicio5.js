const tarefas = [
  { id: 1, descricao: "Estudar React", concluida: true },
  { id: 2, descricao: "Configurar Webpack", concluida: false },
  { id: 3, descricao: "Entender Reduce", concluida: false }
];

// Seu código aqui
const tarefasPendentes = tarefas.filter(tarefa => !tarefa.concluida);

console.log(tarefasPendentes);
