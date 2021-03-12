
let altura = Math.floor(Math.random() * 100);
let largura = Math.floor(Math.random() * 100);

let area = calcularArea(altura, largura);

console.log(altura, largura);

//Template literals
let mensagem = `Área: ${ area } m2`;
console.log(mensagem);

function calcularArea(altura, largura){
    return altura * largura;
}