let x=0;
let height = 98/10
let width = 98/10
const container = document.querySelector(".container");
function makeGrid(x){
    for (let i = 0; i < x; i++) {
        let box = document.createElement("div");
        box.classList.add("box");
        container.appendChild(box);
        for (let a = 0; a < x; a++) {
            let grid = document.createElement("div");
            grid.classList.add("grid");
            box.appendChild(grid);
        }
    }   
}
const btn = document.querySelector("button");
btn.addEventListener("click", () => { x = parseInt(prompt("enter the grid size:", x));
    container.innerHTML = "";
    makeGrid(x);
});

