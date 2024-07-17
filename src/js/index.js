// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const breedsSelect = document.getElementById('breeds');

const printAllBreeds = breeds => {
  const fragment = document.createDocumentFragment();
  breeds.forEach(breed => {
    const newOption = document.createElement('option');
    newOption.textContent = breed;
    fragment.append(newOption);
  });

  breedsSelect.append(fragment);
};

const getAllBreeds = async () => {
  try {
    const response = await fetch('https://dog.ceo/api/breeds/list/all');
    const data = await response.json();
    const allBreeds = Object.keys(data.message);
    printAllBreeds(allBreeds);
  } catch (error) {
    console.log(error);
  }
};

getAllBreeds();
