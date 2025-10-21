const time = document.querySelector(".time");
const date = document.querySelector(".date");

function clock() {
  const now = new Date();

  const hours = String(now.getHours()).padStart(2, 0);
  const minutes = String(now.getMinutes()).padStart(2, 0);
  const seconds = String(now.getSeconds()).padStart(2, 0);

  const timeString = `${hours}:${minutes}:${seconds}`;
  console.log(timeString);
  time.textContent = timeString;
}

const today = new Date();
const dateString = today.toDateString();
console.log(dateString);
date.textContent = dateString;

clock();
setInterval(clock, 1000);
