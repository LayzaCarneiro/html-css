let nameSpaceship = prompt("Qual o nome da espaçonave?");
let caracter = prompt("Qual caracter deseja substituir?");
let newCaracter = prompt("Por qual caracter?");
let newName = "";

for (let i = 0; i < nameSpaceship.length; i++) {
  if (nameSpaceship[i] == caracter) {
    newName += newCaracter;
  } else {
    newName += nameSpaceship[i];
  }
}
alert("O novo nome da nave é " + newName);
