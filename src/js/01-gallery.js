// Add imports above this line
import { galleryItems } from './gallery-items';
import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

// Change code below this line

console.log(galleryItems);
console.log(SimpleLightbox);



const list = document.querySelector(".gallery");
const imagesMarkup = createImageMarkup(galleryItems);
list.insertAdjacentHTML("beforeend", imagesMarkup);

function createImageMarkup(images) {
  return images.map(({ description, original, preview }) => {
    return `<div class="gallery__item">
    <a class="gallery__link" href="${original}">
    <img class="gallery__image" src="${preview}" data-source="${original}" alt="${description}">
    </a>
    </div>`;
  })
  .join('');
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
	
});

gallery.on('error.simplelightbox', function (e) {
	console.log(e); 
});



