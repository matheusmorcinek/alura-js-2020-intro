console.log(`Trabalhando com condicionais`);

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
    `Curitiba`,
    `Porto Alegre`
);

const destino = `Curitiba`;

let destinoExiste = false;
let contador = 0;
while (contador < listaDeDestinos.length) {

    if (listaDeDestinos[contador] == destino) {

        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    }
    contador++;
}


for (let cont = 0; cont < listaDeDestinos.length; cont++) {

    if (listaDeDestinos[cont] == destino) {

        console.log(`Destino existe`);
        destinoExiste = true;
        break;
    }
}