let productList = document.getElementById("product-list");
let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-btn");
let categoryBtns = document.querySelectorAll(".category-btn");

function filterProduct() {
  let searchValue = searchInput.value.toLowerCase();
  let products = document.querySelectorAll(".product-item");
  let activeCategory = document.querySelector(".category-btn.active").dataset
    .category;

  products.forEach((item) => {
    let title = item.querySelector("h2").innerText.toLowerCase();
    let category = item.dataset.category;

    if (
      (title.includes(searchValue) || searchValue == "") &&
      (category === activeCategory || activeCategory === "all")
    ) {
      item.style.display = "block";
    } else {
      item.style.display = "none";
    }
  });
}

function setCategory(e) {
  categoryBtns.forEach((btn) => {
    btn.classList.remove("active");
  });
  e.target.classList.add("active");
  filterProduct();
}

searchButton.addEventListener("click", filterProduct);
searchInput.addEventListener("keyup", filterProduct);
categoryBtns.forEach((btn) => {
  btn.addEventListener("click", setCategory);
});
filterProduct();
