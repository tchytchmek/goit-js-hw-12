import {
  clearGallery,
  hideLoader,
  hideLoadMoreButton,
  renderGallery,
  renderNewGallery,
  showLoader,
  showLoadMoreButton,
} from './js/render-functions';
import { getImagesByQuery } from './js/pixabay-api';

import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const PER_PAGE = 15;

const searchForm = document.querySelector('.form');
const loadBtn = document.querySelector('.load-more');

let page = 1;
let query = '';
let totalHits = 0;

searchForm.addEventListener('submit', handleSearch);
loadBtn.addEventListener('click', handleClick);

async function handleSearch(e) {
  e.preventDefault();

  query = new FormData(searchForm).get('search-text').trim();
  page = 1;
  totalHits = 0;

  if (!query) {
    iziToast.error({
      message: 'Please enter a search query.',
      position: 'topRight',
      color: 'red',
    });
    return;
  }

  clearGallery();
  hideLoadMoreButton();
  showLoader();

  try {
    const data = await getImagesByQuery(query, page);
    totalHits = data.totalHits;

    if (data.hits.length === 0) {
      iziToast.error({
        message:
          'Sorry, there are no images matching your search query. Please try again!',
        position: 'topRight',
        color: 'red',
      });
      return;
    }

    renderGallery(data.hits);
    toggleLoadMoreButton();
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
  }
}

async function handleClick() {
  page += 1;
  hideLoadMoreButton();
  showLoader();

  try {
    const { hits } = await getImagesByQuery(query, page);

    renderNewGallery(hits);
    scrollAfterLoad();
    toggleLoadMoreButton();
  } catch (err) {
    console.log(err);
    iziToast.error({
      message: 'Something went wrong. Please try again later.',
      position: 'topRight',
      color: 'red',
    });
  } finally {
    hideLoader();
  }
}

function toggleLoadMoreButton() {
  const shownImages = page * PER_PAGE;

  if (shownImages >= totalHits) {
    hideLoadMoreButton();
    iziToast.info({
      message: "We're sorry, but you've reached the end of search results.",
      position: 'topRight',
    });
    return;
  }

  showLoadMoreButton();
}

function scrollAfterLoad() {
  const galleryItem = document.querySelector('.gallery-item');

  if (!galleryItem) {
    return;
  }

  const cardHeight = galleryItem.getBoundingClientRect().height;

  window.scrollBy({
    top: cardHeight * 2,
    behavior: 'smooth',
  });
}
