const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emails = document.getElementById('email');
const passwordInputs = document.getElementById('password');
const confPassword = document.getElementById('conf-password');

loginForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const passwordValue = passwordInput.value.trim();
    const confPasswordValue = confPassword.value.trim();
    if(!nameValue || !emailValue || !passwordValue || !confPasswordValue) {
        alert('Please fill in all fields !');
        return;
    }
    loginForm.reset();
});

  const loginForm = document.getElementById('loginForm');
  const emailInput = document.getElementById('loginEmail');
  const passwordInput = document.getElementById('loginPassword');

  loginForm.addEventListener('submit', function(e) {
    e.preventDefault();

    const email = emailInput.value.trim();
    const password = passwordInput.value.trim();
    if(email === "" || password === "") {
      alert("Please fill in all fields.");
      return;
    }
    if(email === "alking@gmail.com" && password === "alking") {
      window.location.href = "index.html";  
    } else {
      alert("Incorrect email or password!");
    }
  });