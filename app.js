class Product {
  constructor(title, price, disc, img) {
    this.img = img;
    this.title = title;
    this.price = price;
    this.disc = disc;
  }
}

let data = [];

fetch("https://fakestoreapi.com/products")
  .then((res) => res.json())
  .then((json) => {
    json.forEach((element) => {
      let nProduct = new Product(
        element.title,
        element.price,
        element.disc,
        element.img
      );
      data.push(nProduct);
    });
    renderProduct(data);
  });

function renderProduct() {
  data.map((element) => {
    let card = document.getElementById("container");
    let productCard = document.createElement("div");
    let image = document.createElement("img");
    image.src = `${element.img}`;
    let mainDiv = document.createElement("div");
    let hTitle = document.createElement("h3");
    hTitle.textContent = `Title: ${element.title}`;
    let ul = document.createElement("ul");
    let liDisc = document.createElement("li");
    liDisc.textContent = `Disc: ${element.disc}`;
    let liPrice = document.createElement("li");
    liPrice = `Price: ${element.price}`;
    productCard.appendChild(image);
    ul.appendChild(liDisc);
    ul.appendChild(liPrice);
    mainDiv.appendChild(hTitle);
    mainDiv.appendChild(ul);
    productCard.appendChild(mainDiv);
    card.appendChild(productCard);
  });
}



