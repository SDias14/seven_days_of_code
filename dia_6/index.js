//inputs 

let frutas = []
let laticinios = []
let congelados = []
let doces = []

alert("Bem vindo à sua lista de compras!");

let resposta = prompt("O que deseja fazer ? \n 1 - adicionar \n 2 - remover \n 3 - sair");

while (resposta != 3) {
    if (resposta == 1) {
        let categoria = prompt("Qual categoria deseja adicionar? \n 1 - Frutas \n 2 - Laticínios \n 3 - Congelados \n 4 - Doces");
        if (categoria == 1) {
            let fruta = prompt("Qual fruta deseja adicionar?");
            frutas.push(fruta);
            alert("Fruta adicionada com sucesso!");
        } else if (categoria == 2) {
            let laticinio = prompt("Qual laticínio deseja adicionar?");
            laticinios.push(laticinio);
            alert("Laticínio adicionado com sucesso!");
        } else if (categoria == 3) {
            let congelado = prompt("Qual congelado deseja adicionar?");
            congelados.push(congelado);
            alert("Congelado adicionado com sucesso!");
        } else if (categoria == 4) {
            let doce = prompt("Qual doce deseja adicionar?");
            doces.push(doce);
            alert("Doce adicionado com sucesso!");
        } else {
            alert("Categoria inválida!");
        }
    } else if (resposta == 2) {
        let categoria = prompt("Qual categoria deseja remover? \n 1 - Frutas \n 2 - Laticínios \n 3 - Congelados \n 4 - Doces");    
        if (categoria == 1) {
            let fruta = prompt("Qual fruta deseja remover?");
            let index = frutas.indexOf(fruta);
            if (index > -1) {
                frutas.splice(index, 1);
                alert("Fruta removida com sucesso!");
            } else {
                alert("Fruta não encontrada!");
            }
        } else if (categoria == 2) {
            let laticinio = prompt("Qual laticínio deseja remover?");
            let index = laticinios.indexOf(laticinio);
            if (index > -1) {
                laticinios.splice(index, 1);
                alert("Laticínio removido com sucesso!");
            } else {
                alert("Laticínio não encontrado!");
            }
        } else if (categoria == 3) {
            let congelado = prompt("Qual congelado deseja remover?");
            let index = congelados.indexOf(congelado);
            if (index > -1) {
                congelados.splice(index, 1);
                alert("Congelado removido com sucesso!");
            } else {
                alert("Congelado não encontrado!");
            }
        } else if (categoria == 4) {
            let doce = prompt("Qual doce deseja remover?");
            let index = doces.indexOf(doce);
            if (index > -1) {
                doces.splice(index, 1);
                alert("Doce removido com sucesso!");
            } else {
                alert("Doce não encontrado!");
            }
        } else {
            alert("Categoria inválida!");
        }
    } else {    
        alert("Opção inválida!");
    }

    resposta = prompt("O que deseja fazer ? \n 1 - adicionar \n 2 - remover \n 3 - sair");
    
}
    
   



//outputs

alert("Lista de compras \n Frutas: " + frutas + "\n Laticínios: " + laticinios + "\n Congelados: " + congelados + "\n Doces: " + doces)
