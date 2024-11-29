//  <h3 id="counter-text">0</h3>
//    <div id="buttons" class="buttons">
//       <button data-type="decrement">-1</button>
//       <button data-type="reset" disabled>Reset</button>
//       <button data-type="increment">+1</button>
//    </div>

const counterTextElement = document.getElementById("counter-text");
const buttonsElement = document.getElementById("buttons");

const resetButtonElement = document.getElementById("reset-button");

let number = 0;

const changeButtonsNumber = (event) => {
  type = event.target.dataset.type;
  //   console.log(type);

  if (type === "increment") {
    number++;
    counterTextElement.textContent = number;
    buttonDisabled();
  } else if (type === "decrement") {
    number--;
    counterTextElement.textContent = number;
    buttonDisabled();
  } else {
    number = 0;
    counterTextElement.textContent = number;
    buttonDisabled();
  }
};

const buttonDisabled = () => {
  if (number === 0) {
    resetButtonElement.disabled = true;
  } else {
    resetButtonElement.disabled = false;
  }
};

buttonsElement.addEventListener("click", changeButtonsNumber);

// <h2>RANDOM WORDS</h2>
//     <h3 id="random-word-title">word</h3>
//     <button id="change-word-button">Change Word</button>

const randomWordTitleElement = document.getElementById("random-word-title");
const changeWordButtonElement = document.getElementById("change-word-button");

const words = [
  "apple",
  "banana",
  "cherry",
  "dog",
  "elephant",
  "flower",
  "grape",
  "house",
  "island",
  "jungle",
  "kite",
  "lion",
  "mountain",
  "night",
  "ocean",
  "piano",
  "queen",
  "river",
  "sun",
  "tree",
  "umbrella",
  "village",
  "water",
  "xylophone",
  "yellow",
  "zebra",
  "garden",
  "window",
  "cloud",
  "rocket",
];

const randomWord = (word) => {
  randomWordTitleElement.textContent = word;
};

const randomNumber = () => {
  const number = Math.floor(Math.random() * words.length);
  let randomText = words[number];
  randomWord(randomText);
};

changeWordButtonElement.addEventListener("click", randomNumber);

// <h2>EVALUATE PASSWORD</h2>
//     <p>La contraseña debe tener:</p>
//     <ul>
//       <li>Más de 5 caracteres</li>
//       <li>Al menos una mayúscula</li>
//       <li>Al menos un número</li>
//       <li>Al menos dos caracteres especiales (*,$,?,...)</li>
//     </ul>
//     <input type="text" id="input-password" />
//     <ul id="list"></ul>

const inputPasswordElement = document.getElementById("input-password");
const listElement = document.getElementById("list");

const numbers = "123567890";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const specialCharacters = "!@#$%^&*()-_=+[]{}|;:,.<>?";

const amountNumbers = (passwordValue) => {
  let counterCharacter = 0;

  listElement.textContent = counterCharacter++;
};

/* const amountUppercase =() {}

const amountSpecialCharacters = () {} */

const checkPassword = () => {
  // console.log(listElement);

  listElement.textContent = "";

  fragment = document.createDocumentFragment();

  const newCharacters = document.createElement("li");
  newCharacters.textContent = `El texto tiene 0 caracteres.`;

  const newUppercase = document.createElement("li");
  newUppercase.textContent = `El texto tiene 0 mayúsculas.`;

  const newNumbers = document.createElement("li");
  newNumbers.textContent = `El texto tiene 0 números.`;

  const newSpecialCharacter = document.createElement("li");
  newSpecialCharacter.textContent = `El texto tiene 0 caracteres especiales.`;

  fragment.append(newCharacters, newUppercase, newNumbers, newSpecialCharacter);
  listElement.append(fragment);
  //   console.log(fragment);
};

inputPasswordElement.addEventListener("input", checkPassword);
