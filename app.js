window.addEventListener("load", () => {
  const toggle = document.getElementById("toggle");
  const navItems = document.getElementById("nav-items");

  toggle.addEventListener("click", () => {
    navItems.classList.toggle("active");
  });
});

async function fetchData() {
  let response = await fetch("https://dummyjson.com/products");
  let data = await response.json();

  display(data.products);
}
function display(data) {
  const render = document.getElementById("render-product");
  let htmlContent = "";

  data.forEach((item) => {
    let img = item.thumbnail;
    htmlContent += `
            <div class="product">
                <h2 class="title">${item.title}</h2>
                <div class="img-container">
                <img class="product-image" src="${img}" alt="${item.title}">
                </div>
               
               
                <p class="price">Price   $${item.price.toFixed(
                  2
                )}</p>
                <p class="discountPercentage">Discount ${
                  item.discountPercentage
                }%</p>
             
            </div>
        `;
  });

  render.innerHTML = htmlContent;
}

fetchData();
