document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const colorBtn = document.getElementById("change-color-btn");

  function random(number) {
    return Math.floor(Math.random() * (number + 1));
  }

  function getRandomColor() {
    let rndCol =
      "rgb(" + random(255) + "," + random(255) + "," + random(255) + ")";
    colorBox.style.backgroundColor = rndCol;
    console.log(rndCol);
  }
  colorBtn.onclick = getRandomColor;
});
