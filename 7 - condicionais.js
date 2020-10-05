console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Porto Alegre`
);

const idadeComprador = 15;
const estaAcompanhada = true;

console.log(`Destinos possíveis`);
console.table(listaDeDestinos);

// if (idadeComprador >= 18) {

//     console.log(`Comprador é maior de idade`);
// } else if (estaAcompanhada) {

//     console.log(`Comprador não é maior de idade, e está acompanhado`)
// } else {

//     console.log(`Comprador não é maior de Idade e não está acompanhado`);
// }

if (idadeComprador >= 18 || estaAcompanhada) {

    console.log(`Boa viagem!`);
    listaDeDestinos.splice(2, 1);
}else{

    console.log(`Comprador não é maior de idade ou não está acompanhado`);
}
