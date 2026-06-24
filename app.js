//we will first start by declaring and intializing a variable player = x that will turn later to o after it is clicked, then x again
let player = "X"
let memory = ["", "", "", "", "", "", "", "", ""] //this empty array is so that when i click it saves it. Basically it will have its own memory
let gameOver = false //nobody has won yet


const winningCombinations = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6] // I copied them from the internet (there is no way I'm writing all of this)
];


// i want the player to click on the box and x appears
const board = document.querySelector(".board")
const turnn = document.querySelector("#turn")
const reset = document.querySelector("#reset")
const squares = document.querySelectorAll(".sqr")

board.addEventListener("click", function(event){
   
    const clk = event.target //this is to know which square is clicked inside the board
    if  (gameOver === true) {
        return
    }

    if (clk.textContent !== "") {
        return
    }


clk.textContent = player //this shows x instead of the number
console.log(clk)

memory[clk.id] = player

 for (let i = 0; i < winningCombinations.length; i++) { 
        const combo = winningCombinations[i] 
        if (memory[combo[0]] === player && memory[combo[1]] === player && memory[combo[2]] === player) {
            turnn.textContent = player + " wins"
            gameOver = true
            return
        } // this means check memory [0],[1],[2] wjich saves alot of time rather than writing all of them (I'm lost😔)
    }

    if (!memory.includes("")) {
        turnn.textContent = "It's a tie!"
        gameOver = true
        return
    }

   

    //if statement so that if its x it turns to o and if o, then it turns to x

if (player === "X") {
     player = "O"
} else if (player === "O") {
     player = "X"
}

turnn.textContent= "It's" + " " + player +  "'s turn"





})


reset.addEventListener("click", function() {
    player = "X"
    memory = ["", "", "", "", "", "", "", "", ""]
    gameOver = false
    squares.forEach(function(square) {
square.textContent = ""
    })

    turnn.textContent = "It's X's turn"
})


 

