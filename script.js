// rules js
const ruleButton = document.getElementsByClassName("rule-btn");
const rules = document.getElementsByClassName("rules");
const overlay = document.getElementsByClassName("overlay");
const closeButton = document.getElementsByClassName("close-btn");

const number = document.getElementsByClassName("number");
let zero = 0;
number[0].textContent = zero;

ruleButton[0].addEventListener("click", () => {
    rules[0].style.display = "flex";
    overlay[0].style.display = "block";
})

closeButton[0].addEventListener("click", () => {
    rules[0].style.display = "none";
    overlay[0].style.display = "none";
})

// rock paper scissors js
const triangle = document.getElementsByClassName("triangle");

const rock = document.getElementsByClassName("rock");
const rockImage = document.getElementsByClassName("rock-image");

const paper = document.getElementsByClassName("paper");
const paperImage = document.getElementsByClassName("paper-image");

const scissors = document.getElementsByClassName("scissors");
const scissorsImage = document.getElementsByClassName("scissors-image");

const shadow = document.getElementsByClassName("shadow");
const texts = document.getElementsByClassName("paragraphs");

const leftText = document.getElementsByClassName("You");
const rightText = document.getElementsByClassName("the_guy_she_told_you_not_to_worry_about");

const winORlose = document.getElementsByClassName("win-or-lose");
const playAgain = document.getElementsByClassName("playAgain");

const circleContainer = document.getElementsByClassName("circle-container");
const secondCircleContainer = document.getElementsByClassName("circle-container-2")

const bot = document.getElementsByClassName("bot");
const botImage = document.getElementsByClassName("botImage");

const images = [rockImage[0].src, paperImage[0].src, scissorsImage[0].src];


function borderWhenMobile() {
    if (botImage[0].src == rockImage[0].src) {
        bot[0].style.border = '15px solid #dc3553';
    }
    else if (botImage[0].src == paperImage[0].src) {
        bot[0].style.border = '15px solid #4d6af4';

    }
    else if (botImage[0].src == scissorsImage[0].src) {
        bot[0].style.border = '15px solid #eba217';

    }
}
function borderWhen() {
    if (botImage[0].src == rockImage[0].src) {

        bot[0].style.border = '30px solid #dc3553';
    }
    else if (botImage[0].src == paperImage[0].src) {

        bot[0].style.border = '30px solid #4d6af4';
    }
    else if (botImage[0].src == scissorsImage[0].src) {

        bot[0].style.border = '30px solid #eba217';
    }
}



function animation() {
    bot[0].classList.add("right-box");
    leftText[0].classList.add("left-p");
    rightText[0].classList.add("right-p");
    setTimeout(function () {
        shadow[0].style.display = "none"
    }, 1400);
    setTimeout(function () {
        winORlose[0].style.display = "block";
        playAgain[0].style.display = "block";
        circleContainer[0].style.display = "flex";
    }, 3000);
}
function functionOfRockMobile() {
    if (window.innerWidth <= 500) {
        leftText[0].classList.remove("left-p");
        rightText[0].classList.remove("right-p");
        bot[0].classList.remove("right-box");
        shadow[0].classList.add("shadow-2");


        borderWhenMobile();
        bot[0].classList.add("robot");
        bot[0].classList.add("fadein-mobile")
        leftText[0].classList.add("mobile-p");
        rightText[0].classList.add("mobile-p2");
        winORlose[0].classList.add("win-or-lose-mobile");
        playAgain[0].classList.add("playAgain-mobile");
        rock[0].style.width = '125px';
        rock[0].style.height = '125px';
        rock[0].style.border = '15px solid #dc3553';
        rock[0].style.transform = 'translate(-124%, -95%)';
        rock[0].classList.remove("left-box");
    }
}
function functionOfPaperMobile() {
    if (window.innerWidth <= 500) {
        leftText[0].classList.remove("left-p");
        rightText[0].classList.remove("right-p");
        bot[0].classList.remove("right-box");
        shadow[0].classList.add("shadow-2");


        borderWhenMobile();
        bot[0].classList.add("robot");
        bot[0].classList.add("fadein-mobile")
        leftText[0].classList.add("mobile-p");
        rightText[0].classList.add("mobile-p2");
        winORlose[0].classList.add("win-or-lose-mobile");
        playAgain[0].classList.add("playAgain-mobile");
        paper[0].style.width = '125px';
        paper[0].style.height = '125px';
        paper[0].style.border = '15px solid #4d6af4';
        paper[0].style.transform = 'translate(-124%, -95%)';
        paper[0].classList.remove("left-box");
    }
}
function functionOfScissorsMobile() {
    if (window.innerWidth <= 500) {
        leftText[0].classList.remove("left-p");
        rightText[0].classList.remove("right-p");
        bot[0].classList.remove("right-box");
        shadow[0].classList.add("shadow-2");


        borderWhenMobile();
        bot[0].classList.add("robot");
        bot[0].classList.add("fadein-mobile")
        leftText[0].classList.add("mobile-p");
        rightText[0].classList.add("mobile-p2");
        winORlose[0].classList.add("win-or-lose-mobile");
        playAgain[0].classList.add("playAgain-mobile");
        scissors[0].style.width = '125px';
        scissors[0].style.height = '125px';
        scissors[0].style.border = '15px solid #eba217';
        scissors[0].style.transform = 'translate(-124%, -95%)';
        scissors[0].classList.remove("left-box");
    }
}


