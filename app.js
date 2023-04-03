import { months, pos, days30, colors } from "./data.js";

window.addEventListener("DOMContentLoaded", () => {
  drawCalendar();
  //console.log(setFirst());
  markWorkDay();
});

const drawCalendar = () => {
  const my_date = new Date();
  const my_month = my_date.getMonth();

  document.getElementById("month").textContent = months[my_month];

  document
    .getElementById("first_day")
    .style.setProperty("grid-column-start", pos[my_month]);

  if (months[my_month] != "Febrero") {
    const list = document.querySelector("ol");
    if (days30.includes(months[my_month])) {
      const li29 = document.createElement("li");
      const li30 = document.createElement("li");
      li29.textContent = 29;
      li30.textContent = 30;
      li29.classList.add("day");
      li30.classList.add("day");
      list.appendChild(li29);
      list.appendChild(li30);
    } else {
      const li29 = document.createElement("li");
      const li30 = document.createElement("li");
      const li31 = document.createElement("li");
      li29.textContent = 29;
      li30.textContent = 30;
      li31.textContent = 31;
      li29.classList.add("day");
      li30.classList.add("day");
      li31.classList.add("day");
      list.appendChild(li29);
      list.appendChild(li30);
      list.appendChild(li31);
    }
  }
};

const markWorkDay = () => {
  const days = document.querySelectorAll(".day");

  for (let i = 0; i < days.length; i += 4) {
    days[i].style.background = colors[0];
    days[i + 1].style.background = colors[1];
    days[i + 2].style.background = colors[2];
    days[i + 3].style.background = colors[3];
  }
};

const setFirst = (array, firstElement = "yuliesky") => {
  let array_aux = [];
  let array_aux1 = [];
  let aux = "";

  for (let i = 0; i < 4; i++) {
    array_aux[i] = array[i];
    if (array[i] === firstElement) {
      
    }
  }
};
