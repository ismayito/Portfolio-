const form = document.getElementById("form-contact");
const email = document.getElementById("email");
const error = document.getElementById("error-message");
const msg = "Please your email must be in lowercase letters";

form.addEventListener("submit", (e) => {
  if (email.value !== email.value.toLowerCase()) {
    e.preventDefault();
    error.className = "error-message";
    error.textContent = msg;
  }
});
