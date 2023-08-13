let distanceLY = prompt("Informe a distância em anos-luz: ")
let choice = prompt("Qual operação deseja utilizar: \n[1] Parsec (pc)\n[2] Unidade Astronômica (AU)\n[3] Quilômetros (km)")
let distanceChoice
let chosenUnity


switch(choice){
    case "1":
        distanceChoice = distanceLY * 0.306601
        chosenUnity = "Parsec"
        break
    case "2":
        distanceChoice = distanceLY * 63241.1
        chosenUnity = "Unidade Astronômica"
        break
    case "3":
        distanceChoice = distanceLY * 9.5 * (10**12)
        chosenUnity = "Quilômetros"
        break
    default:
        distanceChoice = "Conversão fora do escopo"
        chosenUnity = "Unidade não identificada"
        alert("Distância em anos-luz: " + distanceLY + "\nUnidade não identificada: Conversão fora do escopo ")
        break
}

alert("Distância em anos-luz: " + distanceLY + "\n" + chosenUnity + ": " + distanceChoice)