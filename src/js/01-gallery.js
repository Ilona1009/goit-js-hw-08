import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Change code below this line

const divGallery = document.querySelector('.gallery');

divGallery. innerHTML = creatуGallery(galleryItems)

divGallery.addEventListener('click', onClickDivGallery);



function creatуGallery (galleryItems){
  return galleryItems
  .map(({preview, original, description}) => {
    return `
<a class="gallery__item" href="${original}">
<img class="gallery__image" src="${preview}" alt="${description}" />
</a>
`;
}).join('');

}


function onClickDivGallery(event){
event.preventDefault();
}

var lightbox = new SimpleLightbox('.gallery a', { captionDelay:250, captionsData: "alt" });



