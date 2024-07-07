import { setLocalStorage } from "./utils.mjs";
import { findProductById } from "./productData.mjs";

export default async function productDetails(productId) {
  // use findProductById to get the details for the current product. findProductById will return a promise! use await or .then() to process it
  product = await findProductById(productId);
  // once we have the product details we can render out the HTML
  renderProductDetails();
  // add a listener to Add to Cart button
  const button = document.querySelector('#addToCart');
  button.addEventListener('click', addProductToCart);

}

let product = {};

export function addProductToCart(product) {
  const productString = JSON.stringify(product);  
  setLocalStorage("so-cart", productString);
  }


function renderProductDetails(){

  const name = document.querySelector('#productName');
  name.innerHTML = product.Name;

  const price = document.querySelector('#productFinalPrice');
  price.innerHTML = product.FinalPrice;

  const image = document.querySelector('#productImage');
  image.src = product.Image;

  const color = document.querySelector('#productColorName');
  color.innerText = product.Colors[0].ColorName;

  const description = document.querySelector('#productDescriptionHtmlSimple');
  description.innerHTML = product.DescriptionHtmlSimple;





}
