const form = document.getElementById("form");
const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const CPassword = document.getElementById("CPassword");
const error = document.getElementsByClassName("error");
const submit = document.getElementById("btn");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateInput();
});

const validateInput = () => {
  const userValue = username.value.trim();
  const emailValue = email.value.trim();
  const passValue = password.value.trim();
  const CpassValue = CPassword.value.trim();
  if (userValue === "") {
    setError(username, "Username is required");
  } else {
    setSuccess(username);
  }

  if (emailValue === "") {
    setError(email, "Email is required");
  } else if (!isValidEmail(emailValue)) {
    setError(email, "Invalid email");
  } else {
    setSuccess(email);
  }

  if (passValue === "") {
    setError(password, "Password is required");
  } else if (passValue.length < 8) {
    setError(password, "Password must be at least 8 characters");
  } else {
    setSuccess(password);
  }

  if (CpassValue === "") {
    setError(CPassword, "Confirm Password is required");
  } else if (CpassValue !== passValue) {
    setError(CPassword, "password does not match");
  } else {
    setSuccess(CPassword);
  }
};

const setError = (element, message) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = message;
  inputControl.classList.add("error");
  inputControl.classList.remove("success");
};

const setSuccess = (element) => {
  const inputControl = element.parentElement;
  const errorDisplay = inputControl.querySelector(".error");
  errorDisplay.innerText = "";
  inputControl.classList.add("success");
  inputControl.classList.remove("error");
};

function isValidEmail(e) {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(e);
}
