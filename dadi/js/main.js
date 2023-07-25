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
        risultatoSfida.classList.remove('text-danger');
        risultatoSfida.classList.remove('text-success');
    }
    if (user > computer) {
        risultato ='HAI VINTO';
        risultatoSfida.classList.add('text-success');
        risultatoSfida.classList.remove('text-danger');
    }
    if (user < computer) {
        risultato ='HAI PERSO';
        risultatoSfida.classList.add('text-danger');
        risultatoSfida.classList.remove('text-success');
    } 

    console.log(risultato);

    risultatoSfida.innerHTML = risultato;
    userPoint.innerHTML = user;
    pcPoint.innerHTML = computer;
});
