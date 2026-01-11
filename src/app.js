import { alert, defaultModules, error } from "@pnotify/core";
import "@pnotify/core/dist/PNotify.css";
import * as PNotifyMobile from "@pnotify/mobile";
import "@pnotify/mobile/dist/PNotifyMobile.css";
import "@pnotify/core/dist/BrightTheme.css";
import Chart from "chart.js/auto";

defaultModules.set(PNotifyMobile, {});

// error({
//   text: "Notice me, hero!",
// });

const divSection = document.querySelector(".peech");

const keys = ["a", "b", "c", "w", "t", "u", "q", "p", "z", "k"];

let currentInndex = Math.round(Math.random() * (keys.length - 1 - 1) + 1);

divSection.textContent = keys[currentInndex];

window.addEventListener("keydown", (event) => {
  const userKey = event.key.toLowerCase();

  // console.log(keys[currentInndex]);
  // console.log(userKey);

  const currentLetters = keys[currentInndex];

  if (userKey === currentLetters) {
    alert({
      text: "Good job!",
      delay: 300,
    });
    currentInndex = Math.round(Math.random() * (keys.length - 1 - 1) + 1);
    divSection.textContent = keys[currentInndex];
  } else {
    error({
      text: "u made a mistake(",
      delay: 300,
    });
  }

  // keys.forEach(letter => {

  // });
});

const canvasGraph = document.querySelector("#sales-chart");

const chartData = {
  labels: [
    "1",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "11",
    "12",
    "13",
    "14",
    "15",
    "16",
    "17",
    "18",
    "19",
    "20",
    "21",
    "22",
    "23",
    "24",
    "25",
    "26",
    "27",
    "28",
    "29",
    "30",
  ],
  datasets: [
    {
      label: "Продажі за останній місяць",
      data: [
        150, 220, 180, 200, 250, 300, 280, 350, 400, 380, 420, 450, 500, 550,
        600, 650, 700, 750, 800, 850, 900, 950, 1000, 1050, 1100, 1150, 1200,
        1250, 1300, 1350,
      ],
      backgroundColor: "#2196f3",
      borderColor: "#2196f3",
      borderWidth: 1,
    },
  ],
};

// const labels = Utils.months({count: 7});
const dataNew = {
//   labels: labels,
  datasets: [{
    label: 'My First Dataset',
    data: [65, 59, 80, 81, 56, 55, 40],
    fill: false,
    borderColor: 'rgb(75, 192, 192)',
    tension: 0.1
  }]
};

const config = {
  type: 'line',
  data: chartData,
}


const salesChart = new Chart(canvasGraph, config);
