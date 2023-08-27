const app = document.getElementById("app");
const btnFrutas = document.getElementById("btn-frutas");
const btnEmojis = document.getElementById("btn-emojis");
let templateHTML = "";
const btnReset = document.getElementById("btn-reset");
btnReset.classList.add("hide");
let frutas = [
  "🍇",
  "🍐",
  "🍎",
  "🍌",
  "🍍",
  "🍌",
  "🍉",
  "🍎",
  "🍍",
  "🍉",
  "🍇",
  "🍐",
];

let emojis = [
  "😭",
  "😂",
  "😎",
  "😡",
  "🥰",
  "🤑",
  "😎",
  "😭",
  "😂",
  "😡",
  "🥰",
  "🤑",
];

let lista = [];

btnFrutas.addEventListener("click", () => {
  templateHTML = "";
  lista = [...frutas];
  pintarJuego();
});

btnEmojis.addEventListener("click", () => {
  templateHTML = "";
  lista = [...emojis];
  pintarJuego();
});

function pintarJuego() {
  let ArrayCard = [];
  let ArrayElement = [];
  btnReset.classList.remove("hide");
  lista.forEach(
    (element) =>
      (templateHTML += `
          <div class="card">
              <div class="sides front"></div>
              <div class="sides back">${element}</div>
          </div>
          `)
  );

  app.innerHTML = templateHTML;

  app.addEventListener("click", (e) => {
    let value = e.target.classList.contains("front");
    if (value) {
      let ElementCard = e.target.parentElement;
      ElementCard.classList.add("rotate");
      ArrayCard = [...ArrayCard, ElementCard];
      ArrayElement = [...ArrayElement, ElementCard.children[1].textContent];
      VerificationCards();
    }
  });

  const VerificationCards = () => {
    if (ArrayCard.length > 1) {
      if (ArrayElement[0] === ArrayElement[1]) {
        ArrayCard = "";
        ArrayElement = "";
      } else {
        setTimeout(() => {
          ArrayCard[0].classList.remove("rotate");
          ArrayCard[1].classList.remove("rotate");
          ArrayCard = "";
          ArrayElement = "";
        }, 800);
      }
    }
  };

  const random = () => {
    for (let index = app.children.length; index >= 0; index--) {
      app.appendChild(app.children[(Math.random() * index) | 0]);
    }
  };

  const cards = document.querySelectorAll(".card");
  btnReset.addEventListener("click", () => {
    random();

    for (let index of cards) {
      index.classList.remove("rotate");
    }
  });
}
