let emailInput = document.querySelector(".enterEmail");
let btn = document.querySelector(".submit");
let error = document.querySelector(".error");

let emailInputBot = document.querySelector(".enterEmail-bot");
let btnBot = document.querySelector(".submit-bot");
let errorBot = document.querySelector(".error-bot");

btn.addEventListener("click", function () {
  if (!emailInput.value.includes("@gmail.com")) {
    error.style.display = "block";
  } else {
    error.style.display = "none";
  }
});

btnBot.addEventListener("click", function () {
  if (!emailInputBot.value.includes("@gmail.com")) {
    errorBot.style.display = "block";
  } else {
    errorBot.style.display = "none";
  }
});
