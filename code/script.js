// Form Validation
const form = document.querySelector(".contact-form");
const successMessage = document.querySelector(".success");

const fname = document.getElementById("name");
const email = document.getElementById("email");
const subject = document.getElementById("subject");
const message = document.getElementById("message");

const errorName = document.getElementById("error-name");
const errorEmail = document.getElementById("error-email");
const errorSubject = document.getElementById("error-subject");
const errorMessage = document.getElementById("error-message");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  errorName.textContent = "";
  errorEmail.textContent = "";
  errorSubject.textContent = "";
  errorMessage.textContent = "";
  successMessage.style.display = "none";

  let valid = true;

  if (fname.value.trim() === "") {
    errorName.textContent = "Full name is required";
    valid = false;
  }

  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (email.value.trim() === "") {
    errorEmail.textContent = "Email is required";
    valid = false;
  } else if (!email.value.match(emailPattern)) {
    errorEmail.textContent = "Please enter a valid email";
    valid = false;
  }

  if (subject.value.trim() === "") {
    errorSubject.textContent = "Subject is required";
    valid = false;
  }

  if (message.value.trim().length < 10) {
    errorMessage.textContent = "Message must be at least 10 characters";
    valid = false;
  }

  if (valid) {
    successMessage.style.display = "block";
    form.reset();
  }
});
