//.Create a similar element, when you click on any of the blocks it should
// change its color. Also each element should display the amount of times it
// has been clicked on it.

const gridSize = 6;
const grid = document.getElementById("grid");

for (let i = 0; i < gridSize; i++) {
    const block = document.createElement("div");
    block.classList.add("block");
    block.dataset.count = 0;
    block.addEventListener("click", () => {
        block.style.backgroundColor = '#' + (Math.random().toString(16) + '000000').substring(2,8).toUpperCase();
        block.dataset.count++;
        block.textContent = block.dataset.count;
    });
    grid.appendChild(block);
}
