import { Casino } from "./Casino";

function startGame() {

    var messagesElement = document.getElementById("display");
    messagesElement.innerText = "Welcome to the Typescript Casino";
    let casino: Casino = new Casino;
    casino.init();
}

document.getElementById('submit').addEventListener('click', startGame);