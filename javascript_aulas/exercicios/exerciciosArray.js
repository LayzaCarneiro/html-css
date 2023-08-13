const hitchedSpaceships = [
  ["Fenix", 8, true],
  ["Golias", 10, true],
  ["Helmet", 5, false],
  ["Elemental", 3, true],
  ["Darwin", 15, false],
];
console.log(hitchedSpaceships);

let tripulantes = hitchedSpaceships
  .filter((nave) => {
    return nave[1] > 9;
  })
  .map((nave) => {
    return nave[0];
  });
console.log(tripulantes);

let engates = hitchedSpaceships.findIndex((nave) => {
  return nave[2] == false;
});
console.log(engates);

let nomes = hitchedSpaceships.map((nave) => {
  return nave[0].toUpperCase();
});
console.log(nomes);

let message =
  "Espaçonaves com mais de 9 tripulantes: " +
  tripulantes.join(", ") +
  "\n\nPlataforma com processo de engate: " +
  (engates + 1) +
  "\n\nEspaçonaves destacadas: " +
  nomes.join(", ");

alert(message);
