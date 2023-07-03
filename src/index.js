
// іменований імпорт
import {selectEl, BASE_URL, fetchBreeds, fetchCatByBreed} from './cat-api';
// Виклик функції fetchBreeds для отримання порід котів та їх відображення на сторінці
fetchBreeds();

// Обробник події при зміні вибраної породи
selectEl.addEventListener('change', (event) => {
  const selectedBreedId = event.target.value;

  // Виклик функції fetchCatByBreed для отримання даних про кота та їх відображення на сторінці
  fetchCatByBreed(selectedBreedId);
});


