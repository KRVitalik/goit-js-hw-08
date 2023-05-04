// Add imports above this line
import { galleryItems } from './gallery-items';
// Change code below this line
import "simplelightbox/dist/simple-lightbox.min.css"
import SimpleLightbox from "simplelightbox"

const allElementOfGallery = document.querySelector('.gallery')

const isCreateAllCatalog = galleryItems.map((item) => {
    const listElement = document.createElement('li')
    listElement.classList.add('gallery__item')
    
    const refElement = document.createElement('a')
    refElement.classList.add('gallery__link')
    refElement.setAttribute('href', item.original)
    
    const imgElement = document.createElement('img')
    imgElement.classList.add('gallery__image')
    imgElement.setAttribute('src', `${item.preview}`)
    imgElement.setAttribute('data-source', `${item.original}`)
    imgElement.setAttribute('alt', `${item.description}`)
    
    listElement.appendChild(refElement)
    refElement.appendChild(imgElement) 

return listElement;
})

allElementOfGallery.append(...isCreateAllCatalog);
allElementOfGallery.addEventListener('click', (onItemClick))

function onItemClick(e) {
    e.preventDefault();
    
    if (e.target.classList.value !== 'gallery__image') {
        return
    }
}

let gallery = new SimpleLightbox('.gallery a');
gallery.on('show.simplelightbox', function () {
    gallery.options.captionDelay = 250
    gallery.options.captionsData = 'alt'
});
