console.log(`\n Trabalhando com condicionais`);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio De Janeiro`
);

const idadeComprador = 16;
const estaAcompanhada = true;
let temPassagemComprada = false;
const destino = "Salvador";

console.log("\n Destinos Possíveis");
console.log(listaDeDestinos);

const podeComprar = idadeComprador >= 18 || estaAcompanhada == true;

let contador = 0;
while(contador<3){
    console.log(listaDeDestinos[contador]);
    contador += 1;
}