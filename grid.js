const grid = document.getElementById("grid");


for (let row = 0; row < 16; row++) {
    const rowDiv = document.createElement("div");
    rowDiv.classList.add("row");

    for (let col = 0; col < 16; col++) {
        const cell = document.createElement("div");
        cell.classList.add("cell");
        rowDiv.appendChild(cell);
    }

    grid.appendChild(rowDiv);
}

const cells = document.querySelectorAll(".cell");

cells.forEach(cell => {
    cell.addEventListener("mouseover", () => {
        cell.classList.add("colored");
    });
});