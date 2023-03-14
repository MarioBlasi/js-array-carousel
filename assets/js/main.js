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

// creo un array di immagini images, che contiene i percorsi delle immagini che mostriamo nello slider.
const images = [
  "./assets/img/01.webp",
  "./assets/img/02.webp",
  "./assets/img/03.webp",
  "./assets/img/04.webp",
  "./assets/img/05.webp",
];
//selezioniamo gli elementi HTML dall'albero del documento usando document.querySelector()
// selezionati gli elementi HTML corrispondenti alla classe .slider, all'elemento HTML con classe .slide-img,
//ai bottoni di navigazione con classe .prev-btn e .next-btn e alle miniature con classe .thumbnails.
const slider = document.querySelector(".slider");
const slideImage = slider.querySelector(".slide-img");
const prevBtn = slider.querySelector(".prev-btn");
const nextBtn = slider.querySelector(".next-btn");
const thumbnails = slider.querySelector(".thumbnails");

//dichiariamo una variabile activeSlideIndex dove il valore é impostato su zero
//perché corrisponde alla prima imm dell'array
let activeSlideIndex = 0;

// creiamo un ciclo for per creare le miniature delle immagini nello slider. Per ogni immagine nell'array images,
//viene creata una nuova immagine HTML usando document.createElement()
// che verrá poi aggiunta alla lista delle miniature e configurata con il percorso dell'immagine
for (let i = 0; i < images.length; i++) {
  const thumbnailImage = document.createElement("img");
  thumbnailImage.classList.add("thumbnail");
  thumbnailImage.src = images[i];
  // Se l'indice dell'immagine corrente è uguale all'indice dell'immagine attiva,
  // viene aggiunta alla classe .active
  if (i === activeSlideIndex) {
    thumbnailImage.classList.add("active");
  }
  //aggiungiamo un listener per l'evento di click, in modo che quando l'utente fa clic sulla miniature,
  // viene chiamata la funzione setActiveSlide() per impostare l'immagine attiva.
  thumbnailImage.addEventListener("click", () => {
    setActiveSlide(i);
  });
  thumbnails.appendChild(thumbnailImage);
}

//viene impostata l'immagine attiva iniziale
slideImage.src = images[activeSlideIndex];

// set event listeners for prev and next buttons
//Vengono aggiunti listener per gli eventi click sui bottoni di navigazione "precedente" e "successivo".
//Quando viene cliccato il pulsante "precedente" e poi il "successivo"
//viene chiamata la funzione setActiveSlide() con l'indice dell'immagine precedente e successiva.
prevBtn.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex - 1);
});

nextBtn.addEventListener("click", () => {
  setActiveSlide(activeSlideIndex + 1);
});

//  la funzione setActiveSlide() imposta l'immagine attiva e le miniature
// in base all'indice specificato.
function setActiveSlide(index) {
  const thumbnailsList = thumbnails.querySelectorAll(".thumbnail");
  //La funzione rimuove la classe .active dalla miniature dell'immagine attiva
  thumbnailsList[activeSlideIndex].classList.remove("active");
  //aggiunge la classe .active alla miniature dell'immagine specificata
  //impostandola come immagine principale nello slider
  thumbnailsList[index].classList.add("active");
  //aggiornata la variabile activeSlideIndex con l'indice dell'immagine appena impostata come attiva.
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
