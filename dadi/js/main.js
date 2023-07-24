const risultatoSfida = document.getElementById('risultato');
const button = document.getElementById('button')


button.addEventListener('click', function() {
    const user = Math.floor(Math.random() * 6) + 1;

const computer = Math.floor(Math.random() * 6) + 1;

const risultato = (user > computer) ? 'HAI VINTO' : 'HAI PERSO';

console.log(risultato);

risultatoSfida.innerHTML = risultato;
});
