const button = document.querySelector(".submit");
const mail = document.querySelector("#mail");
const pwd = document.querySelector("#pwd");
const emailRegex = new RegExp(
  /^[A-Za-z0-9_!#$%&'*+\/=?`{|}~^.-]+@[A-Za-z0-9.-]+$/,
  "gm"
);

let a = 0;

mail.addEventListener("change", () => {
  console.log("lol");
  if (!emailValidator(mail.value)) {
    mail.parentNode.classList.add("box-wrong");
  } else {
    mail.parentNode.classList.remove("box-wrong");
  }
});

pwd.addEventListener("change", () => {
  if (!(pwd.value.length >= 8)) {
    pwd.parentNode.classList.add("box-wrong");
  } else {
    pwd.parentNode.classList.remove("box-wrong");
  }
});

button.addEventListener("mouseover", (event) => {
  //button.style.backgroundColor = getColor(0.5);
  if (!validateForm()) {
    button.classList.add("incorrect");
    console.log(a);
    if (a == 0) {
      button.classList.toggle("left");
      a = -1;
    } else if (a == 1) {
      button.classList.remove("left");
      console.log(button.className);
      button.classList.add("right");
      console.log(button.className);
      a = -1;
    } else {
      button.classList.remove("right");
      button.classList.add("left");
      a = 1;
    }

    button.event("click").off();
  } else {
    a = 0;
    button.classList.remove("incorrect");
    button.classList.remove("left");
    button.classList.remove("right");
  }
});

function emailValidator(data) {
  return emailRegex.test(data);
}

function validateForm() {
  const isValidEmail = emailRegex.test(mail.value);
  if (!emailValidator(mail.value) && !(pwd.value.length >= 8)) {
    return false;
  }

  return true;
}
