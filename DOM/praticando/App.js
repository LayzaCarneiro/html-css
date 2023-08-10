class App {
  addProperty() {
    event.preventDefault();
    let kind = document.querySelector("select[name='kind']").value;
    let area = document.querySelector("input[name='area']").value;
    let rented = document.querySelector("input[name='rented']").checked;
    let property = new Property(kind, area, rented);
    this.addOnPropertiesList(property);
    this.cleanForm();
  }

  addOnPropertiesList(property) {
    let listElement = document.createElement("li");
    let propertyInfo = `\nTipo: ${property.kind} \nÁrea: ${property.area} m²    `;
    if (property.rented) {
      let rentedMark = this.createRentedMark();
      listElement.appendChild(rentedMark);
    }
    listElement.innerHTML += propertyInfo;

    let removeButton = this.createRemoveButton();
    listElement.appendChild(removeButton);
    document.getElementById("properties").appendChild(listElement);
  }

  createRentedMark() {
    let rentedMark = document.createElement("span");
    rentedMark.style.backgroundColor = "red";
    rentedMark.style.color = "white";
    rentedMark.innerText = "ALUGADO";
    return rentedMark;
  }

  createRemoveButton() {
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remover imóvel";
    removeButton.setAttribute("onclick", "app.remove()");
    return removeButton;
  }

  cleanForm() {
    document.querySelector("input[name='area']").value = "";
    document.querySelector("input[name='rented']").checked = false;
  }

  remove() {
    let liToRemove = event.target.parentNode;
    document.getElementById("properties").removeChild(liToRemove);
  }
}
