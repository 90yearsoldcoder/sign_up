const password1 = document.getElementById("password1");
const password2 = document.getElementById("password2");
const msg = document.getElementById("message");

password1.addEventListener("input", validatePasswords);
password2.addEventListener("input", validatePasswords);

function validatePasswords(e) {
  if (password1.value != password2.value) {
    password1.classList.add("input-error");
    password2.classList.add("input-error");
    msg.textContent = "*Passwords do not match";
  } else {
    password1.classList.remove("input-error");
    password2.classList.remove("input-error");
    msg.textContent = "";
  }
}
