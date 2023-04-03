var startButton = document.querySelector(".startButton");
var charmsImg = document.querySelector(".quiz").children[1]; //allows us to change the img src to the image of the charms in question
var showGameButtons = document.querySelector("#gameButton0"); //must do this because if we used gameButton0, then it wouldn't allow us to change .textContent for the buttons later on
var gameButton0 = document.querySelector("#gameButton0");
var gameButton1 = document.querySelector("#gameButton1");
var gameButton2 = document.querySelector("#gameButton2");
var gameButton3 = document.querySelector("#gameButton3");
var questionText = document.querySelector(".quiz").children[0];
var timerCount = document.querySelector(".timer").children[1];
var rightOrWrongText = document.querySelector(".quiz").children[13];
var hrLine = document.querySelector(".quiz").children[12];
var formSubmission = document.querySelector("form");
var highScores = document.querySelector(".high-scores");
var userName = document.createElement("p");
var correctAnswer;
var timer;
var count;

startButton.addEventListener("click", startGame);

function startGame() {
    startButton.setAttribute("style", "display:none;");

    for (let x=0;x<=4;x=x+1) {
        showGameButtons.setAttribute("style", "display:initial;");
        showGameButtons = document.querySelector(`#gameButton${x}`);
    };

    question1();
    timerFunc();
};

function timerFunc() {
    count = 30; //number of seconds the game is
    timerCount.textContent = count; //this is here to immediately display timer number once game starts
    timer = setInterval(() => { //setInterval needs to be set to a variable so we can easily clear it later on
        count=count-1; //counts down the timer every second
        timerCount.textContent = count; //timer will repeatedly update its count

        if (count < 0) { //ends the game if the timer reaches 0
            clearInterval(timer);
            gameOver();
        };
    }, 1000);
};

function wrongAnswerFunc() {
    count = count-5;
    if (count<0) { //solves rare edge case where the timer count is < 5 and user answers any question other than the last one wrong, then it will continue game briefly
        gameOver();
    };
    timerCount.textContent = count; //sets the timer to the new -5 number
    rightOrWrongText.setAttribute("style", "display:initial;"); //shows the text below on initial wrong answer
    rightOrWrongText.textContent = "Whoops! Not so smart today huh?";
};

function rightAnswerFunc() {
    rightOrWrongText.setAttribute("style", "display:initial;"); //shows the text below on initial right answer
    rightOrWrongText.textContent = "Correct!";
};


function q1AnswerFunc(e) { 
    if (e.currentTarget === correctAnswer) { //if the user clicks on the right button, then it executes code in these brackets
        rightAnswerFunc();
        question2();
        hrLine.setAttribute("style", "display:inherit;"); //shows the hr line
    } else { //if the user is wrong, then it executes code in these brackets
        wrongAnswerFunc();
        question2();
        hrLine.setAttribute("style", "display:inherit;");
    };
};

function question1() {
    questionText.textContent = "What does the Fragile Strength charm do?"; //sets the text for the question

    charmsImg.setAttribute("style", "display:block;"); //makes the charms img visible
    charmsImg.setAttribute("src", "./assets/images/Fragile_Strength.webp"); //changes the src of the img tag above

    q1buttonText(); //changes the button text to correspond with question#

    correctAnswer = gameButton2; //sets the correct button

    for (let x=0;x<4;x=x+1) { //iterates through four times to set event listeners for each button
        showGameButtons = document.querySelector(`#gameButton${x}`); //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", q1AnswerFunc); //sets event listener for click and executes q#AnswerFunc on click
    }
};

function q1buttonText() {
    gameButton0.textContent = "Decreases Nail Damage by 50%";
    gameButton1.textContent = "Instantly Explodes The Vessel";
    gameButton2.textContent = "Increases Nail Damage by 50%";
    gameButton3.textContent = "Downloads SilkSong";
};

function q2AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        rightAnswerFunc();
        question3();
    } else {
        wrongAnswerFunc();
        question3();
    };
};

