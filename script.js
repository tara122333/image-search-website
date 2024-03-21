const accessToken = "QMmb4OjhUyXY-wcWNoMtg4jxFMsd3prqY01EDUXYc48";

const inputSeach = document.getElementById("image-search-input");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");

let page = 1;

async function fetchImages() {
  const inputSearchString = inputSeach.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputSearchString}&client_id=${accessToken}`;
  const response = await fetch(url);
  const data = await response.json();
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchImages();
});