function functionOfRock() {
    rock[0].style.pointerEvents = 'none';
    triangle[0].style.display = "none";
    scissors[0].style.display = "none";
    paper[0].style.display = "none";

    shadow[0].style.display = "block";
    texts[0].style.display = "inline-block";
    texts[1].style.display = "inline-block";

    // animation
    setTimeout(function () {
        bot[0].style.display = "flex";;
    }, 600);
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    botImage[0].src = randomImage;
    borderWhen();
    botImage[0].style.width = '40%';
    botImage[0].style.height = '40%';

    rock[0].classList.add("left-box");
    animation();


    rock[0].style.width = '250px';
    rock[0].style.height = '250px';
    rock[0].style.transform = 'translate(-135%, -25%)';
    rock[0].style.border = '30px solid #dc3553';
    rockImage[0].style.width = '40%';
    rockImage[0].style.height = '40%';

    functionOfRockMobile();

    // who won
    whoWonRock();


}

function functionOfPaper() {
    paper[0].style.pointerEvents = 'none';
    triangle[0].style.display = "none";
    scissors[0].style.display = "none";
    rock[0].style.display = "none";

    shadow[0].style.display = "block";
    texts[0].style.display = "inline-block";
    texts[1].style.display = "inline-block";

    setTimeout(function () {
        bot[0].style.display = "flex";;
    }, 600);
    bot[0].classList.add("fade");
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    botImage[0].src = randomImage;
    borderWhen();
    botImage[0].style.width = '40%';
    botImage[0].style.height = '40%';


    paper[0].classList.add("left-box");
    animation();



    paper[0].style.width = '250px';
    paper[0].style.height = '250px';
    paper[0].style.transform = 'translate(-135%, -25%)';
    paper[0].style.border = '30px solid #4d6af4';
    paperImage[0].style.width = '40%';
    paperImage[0].style.height = '40%';

    functionOfPaperMobile();



    whoWonPaper();
}

function functionOfScissors() {
    scissors[0].style.pointerEvents = 'none';
    triangle[0].style.display = "none";
    paper[0].style.display = "none";
    rock[0].style.display = "none";

    shadow[0].style.display = "block";
    texts[0].style.display = "inline-block";
    texts[1].style.display = "inline-block";

    setTimeout(function () {
        bot[0].style.display = "flex";;
    }, 600);
    bot[0].classList.add("fade");
    let randomIndex = Math.floor(Math.random() * images.length);
    let randomImage = images[randomIndex];
    botImage[0].src = randomImage;
    borderWhen();
    botImage[0].style.width = '40%';
    botImage[0].style.height = '40%';

    scissors[0].classList.add("left-box");
    animation();



    scissors[0].style.width = '250px';
    scissors[0].style.height = '250px';
    scissors[0].style.transform = 'translate(-135%, -25%)';
    scissors[0].style.border = '30px solid #eba217';
    scissorsImage[0].style.width = '40%';
    scissorsImage[0].style.height = '40%';


    functionOfScissorsMobile();

    whoWonScissors();
}
rock[0].addEventListener("click", functionOfRock);
paper[0].addEventListener("click", functionOfPaper);
scissors[0].addEventListener("click", functionOfScissors);


