const firstCard = document.querySelector(".day-card");
const secondCard = document.querySelector(".thursday");

function changeColor(e){

    e.currentTarget.style.backgroundColor = "green";

}

firstCard.addEventListener("click", changeColor);
secondCard.addEventListener("click", changeColor);