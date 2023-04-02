// -global event listener (for the keydowns)
// - setInterval for the timer of the game
// - button to start the game and an event listener for that button (on click)
// 	- call on a function that display words
// 	- call on 
// - global event listener to iterate through the word and if that letter appears on the keydown, change the displayed "_" to letter, 
// - wins losses tracked through local storage and increment both on either event
// - 

var startButton = document.querySelector(".startButton");
var charmsImg = document.querySelector(".quiz").children[1];
var showGameButtons = document.querySelector("#gameButton0"); //must do this because if we used gameButton0, then it wouldn't allow us to change .textContent for the buttons later on
var userButton = document.querySelector(".gameButton")
var gameButton0 = document.querySelector("#gameButton0");
var gameButton1 = document.querySelector("#gameButton1");
var gameButton2 = document.querySelector("#gameButton2");
var gameButton3 = document.querySelector("#gameButton3");
var questionText = document.querySelector(".quiz").children[0];
var timerCount = document.querySelector(".timer").children[1];
var rightOrWrongText = document.querySelector(".quiz").children[12]
var timer
var count

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.setAttribute("style", "display:none;");

    for (let x=0;x<=4;x=x+1) {
        showGameButtons.setAttribute("style", "display:initial;")
        showGameButtons = document.querySelector(`#gameButton${x}`)
    }

    question1();
    timerFunc();
};

function timerFunc() {
    count = 30
    timerCount.textContent = count
    timer = setInterval(() => {
        count=count-1
        timerCount.textContent = count

        if (count <= 0) {
            clearInterval(timer);
            gameOver();
        }
    }, 1000);
}

function wrongAnswerFunc() {
    count = count-5
    if (count<0) {
        gameOver();
    }
    timerCount.textContent = count;
    rightOrWrongText.setAttribute("style", "display:initial;")
    rightOrWrongText.textContent = "Whoops! Not so smart today huh?"
}

function rightAnswerFunc() {
    rightOrWrongText.setAttribute("style", "display:initial;")
    rightOrWrongText.textContent = "Correct!"
}

function question1() {
    questionText.textContent = "What does the Fragile Strength charm do?";

    charmsImg.setAttribute("style", "display:block;")
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/7/7b/Fragile_Strength.png/revision/latest?cb=20180923025436")

    q1buttonText();

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", function (e) { //adds event listeners to the current gameButton
            if (e.currentTarget === gameButton2) {
                console.log("correct answer")
                rightAnswerFunc();
                question2();
            } else {
                console.log("wrong answer")
                wrongAnswerFunc();

            }
        })
    }

}

function q1buttonText() {
    gameButton0.textContent = "Decreases Nail Damage by 50%";
    gameButton1.textContent = "Instantly Explodes The Vessel";
    gameButton2.textContent = "Increases Nail Damage by 50%";
    gameButton3.textContent = "Downloads SilkSong";
}

function question2() {
    questionText.textContent = "What does the Fragile Greed charm do?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/b/b6/Fragile_Greed.png/revision/latest?cb=20180923025659")

    q2buttonText();

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", function (e) { //adds event listeners to the current gameButton
            if (e.currentTarget === gameButton0) {
                console.log("correct answer")
                rightAnswerFunc();
                question3();
            } else {
                console.log("wrong answer")
                wrongAnswerFunc();

            }
        })
    }

}

function q2buttonText() {
    gameButton0.textContent = "Increases Amount of Geo Dropped by Enemies";
    gameButton1.textContent = "Cornifer's Map Prices are Inflated";
    gameButton2.textContent = "Teleport the Player to Fungal Wastes";
    gameButton3.textContent = "Makes Soul Stones Shiny";
}

function question3() {
    questionText.textContent = "What does the Dream Wielder charm do?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/9/94/Dream_Wielder.png/revision/latest?cb=20180909170602")

    q3buttonText();

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", function (e) { //adds event listeners to the current gameButton
            if (e.currentTarget === gameButton3) {
                console.log("correct answer")
                rightAnswerFunc();
                question4();
            } else {
                console.log("wrong answer")
                wrongAnswerFunc();
            }
        })
    }

}

function q3buttonText() {
    gameButton0.textContent = "Sends Player to Colosseum of Fools";
    gameButton1.textContent = "Increases Infection Rate";
    gameButton2.textContent = "Summons a Pet";
    gameButton3.textContent = "Gives the Player a Dream Nail";
}

function question4() {
    questionText.textContent = "What does the Wayward Compass charm do?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest?cb=20180909165457")
    

    q4buttonText();

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", function (e) { //adds event listeners to the current gameButton
            if (e.currentTarget === gameButton2) {
                console.log("correct answer")
                rightAnswerFunc();
                gameOver();
            } else {
                console.log("wrong answer")
                wrongAnswerFunc();

            }
        })
    }

}

function q4buttonText() {
    gameButton0.textContent = "Points Towards Stag Stations";
    gameButton1.textContent = "Shows Location of Grimm Troupe";
    gameButton2.textContent = "The Strongest Charm in the Game";
    gameButton3.textContent = "Teleports the Player to Godhome";
}

function gameOver() {
    console.log("gameover")
    timerCount.textContent = "Game Over"
}

