let spaceshipName = prompt("Informe o nome da nave: ")
let dobra = 0

let firstQ = prompt("Deseja entrar em dobra espacial? \n[1] Sim \n[2] Não")

while(firstQ == "1"){
    dobra +=1
    firstQ = prompt("Deseja realizar a próxima dobra? \n[1] Sim \n[2] Não")   
}

alert("Nome da nave: " + spaceshipName + "\n\nNúmero de dobras: " + dobra)