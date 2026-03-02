const desenvolvedores = [
  { nome: "Carlos", nivel: "Junior" },
  { nome: "Fernanda", nivel: "Senior" },
  { nome: "Ricardo", nivel: "Pleno" },
  { nome: "Elisa", nivel: "Junior" },
  { nome: "Gustavo", nivel: "Pleno" }
];

// Seu código aqui. Retorno esperado: { Junior: 2, Senior: 1, Pleno: 2 }
const contagemNiveis = desenvolvedores.reduce((acc, dev) => {
  if (acc[dev.nivel]) {
        acc[dev.nivel]++;
    } else {
        acc[dev.nivel] = 1;
    }
    return acc;
}, {});

console.log(contagemNiveis);
