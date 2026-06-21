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
    let newWeight = prompt("Entrez votre poids:");

    if (newWeight === null) return;

    newWeight = parseFloat(newWeight);

    if (!isNaN(newWeight) && newWeight<100 && newWeight>30) {
        document.querySelector("#weight-value").textContent = newWeight;
    } else {
        alert("Erreur : Veuillez entrer un nombre valide entre 30 et 100 (non inclus)");
    }
}

function handleFastingClick(){
    let newFasting = prompt("Entrez combien de temps vous jeûnez (en heures):");

    if (newFasting === null) return;

    newFasting = parseInt(newFasting);

    let reste = 24 - newFasting;
    if (!isNaN(newFasting) && newFasting>0 && newFasting<24) {
        document.querySelector("#fasting-value").textContent = newFasting + "/" + reste;
    } else {
        alert("Erreur veuillez entrer un nombre valide entre 1 et 23");
    }
}

allCards.forEach(card =>{
    card.addEventListener("click", handleDayClick);
});

weightValue.addEventListener("click", handleStatsClick);

const fastingValue = document.querySelector(".fasting-card");

fastingValue.addEventListener("click", handleFastingClick);