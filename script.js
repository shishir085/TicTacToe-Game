let boxes = document.querySelectorAll(".box")
let reset = document.querySelector("#reset")
let newgamebtn = document.querySelector("#newgame")
let msgcontainer = document.querySelector(".msgcontainer");
let msg = document.querySelector("#msg")


let turnO = true;

let win = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
]

const resetgame = () => {
    turnO = true;
    enablebox(); 
    msgcontainer.classList.add("hide");
}

boxes.forEach((box) => {
    box.addEventListener('click', () => {

        if (turnO) {
            box.innerText = "O"
            turnO = false
        }
        else {
            box.innerText = "X"
            turnO = true
        }
        box.disabled = true
        checkwinner();
    })
})

const disblebox = () => {
    for (let box of boxes) {
        box.disabled = true;
    }
   
};
const enablebox = () => {
    for (let box of boxes) {
        box.disabled = false;
        box.innerText="";
    }
};

const showwinner = (winner) => {
    msg.innerText = `Congrulations, Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disblebox();
};

const checkwinner = () => {
    for (let pattern of win) {

        let pos1value = boxes[pattern[0]].innerText;
        let pos2value = boxes[pattern[1]].innerText;
        let pos3value = boxes[pattern[2]].innerText;

        if (pos1value != "" && pos2value != "" && pos3value != "") {
            if (pos1value === pos2value && pos2value === pos3value) {

                showwinner(pos1value);
            }
        }
    }

}

newgamebtn.addEventListener("click", resetgame)
reset.addEventListener("click", resetgame)
