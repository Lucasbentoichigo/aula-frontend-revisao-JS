const precosEmReais = [10, 20, 30];

const precosEmDolares = precosEmReais.map(preco => preco * 5);

console.log(precosEmDolares);


const precosEmRubros = precosEmReais.map(preco => preco * 14.85);

console.log(precosEmRubros);

const grausCelsius = [20, 40, 60];

const grausFahrenheit = grausCelsius.map(graus => graus * 9/5 + 32 );

console.log(grausFahrenheit);
