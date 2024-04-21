async function searchImages() {
    term = searchBox.value;
    const url = `https://api.unsplash.com/search/photos?page=${page}&query=${term}&client_id=${AccessKey}`;
    console.log(url);
    const response = await fetch(url);
    const data = await response.json();
    const results = data.results;
    if (page == 1) {
        resultsContainer.innerHTML = "";
    }
    results.map((result) => {
        const newResult = document.createElement("div");
        newResult.classList.add("result");
        const image = document.createElement("img");
        image.src = result.urls.small;
        image.alt = result.alt_description;
        const imageLink = document.createElement("a");
        imageLink.href = result.links.html;
        imageLink.target = "_blank";
        imageLink.textContent = result.alt_description;
        newResult.appendChild(image);
        newResult.appendChild(imageLink);
        resultsContainer.appendChild(newResult);
    })
    page++;
    if (page > 1) {
        showMoreButton.style.display = "block";
    }
}



const AccessKey = "sf0UdSaIE7lPR2xyZSk8RJYFRgmpFymX6TB904N3ADs";
const formContainer = document.querySelector("form");
const searchBox = document.getElementById("search-box");
const resultsContainer = document.querySelector(".results-container");
const showMoreButton = document.getElementById("show-more-button");
let term = "";
let page = 1;
formContainer.addEventListener("submit", (event) => {
    event.preventDefault();
    page = 1;
    searchImages();
})

showMoreButton.addEventListener("click", (event) => {
    searchImages();
})
