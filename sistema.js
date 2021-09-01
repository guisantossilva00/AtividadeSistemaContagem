let numeroDeAlunos = 26;

for (let contador = 0; contador <= numeroDeAlunos; contador++) {
    
    if (contador == 0) {
        console.log("O número é ZERO");
        
    } else if (contador % 2 == 0) {
        console.log(`O número ${contador} é PAR`);

    } else {
        console.log(`O número ${contador} é ÍMPAR`);
    }
}