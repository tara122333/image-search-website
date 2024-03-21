const accessToken = "QMmb4OjhUyXY-wcWNoMtg4jxFMsd3prqY01EDUXYc48";

const inputSeach = document.getElementById("image-search-input");
const searchForm = document.getElementById("search-form");
const searchBtn = document.getElementById("search-btn");
const imageResult = document.getElementById("image-result");

let page = 1;
let isLoading = false;

async function fetchImages() {
  isLoading = true;
  addLoadingComponent();
  const inputSearchString = inputSeach.value;
  const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputSearchString}&client_id=${accessToken}`;
  const response = await fetch(url);
  const data = await response.json();
  const results = data.results;
  console.log(results);

  results.map((res) => {
    const image = document.createElement("img");
    image.src = res.urls.small;
    const imageLinks = document.createElement("a");
    imageLinks.download = res.links.download;
    imageLinks.target = "_blank";
    // imageLinks.href = res.links.download;
    imageResult.appendChild(imageLinks);
    imageLinks.appendChild(image);
  });
  isLoading = false;
  addLoadingComponent();
}

function addLoadingComponent() {
  if (isLoading) {
    console.log(isLoading);
  } else {
    console.log(isLoading);
  }
}

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();
  fetchImages();
});
