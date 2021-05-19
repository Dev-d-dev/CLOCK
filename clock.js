const time = document.getElementById("time");
const date = document.getElementById("date");

const allMonths = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

setInterval(() => {
  const d = new Date();
  time.innerHTML = d.toLocaleTimeString();
  const day = d.getDate();
  const month = d.getMonth();
  const year = d.getFullYear();
  date.innerHTML = `${day}/${allMonths[month]}/${year} `;
}, 1000);
