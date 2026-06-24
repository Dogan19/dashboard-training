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
const WEIGHT_MIN = 30;
const WEIGHT_MAX = 100;
const FASTING_MIN = 0;
const FASTING_MAX = 24;

function handleDayClick(e){
    let clickedDay;

    allCards.forEach(card =>{
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

    if (!isNaN(newWeight) && newWeight<WEIGHT_MAX && newWeight>WEIGHT_MIN) {
        document.querySelector("#weight-value").textContent = newWeight;
    } else {
        alert(`Erreur : Veuillez entrer un nombre valide entre ${WEIGHT_MIN} et ${WEIGHT_MAX} (non inclus)`);
    }
}

function handleFastingClick(){
    let newFasting = prompt("Entrez combien de temps vous jeûnez (en heures):");

    if (newFasting === null) return;

    newFasting = parseInt(newFasting);

    let reste = FASTING_MAX - newFasting;
    if (!isNaN(newFasting) && newFasting>FASTING_MIN && newFasting<FASTING_MAX) {
        document.querySelector("#fasting-value").textContent = newFasting + "/" + reste;
    } else {
        alert(`Erreur veuillez entrer un nombre valide entre ${FASTING_MIN} et ${FASTING_MAX}`);
    }
}

allCards.forEach(card =>{
    card.addEventListener("click", handleDayClick);
});

weightValue.addEventListener("click", handleStatsClick);

const fastingValue = document.querySelector(".fasting-card");

fastingValue.addEventListener("click", handleFastingClick);