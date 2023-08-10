function save() {
  let name = document.querySelector("input[name='name']").value;
  let programmingLang = document.querySelector("select[name='lang']").value;
  alert(`Nome: ${name} \nLinguagem de programação: ${programmingLang}`);
}
