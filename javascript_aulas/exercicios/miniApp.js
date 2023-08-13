let departureDateEntry = prompt("Digite a data de partida (DD/MM/YYYY)")

let departureDate = moment(departureDateEntry, "DD/MM/YYYY")

let today = moment()

let dateDiff = today - departureDate

let option = prompt("Escolha como gostaria de exibir o tempo de partida:\n [1] Segundos\n [2] Minutos\n [3] Horas\n [4] Dias")

if(option == "1"){
    let secondsDate = Math.round(dateDiff / 1000)
    alert("Tempo de vôo: " + secondsDate + " segundos.")
}
else if(option == "2"){
    let minutesDate = Math.round(dateDiff / 1000 / 60)
    alert("Tempo de vôo: " + minutesDate + " minutos.")
}
else if(option == "3"){
    let hoursDate = Math.round(dateDiff / 1000 / 3600)
    alert("Tempo de vôo: " + hoursDate + " horas.")
}
else if(option == "4"){
    let daysDate = Math.round(dateDiff / 1000 / 3600 / 24)
    alert("Tempo de vôo: " + daysDate + " dias.")
}
else{alert("Opção inválida.")}