let scoop1 = document.querySelector(".scoop1");
let scoop2 = document.querySelector(".scoop2");
let scoop3 = document.querySelector(".scoop3");

let btnScoop1 = document.getElementById("btn-scoop1");
let btnScoop2 = document.getElementById("btn-scoop2");
let btnScoop3 = document.getElementById("btn-scoop3");

let selElem1 = document.getElementById("btn-scoop1");
let selElem2 = document.getElementById("btn-scoop2");
let selElem3 = document.getElementById("btn-scoop3");

let btnTopping1 = document.getElementById("btn-topping1");
let btnTopping2 = document.getElementById("btn-topping2");

let colors = [
  "#f45c96",
  "#f08bd3d",
  "#9932CC",
  "#f58619",
  "#badc58",
  "#ebab70",
];

//* counter отвечает за изменения цвета-вкуса топпинга
let counter1 = 0;
let counter2 = 0;
let color = "";

/*function selectTaste(taste) {
  switch (taste) {
    case "strawberry":
      return (color = "#f115b5");
    case "pistachio":
      return (color = "#badc58");
    case "lavanda":
      return (color = "#9932CC");

    case "raspberry":
      return (color = "#e52b50");
    case "chocolate":
      return (color = "#785920");
    case "melon":
      return (color = "#fff000");

    case "blueberry":
      return (color = "#3e57a1");
    case "vanilla":
      return (color = "#F3E5AB");
    case "banana":
      return (color = "#ffc107");
    default:
      return (color = "#e6e6fa");
  }
}*/

function handleSelectChange(select, scoop) {
  select.addEventListener("change", function () {
    console.log(select.value);
    switch (select.value) {
      case "strawberry":
        return (scoop.style.backgroundColor = "#f115b5");
      case "pistachio":
        return (scoop.style.backgroundColor = "#badc58");
      case "lavanda":
        return (scoop.style.backgroundColor = "#9932CC");

      case "raspberry":
        return (scoop.style.backgroundColor = "#e52b50");
      case "chocolate":
        return (scoop.style.backgroundColor = "#785920");
      case "melon":
        return (scoop.style.backgroundColor = "#fff000");

      case "blueberry":
        return (scoop.style.backgroundColor = "#3e57a1");
      case "vanilla":
        return (scoop.style.backgroundColor = "#F3E5AB");
      case "banana":
        return (scoop.style.backgroundColor = "#ffc107");
      default:
        return (scoop.style.backgroundColor = "#e6e6fa");
    }
  });
}

handleSelectChange(selElem1, scoop1);
handleSelectChange(selElem2, scoop2);
handleSelectChange(selElem3, scoop3);

/*selElem1.addEventListener("change", function () {
  scoop1.style.backgroundColor = selectTaste(selElem1.value);
});

selElem2.addEventListener("change", function () {
  scoop2.style.backgroundColor = selectTaste(selElem2.value);
});

selElem3.addEventListener("change", function () {
  scoop3.style.backgroundColor = selectTaste(selElem3.value);
});*/

function setCounterValue(counter) {
  return counter < colors.length - 1 ? counter + 1 : 0;
  console.log(counter);
}

btnTopping1.addEventListener("click", () => {
  scoop1.style.backgroundImage = `radial-gradient(circle at 20px 12px, ${colors[counter1]} 25px, transparent 25px`;
  counter1 = setCounterValue(counter1);
});

btnTopping2.addEventListener("click", () => {
  scoop3.style.backgroundImage = `radial-gradient(circle at 12.5px 17px, ${colors[counter2]} 20px, transparent 21px`;
  counter2 = setCounterValue(counter2);
});
