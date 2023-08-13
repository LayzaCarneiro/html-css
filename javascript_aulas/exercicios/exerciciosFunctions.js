let spaceshipName = prompt("Qual o nome da espaçonave?")

let spaceshipVelocity = 0

let chosenOption

function menu(){
    let option
    while (option != "1" && option != "2" && option != "3" && option != "4"){
        option = prompt("Escolha uma das seguintes opções: \n[1] Acelerar a nave em 5km/s \n[2] Desacelerar em 5km/s \n[3] Imprimir dados de bordo \n[4] Sair do programa")
    }
    return option
}

function option1(velocity){
    let newVelocity = velocity + 5
    return newVelocity
}

function option2(velocity){
    let newVelocity = velocity - 5
    if(newVelocity <= 0){newVelocity = 0}
    return newVelocity
}

function option3(name, velocity){
    alert("Espaçonave: " + name + "\nVelocidade: " + velocity + "km/s")
}

do{
    chosenOption = menu()
    switch(chosenOption){
        case "1":
            spaceshipVelocity = option1(spaceshipVelocity)
            break
        case "2":
            spaceshipVelocity = option2(spaceshipVelocity)
            break
        case "3":
            option3(spaceshipName, spaceshipVelocity)
            break
        default:
            alert("Encerrando programa de bordo.")
    }
} while(chosenOption != "4")