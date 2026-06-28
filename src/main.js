 // Імпорти
import { clearGallery, hideLoader, renderGallery, showLoader } from "./js/render-functions";
import { getImagesByQuery } from "./js/pixabay-api";

import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

// QuerySelectorи
const searchForm = document.querySelector(".form");

//Обробники подій
searchForm.addEventListener("submit", handleSearch);

function handleSearch(e) {
    e.preventDefault();

const borys = new FormData(searchForm);
const query = borys.get("search-text").trim();

if (!query) {
    iziToast.error({
        message: 'Please enter a search query.',
        position: 'topRight',
        color: 'red'
    });
    return;
}



clearGallery();
showLoader();

getImagesByQuery(query)
.then(images => {
    if(images.length === 0){
        iziToast.error({
    message: 'Sorry, there are no images matching your search query. Please try again!',
    position: 'topRight',
    color: 'red'
});
return;
  }
renderGallery(images);
}
)
.catch(err => {
    console.log(err);
    iziToast.error({
        message: 'Something went wrong. Please try again later.',
        position: 'topRight',
        color: 'red'
    });
})
.finally(() => {
    hideLoader();
});
}

