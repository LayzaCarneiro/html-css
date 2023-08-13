const namePilot = prompt("Qual o seu nome, piloto?")
let velocity = 0
let velocityPilot = prompt("A qual velocidade deseja acelerar a nave?")
let confirmVelocity = confirm(namePilot + ", deseja atingir " + velocityPilot + "km/s?")

if(confirmVelocity){velocity = velocityPilot}

if (velocity <= 0){alert("Nave está parada. Considere partir e aumentar a velocidade")}
else if (velocity < 40){alert("Você está devagar, podemos aumentar mais.")}
else if (velocity < 80){alert("Parece uma boa velocidade para manter.")}
else if (velocity < 100){alert("Velocidade alta, considere diminuir.")}
else if(velocity >= 100){alert("Velocidade perigosa. Controle automático forçado.")}

alert("Nome: " + namePilot + "\nVelocidade: " + velocity + "km/s")