let id = location.search.split("=")[1];

async function productdetails() {
    try {
        let response = await fetch(`https://dummyjson.com/products/${id}`);
        let data = await response.json();
        fullProductDetailsDisplay(data);
    } catch (error) {
        console.error("Error fetching product details:", error);
    }
}

function fullProductDetailsDisplay(data) {
    const render = document.getElementById("product-details");
    let htmlContent = "";

    let img = data.thumbnail;
    htmlContent += `
    <div class="product" data-id="${data.id}">
    <div class="container">
      <div class="img-container">
        <img class="product-image" src="${img}" alt="${data.title}">
      </div>
      <div class="container-details">
        <h2 class="title">${data.title}</h2>
        <p class="price">Price £${parseFloat(data.price).toFixed(2)}</p>
        <p class="discountPercentage">Discount ${data.discountPercentage}%</p>
        <p class="description">${data.description}</p>
        <div class="btns">
          <button class="btn" id="remove-btn">-</button>
          <span class="count">0</span>
          <button class="btn" id="add-btn">+</button>
        </div>
      </div>
    </div>
  </div>
  
    `;

    render.innerHTML = htmlContent;
}

productdetails();
