function verifyEnablement() {
  let selectedValue = document.querySelector("select").value;
  if (selectedValue == "disabled") {
    document.querySelector("input[name='text']").disabled = true;
    let pElement = document.getElementById("message");
    pElement.innerText = "DESABILITADO";
    pElement.style.backgroundColor = "yellow";
    pElement.style.color = "red";
  } else {
    document.querySelector("input[name='text']").disabled = false;
    let pElement = document.getElementById("message");
    pElement.innerText = "";
    pElement.style.backgroundColor = "transparent";
    pElement.style.color = "Black";
  }
}
