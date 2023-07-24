const ricercaMail = document.getElementById('ricerca_mail');

const listMail = ['marco@email.com','francesco@email.com','luca@email.com','lorenzo@email.com'];

// console.table(listMail);

const userMail = prompt('Per accedere inserisci la mail');

// console.log(userMail);
let mailControl ='Accesso negato';
let control = 0;

for (let i = 0; i < listMail.length; i++) {
    if (userMail === listMail[i]) {
        control = 1;        
    } 
}

if (control == 1) {
    mailControl = 'Accesso acconsentito'
}

console.log(mailControl);

ricercaMail.innerHTML = mailControl;