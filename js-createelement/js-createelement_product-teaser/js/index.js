console.clear();

const name = "Queen angelfish";
const description =
  "With their bright colors and deep, laterally compressed bodies, marine angelfishes are some of the more conspicuous residents of the aquarium. The queen angelfish grows to be 45 cm. With neon blue and yellow scales and iridescent purple and orange markings, surprisingly it is not conspicuous, and actually hides very well, and is very shy.";
const category1 = "Freshwater";
const category2 = "Large aquarium";
const category3 = "Plankton Diet";
const price = "149,99 €";
const imageSrc =
  "https://unsplash.com/photos/3VOTHTrE614/download?ixid=MnwxMjA3fDB8MXxhbGx8fHx8fHx8fHwxNjU5NTM3NTA2&force=true&w=640";

const newProduct = document.createElement("article");
newProduct.classList.add("product");
newProduct.innerHTML = `
      <section class="product__body">
        <div class="product__text-container">
          <h2 class="product__name">${name}</h2>
          <ul class="product__categories">
            <li class="product__category">${category1}</li>
            <li class="product__category">${category2}</li>
            <li class="product__category">${category3}</li>
          </ul>
          <p class="product__description">
            ${description}
          </p>
        </div>
        <div class="product__image-container">
          <img
            class="product__image"
            src=${imageSrc}
            alt=""
          />
        </div>
      </section>`;

const productFooter = document.createElement("footer");
productFooter.classList.add("product__footer");
const priceSpan = document.createElement("span");
priceSpan.classList.add("product__price");
priceSpan.textContent = `${price}`;
productFooter.append(priceSpan);
const buyButton = document.createElement("button");
buyButton.classList.add("product__buy-button");
buyButton.setAttribute("type", "button");
buyButton.setAttribute("name", "buyButton");
buyButton.textContent = "Buy";
buyButton.addEventListener("click", () => {
  console.log(`${name}`, `${price}`);
});
productFooter.append(buyButton);

newProduct.append(productFooter);
document.body.append(newProduct);
