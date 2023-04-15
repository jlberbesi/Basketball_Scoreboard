const countEl = document.getElementById('count-el');
const homeCountEl = document.getElementById('count-elis');

let count = 0;
let homeCount = 0;

// eslint-disable-next-line no-unused-vars
function incrementar(cantidad, esHome) {
  if (cantidad >= 1 && cantidad <= 3) {
    if (esHome) {
      homeCount += cantidad;
      homeCountEl.innerText = homeCount;
    } else {
      count += cantidad;
      countEl.innerText = count;
    }
  }
}
