const countEl = document.getElementById('count-el');
const homeCountEl = document.getElementById('count-elis');

let count = 0;
let homeCount = 0;

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

document.getElementById('button-1').addEventListener('click', () => {
  incrementar(1, false);
});

document.getElementById('button-2').addEventListener('click', () => {
  incrementar(2, false);
});

document.getElementById('button-3').addEventListener('click', () => {
  incrementar(3, false);
});

document.getElementById('home-button-1').addEventListener('click', () => {
  incrementar(1, true);
});

document.getElementById('home-button-2').addEventListener('click', () => {
  incrementar(2, true);
});

document.getElementById('home-button-3').addEventListener('click', () => {
  incrementar(3, true);
});
