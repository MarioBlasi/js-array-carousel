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

const images = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];

const slider = document.querySelector(".slider");
const slideImage = slider.querySelector(".slide-img");
const prevBtn = slider.querySelector(".prev-btn");
const nextBtn = slider.querySelector(".next-btn");
const thumbnails = slider.querySelector(".thumbnails");

let activeSlideIndex = 0;

// create thumbnail images
for (let i = 0; i < images.length; i++) {
  const thumbnailImage = document.createElement("img");
  thumbnailImage.classList.add("thumbnail");
  thumbnailImage.src = images[i];
  if (i === activeSlideIndex) {
    thumbnailImage.classList.add("active");
  }
  thumbnailImage.addEventListener("click", () => {
    setActiveSlide(i);
  });
  thumbnails.appendChild(thumbnailImage);
}

// set initial slide image
slideImage.src = images[activeSlideIndex];

// set event listeners for prev and next buttons
prevBtn.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex - 1);
});

nextBtn.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex + 1);
});

// set active slide and thumbnail
function setActiveSlide(index) {
  const thumbnailsList = thumbnails.querySelectorAll(".thumbnail");
  thumbnailsList[activeSlideIndex].classList.remove("active");
  thumbnailsList[index].classList.add("active");
  slideImage.src = images[index];
  activeSlideIndex = index;

  // handle infinite carousel
  if (activeSlideIndex === images.length - 1) {
    nextBtn.setAttribute("disabled", true);
    prevBtn.removeAttribute("disabled");
  } else if (activeSlideIndex === 0) {
    prevBtn.setAttribute("disabled", true);
    nextBtn.removeAttribute("disabled");
  } else {
    nextBtn.removeAttribute("disabled");
    prevBtn.removeAttribute("disabled");
  }
}

// disable previous button on first slide
prevBtn.setAttribute("disabled", true);
