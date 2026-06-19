const allCards = document.querySelectorAll(".day-card");
const workoutContent = document.querySelector("#workout-content");
const workouts = {
    "Monday": "Chest/Biceps",
    "Tuesday": "Street(Push/Full Shoulders)",
    "Wednesday": "Back/Triceps",
    "Thursday": "Cardio",
    "Friday": "Legs",
    "Saturday": "Street Full Body/Core",
    "Sunday": "Complete rest"
};
const weightValue = document.querySelector(".weight-card");

function handleDayClick(e){
    let clickedDay;

    document.querySelectorAll(".day-card").forEach(card =>{
        card.classList.remove("selected");
    });

    e.currentTarget.classList.toggle("selected");

    clickedDay = e.currentTarget.querySelector("h3").textContent;
    workoutContent.textContent = workouts[clickedDay];
}

function handleStatsClick(){
    let newWeight = parseFloat(prompt("Entrez votre poids:"));

    if (!isNaN(newWeight) && newWeight<100 && newWeight>30) {
        document.querySelector("#weight-value").textContent = newWeight;
    } else {
        alert("Erreur");
    }
}

function handleFastingClick(){
    let newFasting = prompt("Modifier l'objectif de jeûne (en heures) :");

    if (newFasting) {
        document.querySelector("#fasting-value").textContent = newFasting;
    }
}

allCards.forEach(card =>{
    card.addEventListener("click", handleDayClick);
});

weightValue.addEventListener("click", handleStatsClick);

const fastingValue = document.querySelector(".fasting-card");

fastingValue.addEventListener("click", handleFastingClick);