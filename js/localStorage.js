const userEmail = document.getElementById('email').value;
const userName = document.getElementById('name').value;
const userMessage = document.getElementById('message').value;
const myform = document.getElementById('form-contact');

const userInput = {
  name: userName,
  email: userEmail,
  meassage: userMessage,
};

function store() {
  localStorage.setItem('user', JSON.stringify(userInput));
}

myform.addEventListener('change', (e) => {
  e.preventDefault(e);
  store();
});

window.onload = function storedData() {
  if (localStorage.length !== 0) {
    const retievedData = JSON.parse(localStorage.getItem('user'));
    userName.value = retievedData.name;
    userEmail.value = retievedData.email;
    userMessage.value = retievedData.meassage;
  }
};
