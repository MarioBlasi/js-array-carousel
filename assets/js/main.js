// Dato un array contenente una lista di cinque immagini,
// creare un carosello come nello screenshot allegato.

// MILESTONE 1
// Per prima cosa, creiamo il markup statico:
// costruiamo il container e inseriamo un'immagine grande al centro: avremo così la struttura base
// e gli stili pronti per poterci poi concentrare solamente sull'aspetto logico.

// MILESTONE 2
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente
// servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.

// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1,
// ma costruito dinamicamente attraverso JavaScript.

// MILESTONE 3
// Al click dell'utente sulle frecce, il programma cambierà l’immagine attiva,
// che quindi verrà visualizzata al posto della precedente.

// BONUS 1:
// Aggiungere il ciclo infinito del carosello. Ovvero se è attiva la prima immagine e
// l'utente clicca la freccia per andare all’immagine precedente, dovrà comparire l’ultima immagine dell’array e viceversa.

// BONUS 2:
// Aggiungere la visualizzazione di tutte le thumbnails sulla destra dell’immagine grande attiva,
// come nello screenshot proposto. Tutte le miniature avranno un layer di opacità scura, tranne quella corrispondente all’immagine attiva,
// che invece avrà un bordo colorato.

// Al click delle frecce, oltre al cambio di immagine attiva, gestire il cambio di miniatura attiva.

// tootls
// array
// const/ let
// querySelector
// eventListener
// increment/descrement

// selezioniamo l'elemento del DOM che conterrà le immagini
const carouselContainer = document.querySelector(".carousel-container");

// definiamo l'array di immagini
const images = [
  "img/01.webp",
  "img/02.webp",
  "img/03.webp",
  "img/04.webp",
  "img/05.webp",
];

// selezioniamo l'elemento del DOM che conterrà le immagini
const imagesElement = document.querySelector(".images");

// aggiungiamo le immagini dinamicamente utilizzando un ciclo for e un template literal
for (let i = 0; i < images.length; i++) {
  const imgElement = document.createElement("img");
  imgElement.src = images[i];
  imgElement.classList.add("slide");
  if (i === 0) {
    imgElement.classList.add("active");
  }
  imagesElement.appendChild(imgElement);
}

// MILESTONE 3
// Gestiamo il cambio di immagine attiva al click dell'utente sulle frecce tramite il
// codice JavaScript:

let activeImageIndex = 0;

// selezioniamo il bottone next
const nextEl = document.querySelector(".next");
nextEl.addEventListener("click", function () {
  // selezioniamo tutti gli elementi immagine
  const slideImageElements = document.querySelectorAll(".slide");
  // rimuoviamo la classe active dall'immagine corrente
  slideImageElements[activeImageIndex].classList.remove("active");
  // incrementiamo l'indice dell'immagine attiva
  activeImageIndex++;
  // se l'indice supera la lunghezza dell'array delle immagini, lo riportiamo a zero per creare un ciclo infinito
  if (activeImageIndex >= slideImageElements.length) {
    activeImageIndex = 0;
  }
  // aggiungiamo la classe active all'immagine successiva
  slideImageElements[activeImageIndex].classList.add("active");
});

// selezioniamo il bottone prev
const prevEl = document.querySelector(".prev");
prevEl.addEventListener("click", function () {
  // selezioniamo tutti gli elementi immagine
  const slideImageElements = document.querySelectorAll(".slide");
  // rimuoviamo la classe active dall'immagine corrente
  slideImageElements[activeImageIndex].classList.remove("active");
  // incrementiamo l'indice dell'immagine attiva
  activeImageIndex--;
  // se l'indice supera la lunghezza dell'array delle immagini, lo riportiamo a zero per creare un ciclo infinito
  if (activeImageIndex >= slideImageElements.length) {
    activeImageIndex = 0;
  }
  // aggiungiamo la classe active all'immagine successiva
  slideImageElements[activeImageIndex].classList.add("active");
});
