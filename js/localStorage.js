const myform = document.getElementById('form-contact');

function store() {
  const userEmail = document.getElementById('email').value;
  const userName = document.getElementById('name').value;
  const userMessage = document.getElementById('message').value;

  const userInput = {
    name: userName,
    email: userEmail,
    meassage: userMessage,
  };

  localStorage.setItem('user', JSON.stringify(userInput));
}

myform.addEventListener('change', (e) => {
  e.preventDefault(e);
  store();
});

const gottenData = JSON.parse(localStorage.getItem('user'));

if (localStorage.length !== 0) {
  document.getElementById('email').value = gottenData.email;
  document.getElementById('name').value = gottenData.name;
  document.getElementById('message').value = gottenData.meassage;
}
