"use strict";
//buttons and inputs
const ratingButton = document.getElementById("show-rating");
const accountButton = document.getElementById("show-account");
const dayButton = document.getElementById("show-day");

const ratingInput = document.getElementById("rating-input");
const accountInputs = document
  .getElementById("bank-details")
  .querySelectorAll("input");
const dateInput = document.getElementById("date-input");

// event handlers
function showRating() {
  alert(`Has valorado con ${ratingInput.value} puntos`);
}

function showAccount() {
  let accountNumber = [];
  accountInputs.forEach((node) => {
    accountNumber.push(node.value);
  });
  alert(`Le informamos que su cuenta bancaria es: ${accountNumber.join("-")} `);
}

function showDay() {
  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const day = daysOfWeek[new Date(dateInput.value).getUTCDay()];
  alert(`La fecha seleccionada en el elemento de fecha es un ${day}`);
}

// event listeners
ratingButton.addEventListener("click", showRating);
accountButton.addEventListener("click", showAccount);
dayButton.addEventListener("click", showDay);
