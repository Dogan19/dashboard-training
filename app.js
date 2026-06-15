const allCards = document.querySelectorAll(".day-card");

function changeColor(e){

    e.currentTarget.style.backgroundColor = "green";

}

allCards.forEach(card =>{
    card.addEventListener("click", changeColor);
});