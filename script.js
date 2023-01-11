const container_id = document.querySelector("#container");
const reset_id = document.querySelector("#reset");
let cols = 0;
let rows = 0;

function makeBox(cols, rows) {
  container_id.style.gridTemplateColumns = `repeat(${cols}, 1fr)`;
  container_id.style.gridTemplateRows = `repeat(${rows}, 1fr)`;
  const squares = container.querySelectorAll("div");
  squares.forEach((div) => div.remove());

  for (i = 0; i <= cols * rows; i++) {
    const square = document.createElement("div");
    container.insertAdjacentElement("beforeend", square);
    square.addEventListener("mouseover", () => {
      square.style.background = "red";
    });
    square.style.background = "blue";
  }
}

makeBox(16, 16);

reset_id.addEventListener("click", () => {
  cols = prompt("Enter Columns : ");
  rows = prompt("Enter Rows : ");
  makeBox(cols, rows);
});
