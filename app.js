const allCards = document.querySelectorAll(".day-card");

function changeColor(e){
    e.currentTarget.classList.toggle("selected");

    console.log(e.currentTarget.querySelector("h3").textContent);
}

allCards.forEach(card =>{
    card.addEventListener("click", changeColor);
});