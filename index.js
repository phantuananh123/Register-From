function validateUsername(username) {
  if (!username) return "Username required";
  return true;
}

function validatePassword(password) {
  if (!password) return "Password required";
  if (password.length < 3) return "Password must be at least 3 characters";
  return true;
}

function validatePasswordConfirmation(passwordConfirmation, password) {
  if (!passwordConfirmation) return "Password Confirmation required";
  if (passwordConfirmation != password) return "Password does not match";
  return true;
}

function validateEmail(email) {
  if (!email) return "Email required";
  const re = /\S+@\S+\.\S+/;
  if (!re.test(email)) return " Email invalid";
  return true;
}
function displayValidation(input, message, type) {
  const successIcon = input.parentNode.querySelector(".icon-success");
  const errorIcon = input.parentNode.querySelector(".icon-error");
  const errorMessage = input.parentNode.querySelector(".icon-message");

  if (type === "success") {
    //
    successIcon.classList.remove("hidden");
    errorIcon.classList.add("hidden");
    errorMessage.textContent = "";
  } else {
    //
    successIcon.classList.add("hidden");
    errorIcon.classList.remove("hidden");
    errorMessage.textContent = message;
  }
}

function validateFields(input) {
  let message;
  switch (input.id) {
    case "username":
      message = validateUsername(input.value.trim());
      break;
    case "email":
      message = validateEmail(input.value.trim());
      break;
    case "password":
      message = validatePassword(input.value.trim());
      break;
    case "password-confirmation":
      const password = document.querySelector("#password").value.trim();
      message = validatePasswordConfirmation(input.value.trim());
      break;
    default:
      break;
  }
  if (message === true) {
    displayValidation(input, "", "success");
  } else {
    displayValidation(input, message, "error");
  }
}

const form = document.querySelector(".form");
const fields = ["username", "email", "password", "password-confirmation"];
const input = fields.map((fields) => document.querySelector(`#${fields}`));

input.forEach((input) => {
  input.addEventListener("input", () => {
    validateFields(input);
  });
});

form.addEventListener("submit", (event) => {
  event.preventDefault();
  input.forEach((input) => validateFields(input));
});
