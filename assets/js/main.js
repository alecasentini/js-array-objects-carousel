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