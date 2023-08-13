let name_older = prompt("Qual o nome da pessoa mais velha?")
let age_older = prompt("Qual a idade da pessoa mais velha?")

let name_younger = prompt("Qual o nome da pessoa mais nova?")
let age_younger = prompt("Qual a idade da pessoa mais nova?")

var ageDifference = (age_older - age_younger)

alert(
    "Pessoa mais velha: " + name_older + "\nIdade: " + age_older +
    "\n\nPessoa mais nova: " + name_younger + "\nIdade: " + age_younger +
    "\n\nDiferença de idade: " + ageDifference
)