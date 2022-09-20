//inputs 

let frutas = []
let laticinios = []
let congelados = []
let doces = []

alert("Bem vindo à sua lista de compras!");

let resposta = prompt("Deseja adicionar um item? Digite 1 para sim e 2 para não");

while (resposta != 2) {
    let item = prompt("Qual o item que deseja adicionar?");
    let categoria = prompt("Qual a categoria do item? Digite 1 para frutas, 2 para laticínios, 3 para congelados e 4 para doces");

    if (categoria == 1) {
        frutas.push(item);
    } else if (categoria == 2) {
        laticinios.push(item);
    } else if (categoria == 3) {
        congelados.push(item);
    } else if (categoria == 4) {
        doces.push(item);
    } else {
        alert("Categoria inválida!");
    }

    resposta = prompt("Deseja adicionar um item? Digite 1 para sim e 2 para não");
}

//outputs

alert("Lista de compras \n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces);