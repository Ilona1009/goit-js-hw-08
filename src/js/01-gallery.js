import { galleryItems } from './gallery-items.js';
import "simplelightbox/dist/simple-lightbox.min.css";
import SimpleLightbox from "simplelightbox";

// Change code below this line

const divGallery = document.querySelector('.gallery');


const creatуGallery = galleryItems.map(({preview, original, description}) => {
        return `
        <div class="gallery__item">
            <a class="gallery__link" href="${original}">
            <img
                class="gallery__image"
                src="${preview}"
                data-source="${original}"
                alt="${description}"
            />
            </a>
        </div>
        `;
    });



const stringGallery = creatуGallery.join('');
divGallery.innerHTML = stringGallery;

divGallery.addEventListener('click', onClickDivGallery);

function onClickDivGallery(event){
event.preventDefault();
if (!event.target.classList.contains('gallery__image')){
    return;
}

const instance = new SimpleLightbox('.gallery a', { captionsData: 'alt', captionDelay: 250 });


divGallery.addEventListener('keydown', onEscPressModalClose);
    
    function onEscPressModalClose(event) {
        if (event.code === "Escape") {
        instance.close();
        divGallery.removeEventListener('keydown', onEscPressModalClose);
        }
    };
};
