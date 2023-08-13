let engatadas = [];

class nave {
  constructor(tripulantes, engatada, portas) {
    (this.tripulantes = tripulantes),
      (this.engatada = engatada),
      (this.portas = portas);
  }
}

do {
  var escolha = prompt(
    "Informe o que deseja: \n[1] Realizar Engate \n[2] Imprimir naves \n[3] Sair do programa"
  );
  if (escolha == "1") {
    var nomeNave = prompt("Qual o nome da nave?");
    var qntTripulantes = prompt(`Quantos tripulantes estão na ${nomeNave} ?`);
    engatadas.push(nomeNave);
    let Nave = new nave(qntTripulantes, true, true);
  } else if (escolha == "2") {
    alert(`Lista de naves: ` + engatadas);
  }
} while (escolha != "3");
