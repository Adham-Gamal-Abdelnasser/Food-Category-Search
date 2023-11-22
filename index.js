let allReciepes = [];
let searchInput = document.getElementById("searchInput");
let searchBtn = document.getElementById("searchBtn");
//! let availableSearchQueries = ["carrot","corn","onion","potato","tomato","watermelon","salad","pizza","pasta","popcorn"]
function getApi(q) {
  let xhr = new XMLHttpRequest();
  xhr.open(
    "GET",
    `https://forkify-api.herokuapp.com/api/v2/recipes?search=${q}`
  );
  xhr.send();
  xhr.addEventListener("readystatechange", function () {
    if (xhr.readyState === 4) {
      allReciepes = JSON.parse(xhr.response).data.recipes;
      display();
    }
  });
}
getApi("pizza");
function display() {
  let box = ``;
  for (let i = 0; i < allReciepes.length; i++) {
    box += `
        <div class="col-md-4 my-3">
        <div class="reciepe">
            <img src="${allReciepes[i].image_url}" alt="..." class="w-100" height="250px" />
            <h3>${allReciepes[i].title}</h3>
            <p>${allReciepes[i].publisher}</p>
        </div>
    </div>
        `;
  }
  document.getElementById("reciepesRow").innerHTML = box;
}
searchBtn.addEventListener("click", function () {
  getApi(searchInput.value);
});
