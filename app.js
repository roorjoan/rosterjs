window.addEventListener("DOMContentLoaded", () => {
  let days = document.querySelectorAll(".day");

  //pinta el calendario
  drawCalendar();

  //pinta los dias de trabajo
  markWorkDay(days);
});

const markWorkDay = (days) => {
  let yuliesky = "lightcoral";
  let ricardo = "orange";
  let jose = "lightgreen"; //verde
  let carlos = "lightblue";

  for (let index = 0; index < days.length; index += 4) {
    days[index].style.background = ricardo;
    days[index + 1].style.background = jose;
    days[index + 2].style.background = carlos;
    days[index + 3].style.background = yuliesky;
  }
};

const drawCalendar = () => {
  const months = [
    "Enero",
    "Febrero",
    "Marzo",
    "Abril",
    "Mayo",
    "Junio",
    "Julio",
    "Agosto",
    "Septiembre",
    "Octubre",
    "Noviembre",
    "Diciembre",
  ];
  const pos = [7, 3, 3, 6, 1, 4, 6, 2, 5, 7, 3, 5];
  const my_date = new Date();

  document.getElementById("month").textContent = months[my_date.getMonth()];

  document
    .getElementById("first_day")
    .style.setProperty("grid-column-start", pos[my_date.getMonth()]);
};
