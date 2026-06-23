//we will first start by declaring and intializing a variable player = x that will turn later to o after it is clicked, then x again
let player = "X"
//after that i want the player to click on the box and x appears
const board = document.querySelector(".board")
board.addEventListener("click", function(event){
    const clk = event.target //this is to know which square is clicked inside the board
// now basically i got the board from html and when i click it, it stores in clk
clk.textContent = player //this shows x instead of the number
console.log(clk)

//if statement so that if its x it turns to o and if o, then it turns to x

if (player === "X") {
     player = "O"
} else if (player === "O") {
     player = "X"
}

const turnn = document.querySelector("#turn")
turnn.textContent= "It's" + " " + player +  "'s turn"


})




 

