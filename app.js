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
  console.log(data.products)

  display(data.products);
}

function display(data) {
  const render = document.getElementById("render-product");
  let htmlContent = "";

  data.forEach((item) => {
    let img = item.thumbnail;
    htmlContent += `
      <div class="product" data-id="${item.id}">
        <h2 class="title">${item.title}</h2>
        <div class="img-container">
          <img class="product-image" src="${img}" alt="${item.title}">
        </div>
        <p class="price">Price £ ${item.price.toFixed(2)}</p>
        <p class="discountPercentage">Discount ${item.discountPercentage}%</p>
      </div>
    `;
  });

  render.innerHTML = htmlContent;

  render.addEventListener("click", (event) => {
    const productDiv = event.target.closest('.product'); 
    if (productDiv) {
      const productId = productDiv.getAttribute('data-id');
      window.location.href = `product.html?id=${productId}`;
    }
  });
}

fetchData();


// // this is contact us form validation javascript code
// let firstName = document.querySelector(".Fname").value;
// let lastName = document.querySelector(".Lname").value;
// let email = document.querySelector(".email").value;
// let message = document.querySelector(".text-area").value;
// let contactForm = document.getElementById("contactForm")

//   .contactForm.addEventListener("submit", (e) => {
//     e.preventDefault();
//   });
