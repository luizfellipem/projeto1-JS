console.log(`Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 17;
const estaAcompanhada = true;

console.log("Destinos Possíveis");
console.log(listaDeDestinos);

if (idadeComprador >= 18) {
    console.log("Comprador maior de idade");
    listaDeDestinos.splice(1, 1);//removendo item 
} else {
    //A pessoa é menor de idade
    if (estaAcompanhada) {
        console.log("Comprador está acompanhado");
        listaDeDestinos.splice(1, 1);//removendo item 
    } else {
        console.log("Não é maior de Idade e não posso vender");
    }
}

console.log(listaDeDestinos);

