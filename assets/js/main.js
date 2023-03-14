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

// passiamo sulle immagini e aggiungiamo un nuovo elemento alla DOM utilizzando for
for (let i = 0; i < images.length; i++) {
  const imgSrc = images[i];
  console.log(imgElement);
  //innerHTML
  imagesElement.innerHTML += imgElement;
}

//next button
const nextEl = document.querySelector(".next");
nextEl.addEventListener("click", function () {
  console.log("cliccato next");

  //select all slides
  const slideImageElements = document.querySelectorAll(
    ".slider > .images > img"
  );
  console.log(slideImageElements); // array [index]
  // select the current slide

  const currentSlide = slideImageElements[activeImage];
  console.log(currentSlide);

  currentSlide.classList.remove("active");

  activeImage++;

  console.log(activeImage);
  const nextImage = slideImagesElements[activeImage];

  console.log(nextImage);
  nextImage.classList.add("active");
});

//prev button
const prevEl = document.querySelector(".prev");
prevEl.addEventListener("click", function () {
  console.log("cliccato prev");

  //select all slides
  const slideImageElements = document.querySelectorAll(
    ".slider > .images > img"
  );
  console.log(slideImageElements); // array [index]
  // select the current slide

  const currentSlide = slideImageElements[activeImage];
  console.log(currentSlide);

  currentSlide.classList.remove("active");

  activeImage--;

  console.log(activeImage);
  const prevImage = slideImagesElements[activeImage];

  console.log(prevImage);
  prevImage.classList.add("active");
});
