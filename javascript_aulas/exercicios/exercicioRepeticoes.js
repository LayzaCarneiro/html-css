let nameSpaceship = prompt("Qual o nome da espaçonave?")
let newName = ""

for(let i = nameSpaceship.length - 1; i >= 0; i--){
    if(nameSpaceship[i] == "e"){break}
    else{newName += nameSpaceship[i]}
}

alert("Nome original da nave: " + nameSpaceship + "\nNome após ocultação: " + newName)