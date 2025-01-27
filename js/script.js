document.addEventListener("DOMContentLoaded", () => {
  const colorBox = document.getElementById("color-box");
  const colorBtn = document.getElementById("change-color-btn");

  function getRandomColor() {
    let rndCol =
      "rgb(" +
      Math.random(255) +
      "," +
      Math.random(255) +
      "," +
      Math.random(255) +
      ")";
    colorBox.style.backgroundColor = rndCol;
    console.log(rndCol);
  }
  colorBtn.onclick = getRandomColor;
});
