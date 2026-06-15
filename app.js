const allCards = document.querySelectorAll(".day-card");

function handleDayClick(e){
    e.currentTarget.classList.toggle("selected");

    document.querySelector("h2").textContent = e.currentTarget.querySelector("h3").textContent;
}

allCards.forEach(card =>{
    card.addEventListener("click", handleDayClick);
});