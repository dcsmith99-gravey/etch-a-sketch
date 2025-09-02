(function () {
    let grid = document.getElementById("grid");
    let resizeBtn = document.getElementById("resizeBtn");
    const GRID_SIZE = 960;

    function buildGrid(n) {
        n = Math.max(1, Math.min(100, parseInt(n, 10) || 16));
        grid.innerHTML = "";

        let cellSize = grid.clientWidth / n;

        for (let i = 0; i < n * n; i++) {
            let cell = document.createElement("div");
            cell.className = "cell";
            cell.style.width = cellSize + "px";
            cell.style.height = cellSize + "px";
            grid.appendChild(cell);
        }
    }

    function getRandomColor() {
        let r = Math.floor(Math.random() * 256);  // 0–255
        let g = Math.floor(Math.random() * 256);
        let b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;
    }

    grid.addEventListener("mouseover", function (e) {
        if (e.target && e.target.classList.contains("cell")) {
            e.target.style.backgroundColor = getRandomColor();
        }
    });

    resizeBtn.addEventListener("click", function () {
        let input = prompt("How many squares per side? (1–100)", "16");
        if (input === null) return;
        let n = parseInt(input, 10);
        if (isNaN(n) || n < 1 || n > 100) {
            alert("Please enter a whole number between 1 and 100.");
            return;
        }
        buildGrid(n);
    });

    buildGrid(16);
})();