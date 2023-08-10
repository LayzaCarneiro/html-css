function saveHouse() {
  let area = document.querySelector("input[name='area']").value;
  let number = document.querySelector("input[name='number']").value;
  let bairro = document.querySelector("input[name='bairro']").value;
  let city = document.querySelector("input[name='city']").value;

  let newListValue = document.createElement("li");
  newListValue.innerText = `Área: ${area}m²\nNúmero: ${number} \nBairro: ${bairro} \nCidade: ${city}\n`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover casa";
  removeButton.setAttribute("onclick", "removeHouse(this)");

  newListValue.appendChild(removeButton);

  document.getElementById("houseList").appendChild(newListValue);
}

function removeHouse(button) {
  let liToRemove = button.parentNode;
  document.getElementById("houseList").removeChild(liToRemove);
}
