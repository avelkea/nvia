const openEls = document.querySelectorAll("[data-open]");
const closeEls = document.querySelectorAll("[data-close]");
const isVisible = "is-visible";

for (const el of openEls) {
  el.addEventListener("click", function() {
    const modalId = this.dataset.open;
    document.getElementById(modalId).classList.add(isVisible);
  });
}

for (const el of closeEls) {
  el.addEventListener("click", function() {
    this.parentElement.parentElement.parentElement.classList.remove(isVisible);
  });
}

document.addEventListener("click", e => {
  if (e.target == document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});

document.addEventListener("keyup", e => {
  // if we press the ESC
  if (e.key == "Escape" && document.querySelector(".modal.is-visible")) {
    document.querySelector(".modal.is-visible").classList.remove(isVisible);
  }
});
const yesButton = document.getElementById("yesButton");
const noButton = document.getElementById("noButton");
let noClicked = 0; // Contador de clics en el botón "No"

// Evento para abrir el modal3 cuando se presiona "Sí"
yesButton.addEventListener("click", function () {
    document.getElementById("modal3").style.display = "block";
});

// Evento para hacer más pequeño el botón "No" en cada clic
noButton.addEventListener("click", function () {
    noClicked++;
    if (noClicked < 3) {
        noButton.classList.add("shrink"); // Se hace más pequeño
    } else {
        noButton.style.display = "none"; // Desaparece después de 3 clics
    }
});