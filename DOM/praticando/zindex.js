function saveDatas() {
  let tipoImovel = document.querySelector("select").value;
  let area = document.querySelector("input[name='area']").value;
  let alugado = document.getElementById("rent").value;

  let novoImovel = document.createElement("li");
  novoImovel.innerText = `Tipo: ${tipoImovel} \nÁrea: ${area} m² \nSituação: ${alugado}\n`;

  let removeButton = document.createElement("button");
  removeButton.type = "button";
  removeButton.innerText = "Remover imóvel";
  removeButton.setAttribute("onclick", "removeImovel(this)");
  novoImovel.appendChild(removeButton);

  document.getElementById("listaImovel").appendChild(novoImovel);
}

function removeImovel(button) {
  let liToRemove = button.parentNode;
  document.getElementById("listaImovel").removeChild(liToRemove);
}

function cleanForm() {
  document.querySelector("input[name='area']").value = "";
  document.querySelector("select[name='type']").value = "Casa";
  document.querySelector("select[name='rent']").value = "Alugado";
}
