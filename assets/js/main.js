const images = [
    {
        image: 'img/01.webp',
        title: 'Marvel\'s Spiderman Miles Morales',
        text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
    }, {
        image: 'img/02.webp',
        title: 'Ratchet & Clank: Rift Apart',
        text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
    }, {
        image: 'img/03.webp',
        title: 'Fortnite',
        text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
    }, {
        image: 'img/04.webp',
        title: 'Stray',
        text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
    }, {
        image: 'img/05.webp',
        title: "Marvel's Avengers",
        text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
    }
];

let items = document.querySelector(".items");
let thumbnails = document.querySelector(".thumbnails")

for (i = 0; i < images.length; i++){

    items.innerHTML += `
    <div class="item ${i === 0 ? 'active' : ''}">
        <img src="./assets/${images[i].image}" alt="${images[i].title}">
        <div class="description">
            <h4>${images[i].title}</h4>
            <p>${images[i].text}</p>
      </div>
    </div>
  `;


  thumbnails.innerHTML += `
  <div class="thumbnail">
    <img src="./assets/${images[i].image}" alt="${images[i].title}">
  </div>
`;
}

let active = 0
items.getElementsByClassName('item')[active].classList.add('active')
thumbnails.getElementsByClassName('thumbnail')[active].classList.add('active')

const prev = document.querySelector('.prev');

prev.addEventListener ('click', function(){
    if(active == 0){
        active = images.length - 1
    } else {
        active--;
    }

    document.querySelector('.item.active').classList.remove('active')
    items.getElementsByClassName('item')[active].classList.add('active')

    document.querySelector('.thumbnail.active').classList.remove('active')
    thumbnails.getElementsByClassName('thumbnail')[active].classList.add('active')
})

const next = document.querySelector('.next');

next.addEventListener ('click', function(){
    if(active == images.length - 1){
        active = 0
    } else {
        active++;
    }

    document.querySelector('.item.active').classList.remove('active')
    items.getElementsByClassName('item')[active].classList.add('active')

    document.querySelector('.thumbnail.active').classList.remove('active')
    thumbnails.getElementsByClassName('thumbnail')[active].classList.add('active')
})

function activateThumbnail(thumbnailIndex) {
    // Rimuovo la classe active dalla thumbnail e dalla relativa immagine attualmente attive
    document.querySelector('.thumbnail.active').classList.remove('active');
    document.querySelector('.item.active').classList.remove('active');

    // Aggiungo la classe active alla thumbnail e alla relativa immagine corrispondente
    const thumbnail = thumbnails.querySelectorAll('.thumbnail')[thumbnailIndex];
    const item = items.querySelectorAll('.item')[thumbnailIndex];
    thumbnail.classList.add('active');
    item.classList.add('active');
  }

  // Aggiungo un listener di evento a ogni thumbnail
thumbnails.querySelectorAll('.thumbnail').forEach((thumbnail, index) => {
    thumbnail.addEventListener('click', () => {
        activateThumbnail(index);
    });
 });

// funzione per far andare avanti il carosello
function clickNext() {
    const nextButton = document.querySelector('.next');
    nextButton.click();
}
// funzione per far andare indietro il carosello
function clickPrev() {
    const prevButton = document.querySelector('.prev');
    prevButton.click();
}

// Imposta l'intervallo
let intervalID = setInterval(clickNext, 3000);

// funzione per fermare l'intervallo per il pulsante "next"
function clearNextInterval() {
    clearInterval(intervalID);
}

// Selezione del pulsante pausa
const pauseButton = document.querySelector('.pause');

// Aggiunta listener all'evento di click sul pulsante "pause"
pauseButton.addEventListener('click', function() {
    clearInterval(intervalID);
    clearPrevInterval()
});

// Selezione del pulsante play
const playButton = document.querySelector('.play');

// Aggiunta listener all'evento di click sul pulsante di "play"
playButton.addEventListener('click', function(){
    intervalID = setInterval(clickNext, 3000);
})

// imposta l'intervallo per il pulsante "prev"
let intervalIDPrev = null;
function startPrevInterval() {
    intervalIDPrev = setInterval(clickPrev, 3000);
}

// funzione per fermare l'intervallo per il pulsante "prev"
function clearPrevInterval() {
    clearInterval(intervalIDPrev);
}

// Selezione del pulsante "rew"
const rewButton = document.querySelector('.rew');

// Aggiunta listener all'evento di click sul pulsante "rew"
rewButton.addEventListener('click', function() {
    clearNextInterval();
    startPrevInterval();
});