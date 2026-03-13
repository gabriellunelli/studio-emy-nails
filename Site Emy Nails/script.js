console.log("Site carregado com sucesso 🚀");

const menuToggle = document.getElementById("menuToggle");
const menu = document.querySelector(".menu");

menuToggle.addEventListener("click", () => {
    menu.classList.toggle("active");
    menuToggle.classList.toggle("active");
});

document.querySelectorAll(".menu a").forEach(link => {
    link.addEventListener("click", () => {
        menu.classList.remove("active");
    });
});

// BTN VER-MAIS
const btnMais = document.getElementById("verMais");
const btnMenos = document.getElementById("verMenos");
const fotos = document.querySelectorAll(".escondida");

let mostradas = 0;
const passo = 9;

btnMais.addEventListener("click", () => {

for (let i = mostradas; i < mostradas + passo; i++) {
  if (fotos[i]) {
    fotos[i].style.display = "block";
  }
}

mostradas += passo;

btnMenos.style.display = "inline-block";

if (mostradas >= fotos.length) {
      btnMais.style.display = "none";
}

});

btnMenos.addEventListener("click", () => {

for (let i = mostradas - 1; i >= mostradas - passo; i--) {
  if (fotos[i]) {
    fotos[i].style.display = "none";
  }
}

mostradas -= passo;

btnMais.style.display = "inline-block";

if (mostradas <= 0) {
  btnMenos.style.display = "none";
}

});