const risultatoSfida = document.getElementById('risultato');
const button = document.getElementById('button')
const userPoint = document.getElementById('userpoint');
const pcPoint = document.getElementById('pcpoint');



button.addEventListener('click', function() {
    const user = Math.floor(Math.random() * 6) + 1;

    const computer = Math.floor(Math.random() * 6) + 1;

    let risultato ='';

    if (user == computer) {
        risultato ='PAREGGIO';
    }
    if (user > computer) {
        risultato ='HAI VINTO';
    }
    if (user < computer) {
        risultato ='HAI PERSO';
    } 

    // let risultato = 'PAREGGIO'
    
    // risultato = (user > computer) ? 'HAI VINTO' : 'HAI PERSO';

    console.log(risultato);

    risultatoSfida.innerHTML = risultato;
    userPoint.innerHTML = user;
    pcPoint.innerHTML = computer;
});
