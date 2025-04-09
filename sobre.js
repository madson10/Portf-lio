// sobre.js

document.addEventListener("DOMContentLoaded", () => {
  const texto =
    "Olá! Meu nome é Madson,sou um desenvolvedor apaixonado por tecnologia. Gosto de transformar ideias em código, criar experiências interativas e aprender algo novo todos os dias.";
  const elemento = document.getElementById("texto-animado");

  if (!elemento) return;

  let i = 0;

  const digitar = () => {
    if (i < texto.length) {
      elemento.innerHTML += texto.charAt(i);
      i++;
      setTimeout(digitar, 20);
    } else {
      elemento.style.opacity = 1;
    }
  };

  setTimeout(digitar, 200); // Delay inicial para suavizar a entrada
});
