alert ('Adivinhe o número que estou pensando');

const numero = 6 

let trials = 0

while (trials <= 1) {

    let guess = prompt ('Qual o número?')
    trials++
    if (guess == numero) {
        alert ('Parabéns, você acertou!')
        break
    } else {
        alert ('Tente de novo')
    }
}

alert ('O número era ' + numero)

