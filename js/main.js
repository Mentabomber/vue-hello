// Descrizione:
// Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
// Bonus:
// Aggiungere alla pagina un’immagine, presa anch’essa da un data.

const { createApp } = Vue

createApp({
    data(){
        return{
            message: 'Hello Vue!',
            img: 'img/logo.svg'
        }
    }

}).mount('#app')

let elSelector = document.getElementById('app');

console.log(elSelector);

elSelector.innerHTML += `<img v-bind:src="this.img" alt="ciao">`;