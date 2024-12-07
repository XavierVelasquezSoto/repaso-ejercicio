<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <link rel="stylesheet" href="./css/styles.css" />
    <title>Repaso</title>
  </head>
  <body>
    <h2>COUNTER</h2>
    <h3 id="counter-text">0</h3>
    <div id="buttons" class="buttons">
      <button data-type="decrement">-1</button>
      <button data-type="reset">Reset</button>
      <button data-type="increment">+1</button>
    </div>
    <hr />
    <h2>RANDOM WORDS</h2>
    <h3 id="random-word-title">word</h3>
    <button id="change-word-button">Change Word</button>
    <hr />
    <h2>EVALUATE PASSWORD</h2>
    <p>La contraseña debe tener:</p>
    <ul>
      <li>Más de 5 caracteres</li>
      <li>Al menos una mayúscula</li>
      <li>Al menos un número</li>
      <li>Al menos dos caracteres especiales (*,$,?,...)</li>
    </ul>
    <input type="text" id="input-password" />
    <ul id="list"></ul>
    <script src="./js/scripts.js"></script>
  </body>
</html>