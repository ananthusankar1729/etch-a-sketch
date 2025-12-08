let x=0;
let height = 98/10
let width = 98/10
const container = document.querySelector(".container");
function makeGrid(x){
    if (x<=100) {
        for (let i = 0; i < x; i++) {
            let box = document.createElement("div");
            box.classList.add("box");
            container.appendChild(box);
            for (let a = 0; a < x; a++) {
                let grid = document.createElement("div");
                grid.classList.add("grid");
                box.appendChild(grid);
                grid.addEventListener("mouseover", function() {
                    grid.classList.add("colorgrid");
                });
            }
        }
        
           
        
    } else {
        alert("Enter a size between (1 - 100)");
    }
}

const btn = document.querySelector("button");
btn.addEventListener("click", () => { x = parseInt(prompt("enter the grid size (1 - 100):", x));
    container.innerHTML = "";

    makeGrid(x);
});


