const red = document.querySelector("#red");
const yellow = document.querySelector("#yellow");
const green = document.querySelector("#green");
const blue = document.querySelector("#blue");
const purple = document.querySelector("#purple");
const cyan = document.querySelector("#cyan");

const center = document.querySelector(".center");

const getBGColor = (selectedElement) => {
  return window.getComputedStyle(selectedElement).backgroundColor;
};

const magicColorChanger = (element, color) => {
  element.addEventListener("mouseover", () => {
    center.style.backgroundColor = color;
  });
};

magicColorChanger(red, getBGColor(red));
magicColorChanger(yellow, getBGColor(yellow));
magicColorChanger(green, getBGColor(green));
magicColorChanger(blue, getBGColor(blue));
magicColorChanger(purple, getBGColor(purple));
