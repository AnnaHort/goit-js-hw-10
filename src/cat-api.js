export const selectEl = document.querySelector('.breed-select');
const catInfoContainer = document.querySelector('.cat-info');
const loaderEl = document.querySelector('.loader');
const errorEl = document.querySelector('.error');
const API_KEY = 'live_67TlFlpRVkyxfyLzAYP00RgfrcB4U1jpjIGMVH5SZ1d1T8oBwh7IykQkX6nvZpvJ';

export const BASE_URL = 'https://api.thecatapi.com/v1';

const showLoader = () => {
  loaderEl.style.display = 'block';
};

const hideLoader = () => {
  loaderEl.style.display = 'none';
};

const showBreedSelect = () => {
  selectEl.style.display = 'block';
};

const hideBreedSelect = () => {
  selectEl.style.display = 'none';
};

const showCatInfo = () => {
  catInfoContainer.style.display = 'block';
};

const hideCatInfo = () => {
  catInfoContainer.style.display = 'none';
};

const showError = () => {
  errorEl.style.display = 'block';
};

const hideError = () => {
  errorEl.style.display = 'none';
};

export const fetchBreeds = () => {
  showLoader();
  hideBreedSelect();
  hideCatInfo();
  hideError();

  fetch(`${BASE_URL}/breeds`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      const catInfo = data
        .map(({ id, name }) => `<option value="${id}">${name}</option>`)
        .join(" ");
      selectEl.insertAdjacentHTML("beforeend", catInfo);
    })
    .catch((error) => {
      console.log('Failure', error);
      showError();
    })
    .finally(() => {
      hideLoader();
      showBreedSelect();
    });
};

export const fetchCatByBreed = (breedId) => {
  showLoader();
  hideCatInfo();
  hideError();

  fetch(`${BASE_URL}/images/search?breed_ids=${breedId}&api_key=${API_KEY}`)
    .then((res) => {
      if (!res.ok) {
        throw new Error(res.status);
      }
      return res.json();
    })
    .then((data) => {
      if (data.length > 0) {
        const catData = data[0];
        const catImage = `<img src="${catData.url}" alt="Cat Image" width = 500>`;
        const catInfo = `
          <h2>${catData.breeds[0].name}</h2>
          <p>Description: ${catData.breeds[0].description}</p>
          <p>Temperament: ${catData.breeds[0].temperament}</p>
        `;

        catInfoContainer.innerHTML = catImage + catInfo;
        showCatInfo();
      } else {
        console.log('No cat data found.');
      }
    })
    .catch((error) => {
      console.log('Failure', error);
      showError();
    })
    .finally(() => {
      hideLoader();
    });
};

  
  
  
  
