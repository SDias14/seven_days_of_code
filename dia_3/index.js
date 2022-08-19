let field = prompt('Digite : \n1 - Para Front-End \n2 - Para Back-End ');

if (field == 1) {
    let front = prompt('Escolha  \n 1 - React \n 2 - Vue ');

    if (front == 1) {
        front = 'React';
    } else {
        front = 'Vue';
    }
    
    let perfect1 = prompt(`Digite : \n1 - seguir se especializando em ${front} ou \n2 - seguir se desenvolvendo para se tornar Fullstack.`);
    
    if (perfect1 == 1) {
        alert(`Você se especializará em ${front}`);

    } else {
        alert(`Você se desenvolverá para se tornar Fullstack`);
    }

    
} else if (field == 2) {
    let back =  prompt('Escolha \n 1-C# \n 2- java');

    if (back == 1) {
        back = 'C#';
    } else {
        back = 'java';
    }
    
    let perfect2 = prompt(`Digite : \n1 - seguir se especializando em ${back} ou \n2 - seguir se desenvolvendo para se tornar Fullstack.`);
    
    
    if (perfect2 == 1) {
        alert(`Você se especializará em ${back}`);

    } else {
        alert(`Você se desenvolverá para se tornar Fullstack`);
    }
    
} else {
    alert('Digite um valor válido');
}

let technology = prompt ( 'digite as tecnologias que voce quer aprender')

let confirmation = prompt ( 'digite 1 para continuar digitando ou 2 para cancelar')

while (confirmation == 1) {
    technology = technology + ' ' + prompt ( 'digite as tecnologias que voce quer aprender')

    


    confirmation = prompt ( 'Tem mais alguma tecnologia que você gostaria de aprender ? \n digite 1 para continuar digitando ou 2 para cancelar')
} 
var array = technology.split(' ');

console.log(array);



alert (`Você irá aprender \n ${array} `);


