// using while loop to convert binary to decimal
let binaryToDeca = (n) => {
  n = n.toString();
  let conta = 0;
  let i = 0;
  let j = n.length - 1;
  while (i <= n.length - 1 && j >= 0) {
    conta = conta + n[i] * 2 ** j;
    i++;
    j--;
  }
  return conta;
};

let decimal = 0;

const button = document.querySelector("#button");
const retorna = document.querySelector("#returnUser");
const entrada = document.querySelector("#entrada");

button.addEventListener("click", (e) => {
  e.preventDefault();
  let binary = entrada.value;
  let returnToUser = binaryToDeca(binary);

  retorna.innerHTML = `A conversão em decimal é ${returnToUser}!`;
});