const rps = [rock[0], paper[0], scissors[0]];
// play again button
playAgain[0].addEventListener("click", () => {
    // removing general
    playAgain[0].style.display = "none";
    winORlose[0].style.display = "none";
    triangle[0].style.display = "block";
    shadow[0].style.display = "none";
    circleContainer[0].style.display = "none";
    secondCircleContainer[0].style.display = "none";
    texts[0].style.display = "none";
    texts[1].style.display = "none";
    bot[0].style.display = "none";

    // removing for rock
    rock[0].style.display = "flex";
    rock[0].style.width = '160px';
    rock[0].style.height = '160px';
    rock[0].style.transform = 'translate(-50%, 5%)';
    rock[0].style.border = '20px solid #dc3553';
    rock[0].classList.remove("left-box");
    rockImage[0].style.width = 'auto';
    rockImage[0].style.height = 'auto';

    // removing for paper
    paper[0].style.display = "flex";
    paper[0].style.width = '160px';
    paper[0].style.height = '160px';
    paper[0].style.transform = 'translate(-135%, -135%)';
    paper[0].style.border = '20px solid #4d6af4';
    paper[0].classList.remove("left-box");
    paperImage[0].style.width = 'auto';
    paperImage[0].style.height = 'auto';

    // removing for scissors
    scissors[0].style.display = "flex";
    scissors[0].style.width = '160px';
    scissors[0].style.height = '160px';
    scissors[0].style.transform = 'translate(35%, -135%)';
    scissors[0].style.border = '20px solid #eba217';
    scissors[0].classList.remove("left-box");
    scissorsImage[0].style.width = 'auto';
    scissorsImage[0].style.height = 'auto';

    rock[0].style.pointerEvents = 'auto';
    paper[0].style.pointerEvents = 'auto';
    scissors[0].style.pointerEvents = 'auto';


    // mobile
    if (window.innerWidth <= 500) {
        paper[0].style.width = '125px';
        paper[0].style.height = '125px';
        paper[0].style.border = '15px solid #4d6af4';
        paper[0].style.transform = 'translate(-124%, -95%)';
        paperImage[0].style.width = "45px";
        paperImage[0].style.height = "45px";


        scissors[0].style.width = '125px';
        scissors[0].style.height = '125px';
        scissors[0].style.border = '15px solid #eba217';
        scissors[0].style.transform = 'translate(28%, -95%)';
        scissorsImage[0].style.width = "45px";
        scissorsImage[0].style.height = "45px";


        rock[0].style.width = '125px';
        rock[0].style.height = '125px';
        rock[0].style.border = '15px solid #dc3553';
        rock[0].style.transform = 'translate(-46.9%, 18%)';
        rockImage[0].style.width = "45px";
        rockImage[0].style.height = "45px";
    }




})



function whoWonRock() {
    if (botImage[0].src == rockImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "draw";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "flex";
        }, 3000)
    }



    else if (botImage[0].src == paperImage[0].src) {

        setTimeout(function () {
            winORlose[0].textContent = "You lose";
            circleContainer[0].style.display = "none";
            secondCircleContainer[0].style.display = "flex";
            if (number[0].textContent > 0) {
                number[0].textContent--
            }
        }, 3000)

    }

    else if (botImage[0].src == scissorsImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "You win";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "none";
            number[0].textContent++
        }, 3000)

    }
}


function whoWonPaper() {
    if (botImage[0].src == rockImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "You win";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "none";
            number[0].textContent++
        }, 3000)
    }



    else if (botImage[0].src == paperImage[0].src) {

        setTimeout(function () {
            winORlose[0].textContent = "draw";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "flex";
        }, 3000)

    }

    else if (botImage[0].src == scissorsImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "You lose";
            circleContainer[0].style.display = "none";
            secondCircleContainer[0].style.display = "flex";
            if (number[0].textContent > 0) {
                number[0].textContent--
            }
        }, 3000)

    }
}


function whoWonScissors() {
    if (botImage[0].src == rockImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "You lose";
            circleContainer[0].style.display = "none";
            secondCircleContainer[0].style.display = "flex";
            if (number[0].textContent > 0) {
                number[0].textContent--
            }
        }, 3000)
    }



    else if (botImage[0].src == paperImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "You win";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "none";
            number[0].textContent++
        }, 3000)

    }

    else if (botImage[0].src == scissorsImage[0].src) {
        setTimeout(function () {
            winORlose[0].textContent = "draw";
            circleContainer[0].style.display = "flex";
            secondCircleContainer[0].style.display = "flex";
        }, 3000)

    }
}