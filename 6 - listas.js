console.log(`Trabalhando com listas`);

//array
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`
);

listaDeDestinos.push(`Porto Alegre`); //add item

console.table(listaDeDestinos);

listaDeDestinos.splice(1,1);

console.table(listaDeDestinos);

console.log(listaDeDestinos[1]);