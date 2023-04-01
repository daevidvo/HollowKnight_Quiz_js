// -global event listener (for the keydowns)
// - setInterval for the timer of the game
// - button to start the game and an event listener for that button (on click)
// 	- call on a function that display words
// 	- call on 
// - global event listener to iterate through the word and if that letter appears on the keydown, change the displayed "_" to letter, 
// - wins losses tracked through local storage and increment both on either event
// - 


var startButton = document.querySelector(".startButton");
var gameButton = document.querySelector(".gameButton")
var gameButtonX = document.querySelector("#gameButton0")


startButton.addEventListener("click", startGame);

function startGame() {
    console.log()
    
    startButton.setAttribute("style", "display:none;");
    for (let x=0;x<3;x=x+1) {
        gameButtonX.setAttribute("style", "display:initial;")
        gameButtonX = document.querySelector(`#gameButton${x}`)
        
    }
}