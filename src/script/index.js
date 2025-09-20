const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputTelefone = document.getElementById("telefone");
const inputMensagem = document.getElementById("mensagem");

const missingAlertName = document.getElementsByClassName("alert name")[0];
const missingAlertEmail = document.getElementsByClassName("alert email")[0];
const missingAlertTelefone =
  document.getElementsByClassName("alert telefone")[0];
const missingAlertMensagem =
  document.getElementsByClassName("alert mensagem")[0];

const form = document.getElementById("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  inputList = [inputName, inputEmail, inputTelefone, inputMensagem];
  alertList = [
    missingAlertName,
    missingAlertEmail,
    missingAlertTelefone,
    missingAlertMensagem,
  ];

  for (let index = 0; index < inputList.length; index++) {
    const element = inputList[index];
    const alert = alertList[index];

    if (element.value === "") {
      element.classList.remove("not-empty");
      element.classList.add("empty");
      alert.classList.add("show");
    } else {
      element.classList.add("not-empty");
      alert.classList.remove("show");
    }
  }
});
