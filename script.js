const main = document.querySelector("main");

const answer1 = document.createElement("p");
answer1.textContent = "Frontend Mentor offers realistic coding challenges to help " +
    "developers improve their frontend coding skills with projects in HTML, CSS, and JavaScript. " +
    "It's suitable for all levels and ideal for portfolio building.";
const answer2 = document.createElement("p");
answer2.textContent = "Yes, Frontend Mentor offers both free and premium coding challenges, " +
"with the free option providing access to a range of projects suitable for all skill levels.";
const answer3 = document.createElement("p");
answer3.textContent = "Yes, you can use projects completed on Frontend Mentor in your portfolio. " +
"It's an excellent way to showcase your skills to potential employers!";
const answer4 = document.createElement("p");
answer4.textContent = "The best place to get help is inside Frontend Mentor's Discord community. " +
"There's a help channel where you can ask questions and seek support from other community members.";

const answers = [answer1, answer2, answer3, answer4];
answers.map((answer, index) => {
    answer.style.fontWeight = 400;
    answer.style.color = "hsl(292, 16%, 49%)";
    answer.style.marginBottom = "1.5rem";
});

const btns = document.querySelectorAll('img[id$="button"]');
const pBtns = document.querySelectorAll(".pBtn");
const lines = document.querySelectorAll('hr[id$="line"]');

for (let i = 0; i<lines.length; i++){
    main.insertBefore(answers[i], lines[i]);
    answers[i].style.display = "none";
}

let counter = 1;
function isClicked(index){
    const isVisible = answers[index].classList.toggle("visible");

    if (isVisible){
        answers[index].style.display = "block";
        btns[index].src = "images/icon-minus.svg";
    } else {
        btns[index].src = "images/icon-plus.svg";
        answers[index].style.display = "none";
    }
}

btns.forEach((currentElement, index) => {
    currentElement.addEventListener("click",function(){isClicked(index)});
});
pBtns.forEach((currentElement, index) => {
    currentElement.addEventListener("click",function(){isClicked(index)});
});

