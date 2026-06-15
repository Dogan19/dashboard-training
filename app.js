const allCards = document.querySelectorAll(".day-card");

function changeColor(e){
    e.currentTarget.classList.toggle("selected");
}

allCards.forEach(card =>{
    card.addEventListener("click", changeColor);
});