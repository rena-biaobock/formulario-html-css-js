const formFields = document.querySelectorAll(".field");
const form = document.getElementById("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  formFields.forEach((input) => {
    console.log(input);

    if (input.value === "") {
      input.classList.remove("not-empty");
      input.classList.add("empty");
      input.nextElementSibling.classList.add("show");
    } else {
      input.classList.add("not-empty");
      input.nextElementSibling.classList.remove("show");
    }
  });
});
