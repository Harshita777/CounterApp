const countCounter = document.getElementById("counter");
const countHeader = document.getElementById("header-1");
const countIncrease = document.getElementById("increment");
const countDecrease = document.getElementById("decrement");
const countReset = document.getElementById("reset");
const changeTheme = document.getElementById("theme");
const changeBtn = document.getElementById("theme");

let count = 0;

function updateCount() {
  let name = "pk";
  countCounter.textContent = count;
}

function incrementCount() {
  count++;
  updateCount();
}

function decrementCount() {
  if (count > 0) {
    count--;
    updateCount();
  }
}
function resetCount() {
  count = 0;
  updateCount();
}
function darkTheme() {
  document.body.classList.toggle("dark");
  const isDarkTheme = document.body.classList.contains("dark");
  changeTheme.textContent = isDarkTheme
    ? "Switch to Light Theme"
    : "Switch to Dark  Theme";
}
function changeFontColor() {
  countHeader.style.color = "white";
}
function changeButton() {
  changeBtn.textContent.toggle("Light");
}

countIncrease.addEventListener("click", incrementCount);
countDecrease.addEventListener("click", decrementCount);
countReset.addEventListener("click", resetCount);
changeTheme.addEventListener("click", darkTheme);
changeTheme.addEventListener("click", changeFontColor);
changeBtn.addEventListener("click", changeButton);
updateCount();