function question2() {
    questionText.textContent = "What does the Fragile Greed charm do?";
    charmsImg.setAttribute("src", "./assets/images/Fragile_Greed.webp"); //changes the src of the img to the corresponding charm

    q2buttonText();

    correctAnswer = gameButton0;

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`);
        showGameButtons.removeEventListener("click", q1AnswerFunc); //remove the event listeners from previous question so -5 penalty doesn't stack and we can set the correct answer button properly
        showGameButtons.addEventListener("click", q2AnswerFunc); //adds new event listener. Each q#AnswerFunc differs so we can change question order if needed
    }
};

function q2buttonText() {
    gameButton0.textContent = "Increases Amount of Geo Dropped by Enemies";
    gameButton1.textContent = "Cornifer's Map Prices are Inflated";
    gameButton2.textContent = "Teleport the Player to Fungal Wastes";
    gameButton3.textContent = "Makes Soul Stones Shiny";
};

function q3AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        rightAnswerFunc();
        question4();
    } else {
        wrongAnswerFunc();
        question4();
    };
};

function question3() {
    questionText.textContent = "What does the Dream Wielder charm do?";
    charmsImg.setAttribute("src", "./assets/images/Dream_Wielder.webp");

    q3buttonText();

    correctAnswer = gameButton3;

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`);
        showGameButtons.removeEventListener("click", q2AnswerFunc);
        showGameButtons.addEventListener("click", q3AnswerFunc);
    }
};

function q3buttonText() {
    gameButton0.textContent = "Sends Player to Colosseum of Fools";
    gameButton1.textContent = "Increases Infection Rate";
    gameButton2.textContent = "Summons a Pet";
    gameButton3.textContent = "Gives the Player a Dream Nail";
};

function q4AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        rightAnswerFunc();
        gameOver();
    } else {
        wrongAnswerFunc();
        gameOver();
    };
};

function question4() {
    questionText.textContent = "What is Wayward Compass charm?";
    charmsImg.setAttribute("src", "./assets/images/Wayward_Compass.webp");
    

    q4buttonText();

    correctAnswer = gameButton2;

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`);
        showGameButtons.removeEventListener("click", q3AnswerFunc);
        showGameButtons.addEventListener("click", q4AnswerFunc);
    }
};

function q4buttonText() {
    gameButton0.textContent = "Points Towards Stag Stations";
    gameButton1.textContent = "Shows Location of Grimm Troupe";
    gameButton2.textContent = "The Strongest Charm in the Game";
    gameButton3.textContent = "Teleports the Player to Godhome";
};

function restartGame() {
    formSubmission.setAttribute("style", "display:none;"); //removes the high score form submission
    hrLine.setAttribute("style", "display:none;"); //removes the hr line just like if we were to play for the first time
    rightOrWrongText.textContent = ""; //removes the gray italic string below hr line

    for (let x=0;x<4;x=x+1) { //removes all remaining event listeners from the buttons
        showGameButtons = document.querySelector(`#gameButton${x}`);
        showGameButtons.removeEventListener("click", q4AnswerFunc);
    }

    startGame(); //plays game again
    let playAgainButton = gameButton2; //changed name so I don't get confused
    playAgainButton.removeEventListener("click", restartGame); //removes event listener from play again button in case it's still there after the game restarts
};

function nameTranslate() { //translates the json string from local storage to an array and displays it on the screen
    let translateArr = JSON.parse(localStorage.getItem("name"));
    if (translateArr === null) {
        return;
    } else if (translateArr[1]<0) { //solves edge case where a high score of -1 is possible
        translateArr[1] = 0
    }
    userName.textContent = translateArr[0] + " - " + translateArr[1]; //displays high score as "name" - "score"
    highScores.appendChild(userName); //appends the high score name and value to the high score section
};

function saveHighScores(e) {
    e.preventDefault(); //prevents form submission
    localStorage.setItem("name", JSON.stringify([document.querySelector("#highScoreInput").value, count])); //saves the name and timer count to localstorage
    nameTranslate();
};

nameTranslate();

function gameOver() { //function that ends the game
    timerCount.textContent = "Game Over";

    gameButton2.removeEventListener("click", q4AnswerFunc); //removes the event listener from the only remaining button
    let playAgainButton = gameButton2; //change var name so it doesn't confuse me later on
    playAgainButton.addEventListener("click", restartGame);
    playAgainButton.textContent = "Play Again?";

    clearInterval(timer); //clears the timer

    for (let x=0;x<=2;x=x+1) { //for loop to stop rendering all buttons but one
        showGameButtons.setAttribute("style", "display:none;");
        showGameButtons = document.querySelector(`#gameButton${x}`);
    };

    charmsImg.setAttribute("src", "./assets/images/hollow-knight-dance.gif"); //changes the img

    questionText.textContent = "Game Over!";
    rightOrWrongText.textContent = 'Thank You for Playing!';

    formSubmission.setAttribute("style", "display:flex;"); //displays the high score form
    formSubmission.addEventListener("submit", saveHighScores); //event listener to the submit button
};