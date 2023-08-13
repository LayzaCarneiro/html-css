let komodoShip = {
  nome: "Komodo",
  velocity: 80,
  acceleration: 0,
};

const velocityAfter2Secons = (velocity, acceleration) => {
  return new Promise(function (resolve, reject) {
    setTimeout(() => {
      if (acceleration > 0) {
        velocity += acceleration * 2;
        console.log("Nova velocidade: " + velocity);
        resolve(velocity);
      } else {
        console.log("Aceleração inválida.");
        reject("Não possui aceleração.");
      }
    });
  });
};

velocityAfter2Secons(komodoShip.velocity, komodoShip.acceleration)
  .then((velocity) => {
    komodoShip.velocity = velocity;
    console.log("Depois de acelerar: \n" + komodoShip);
  })
  .catch((message) => {
    console.log("Komodo: " + message);
  });
console.log("Execução de promises.");
console.log(komodoShip);
