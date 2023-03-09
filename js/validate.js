const form = document.getElementById("form");
const email = document.getElementById("email");
const error = document.getElementById("error-message");
let msg = "Please your email must be in lowercase letters";

function errorMessage(input, message, type) {
  error.innerHTML = msg;
  input.className = type ? "error-message" : "error";

  return type;
}

function showSucess(input, message) {
  return errorMessage(input, "", false);
}

// function showError(input, message) {
//   return errorMessage(input, msg, true);
// }



form.addEventListener('submit', function(e){
  if (email.value != email.value.toLowerCase()){
    e.preventDefault();
    error.textContent = msg;
    error.className = "error-message";
  }
})