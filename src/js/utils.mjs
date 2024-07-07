// wrapper for querySelector...returns matching element
export function qs(selector, parent = document) {
  return parent.querySelector(selector);
}
// or a more concise version if you are into that sort of thing:
// export const qs = (selector, parent = document) => parent.querySelector(selector);

// retrieve data from localstorage
export function getLocalStorage(key) {
  return JSON.parse(localStorage.getItem(key));
}
// save data to local storage
export function setLocalStorage(key, data) {
  localStorage.setItem(key, JSON.stringify(data));
}
// set a listener for both touchend and click
export function setClick(selector, callback) {
  qs(selector).addEventListener("touchend", (event) => {
    event.preventDefault();
    callback();
  });
  qs(selector).addEventListener("click", callback);
}

export function getParam(param) {
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const product = urlParams.get(param);
  return product;
}

async function renderWithTemplate(
  templateFn,
  parentElement,
  data,
  callback,
  position = "afterbegin",
  clear = true
  ) {
  if (clear) {
    parentElement.innerHTML = "";
  }
  const htmlString = await templateFn();

  parentElement.insertAdjacentHTML(position, htmlString);


    


}

function loadTemplate(path){
  return async function (){
    const response = await fetch(path);
    if (response.ok) {
      const html = await response.text();
      return html;
    }
  }
}

export async function loadHeaderFooter(){
  const headerData = await loadTemplate('../public/partials/header.html');
  const footerData = await loadTemplate('../public/partials/footer.html');

  const headerElem = document.querySelector('#dynamic-header');
  const footerElem = document.querySelector('#dynamic-footer');

  renderWithTemplate(headerData, headerElem);
  renderWithTemplate(footerData, footerElem);

}

