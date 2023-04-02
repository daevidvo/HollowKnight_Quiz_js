var startButton = document.querySelector(".startButton");
var charmsImg = document.querySelector(".quiz").children[1];
var showGameButtons = document.querySelector("#gameButton0"); //must do this because if we used gameButton0, then it wouldn't allow us to change .textContent for the buttons later on
var gameButton0 = document.querySelector("#gameButton0");
var gameButton1 = document.querySelector("#gameButton1");
var gameButton2 = document.querySelector("#gameButton2");
var gameButton3 = document.querySelector("#gameButton3");
var questionText = document.querySelector(".quiz").children[0];
var timerCount = document.querySelector(".timer").children[1];
var rightOrWrongText = document.querySelector(".quiz").children[13];
var hrLine = document.querySelector(".quiz").children[12];
var formSubmission = document.querySelector("form")
var highScores = document.querySelector(".high-scores")
var userName = document.createElement("p")
var correctAnswer
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


function q1AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        console.log("correct answer")
        rightAnswerFunc();
        question2();
        hrLine.setAttribute("style", "display:inherit;")
    } else {
        console.log("wrong answer")
        wrongAnswerFunc();
        question2();
        hrLine.setAttribute("style", "display:inherit;")
    }
}

function question1() {
    questionText.textContent = "What does the Fragile Strength charm do?";

    charmsImg.setAttribute("style", "display:block;")
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/7/7b/Fragile_Strength.png/revision/latest?cb=20180923025436")

    q1buttonText();

    correctAnswer = gameButton2

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.addEventListener("click", q1AnswerFunc)
    }

}

function q1buttonText() {
    gameButton0.textContent = "Decreases Nail Damage by 50%";
    gameButton1.textContent = "Instantly Explodes The Vessel";
    gameButton2.textContent = "Increases Nail Damage by 50%";
    gameButton3.textContent = "Downloads SilkSong";
}

function q2AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        console.log("correct answer")
        rightAnswerFunc();
        question3();
    } else {
        console.log("wrong answer")
        wrongAnswerFunc();
        question3();
    }
}

function question2() {
    questionText.textContent = "What does the Fragile Greed charm do?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/b/b6/Fragile_Greed.png/revision/latest?cb=20180923025659")

    q2buttonText();

    correctAnswer = gameButton0

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.removeEventListener("click", q1AnswerFunc)
        showGameButtons.addEventListener("click", q2AnswerFunc)
    }

}

function q2buttonText() {
    gameButton0.textContent = "Increases Amount of Geo Dropped by Enemies";
    gameButton1.textContent = "Cornifer's Map Prices are Inflated";
    gameButton2.textContent = "Teleport the Player to Fungal Wastes";
    gameButton3.textContent = "Makes Soul Stones Shiny";
}

function q3AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        console.log("correct answer")
        rightAnswerFunc();
        question4();
    } else {
        console.log("wrong answer")
        wrongAnswerFunc();
        question4();
    }
}

function question3() {
    questionText.textContent = "What does the Dream Wielder charm do?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/9/94/Dream_Wielder.png/revision/latest?cb=20180909170602")

    q3buttonText();

    correctAnswer = gameButton3

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.removeEventListener("click", q2AnswerFunc)
        showGameButtons.addEventListener("click", q3AnswerFunc)
    }

}

function q3buttonText() {
    gameButton0.textContent = "Sends Player to Colosseum of Fools";
    gameButton1.textContent = "Increases Infection Rate";
    gameButton2.textContent = "Summons a Pet";
    gameButton3.textContent = "Gives the Player a Dream Nail";
}

function q4AnswerFunc(e) {
    if (e.currentTarget === correctAnswer) {
        console.log("correct answer")
        rightAnswerFunc();
        gameOver();
    } else {
        console.log("wrong answer")
        wrongAnswerFunc();
        gameOver();
    }
}

function question4() {
    questionText.textContent = "What is Wayward Compass charm?";
    charmsImg.setAttribute("src", "https://static.wikia.nocookie.net/hollowknight/images/7/7d/Wayward_Compass.png/revision/latest?cb=20180909165457")
    

    q4buttonText();

    correctAnswer = gameButton2

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`) //changes current gameButton based on the iteration of the for loop
        showGameButtons.removeEventListener("click", q3AnswerFunc)
        showGameButtons.addEventListener("click", q4AnswerFunc)
    }

}

function q4buttonText() {
    gameButton0.textContent = "Points Towards Stag Stations";
    gameButton1.textContent = "Shows Location of Grimm Troupe";
    gameButton2.textContent = "The Strongest Charm in the Game";
    gameButton3.textContent = "Teleports the Player to Godhome";
}

function playAgainFunc() {
    startGame();
}

function restartGame() {
    formSubmission.setAttribute("style", "display:none;")
    hrLine.setAttribute("style", "display:none;");
    rightOrWrongText.textContent = "";

    for (let x=0;x<4;x=x+1) {
        showGameButtons = document.querySelector(`#gameButton${x}`)
        showGameButtons.removeEventListener("click", q4AnswerFunc)
    }

    startGame();
    let playAgainButton = gameButton2
    playAgainButton.removeEventListener("click", restartGame)
}

function nameTranslate() {

    console.log("testing")
    let translateArr = JSON.parse(localStorage.getItem("name"))
    if (translateArr === null) {
        return;
    }
    userName.textContent = translateArr[0] + " - " + translateArr[1]
    highScores.appendChild(userName)
}

function saveHighScores(e) {
    e.preventDefault();
    localStorage.setItem("name", JSON.stringify([document.querySelector("#highScoreInput").value, count]))
    nameTranslate();
}

nameTranslate();

function gameOver() {
    console.log("gameover")
    timerCount.textContent = "Game Over"

    gameButton2.removeEventListener("click", q4AnswerFunc)
    let playAgainButton = gameButton2
    playAgainButton.addEventListener("click", restartGame)

    playAgainButton.textContent = "Play Again?"

    clearInterval(timer)
    console.log(count)

    for (let x=0;x<=2;x=x+1) {
        showGameButtons.setAttribute("style", "display:none;")
        showGameButtons = document.querySelector(`#gameButton${x}`)
    }

    charmsImg.setAttribute("src", "https://media.tenor.com/mAG1m_7eazsAAAAd/hollow-knight-dance.gif")

    questionText.textContent = "Game Over!"
    hrLine.setAttribute("style", "display:none;")
    rightOrWrongText.textContent = 'Thank You for Playing!'

    formSubmission.setAttribute("style", "display:flex;")
    formSubmission.addEventListener("submit", saveHighScores)

}