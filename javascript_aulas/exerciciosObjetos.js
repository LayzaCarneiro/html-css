let velocidade = 0;

let Nave = {
  nome: prompt("Qual o nome da nave?"),
  tipo: prompt("Qual o tipo da nave?"),
  velocidadeMax: Number(
    prompt("Qual a velocidade máxima permitida para essa nave?")
  ),
};

do {
  var escolha = prompt(
    "Escolha o que deseja: \n[1] Acelerar a nave \n[2] Parar a nave"
  );
  if (escolha == "2") {
    alert(
      "Nome da nave: " +
        Nave.nome +
        "\nTipo da nave: " +
        Nave.tipo +
        "\nVelocidade atual: " +
        velocidade +
        "km/s" +
        "\nVelocidade máxima da nave: " +
        Nave.velocidadeMax +
        "km/s"
    );
    break;
  } else if (escolha == "1") {
    acelerar = Number(prompt("Quanto deseja acelerar?"));
    velocidade += acelerar;
    if (velocidade > Nave.velocidadeMax) {
      alert(
        "Acima da velocidade máxima permitida! \n\nVelocidade da nave: " +
          velocidade +
          "km/s" +
          "\nVelocidade máxima permitida: " +
          Nave.velocidadeMax +
          "km/s"
      );
      velocidade -= acelerar;
    }
  }
} while (escolha == "1" || escolha == "2");
