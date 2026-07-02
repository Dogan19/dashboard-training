// DOM Elements 
const allCards = document.querySelectorAll(".day-card");
const workoutContent = document.querySelector("#workout-content");
const weightValue = document.querySelector(".weight-card");
const fastingValue = document.querySelector(".fasting-card");
const creatineDate = document.querySelector("#creatine-date");


// Constants
const workouts = {
    "Monday": "Chest/Biceps",
    "Tuesday": "Street(Push/Full Shoulders)",
    "Wednesday": "Back/Triceps",
    "Thursday": "Cardio",
    "Friday": "Legs",
    "Saturday": "Street Full Body/Core",
    "Sunday": "Complete rest"
};
const WEIGHT_MIN = 30;
const WEIGHT_MAX = 100;
const FASTING_MIN = 0;
const FASTING_MAX = 24;
const DAYS_OF_WEEK = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];


// Initialisation & LocalStorage
getQuote();

let weightHistory = JSON.parse(localStorage.getItem("historiquePoids")) || [];
if (weightHistory.length > 0){
    document.querySelector("#weight-value").textContent = weightHistory[weightHistory.length - 1];
}

let todayDate = new Date();
let currentDate = creatineDate.dataset.date;
currentDate = new Date(currentDate);
let timeElapsed = todayDate - currentDate;
timeElapsed /= (1000 * 60 * 60 * 24);
timeElapsed = Math.floor(timeElapsed);
creatineDate.textContent += ` (${timeElapsed} jours)`;

let fastingHistory = JSON.parse(localStorage.getItem("historiqueJeune")) || [];
if (fastingHistory.length > 0){
    let lastFasting = fastingHistory[fastingHistory.length - 1];
    let fastingLeft = FASTING_MAX - lastFasting;
    document.querySelector("#fasting-value").textContent = `${lastFasting}/${fastingLeft}`;
}

let currentDayName = DAYS_OF_WEEK[new Date().getDay()];
let todaysWorkout = workouts[currentDayName];
workoutContent.textContent = todaysWorkout;


// Functions
function handleDayClick(e){
    let clickedDay;

    if (e.currentTarget.classList.contains("selected")) {
        e.currentTarget.classList.remove("selected");
        workoutContent.textContent = "Sélectionnez un jour pour voir votre séance";
        return;
    } 

    allCards.forEach(card =>{
        card.classList.remove("selected");
    });

    e.currentTarget.classList.toggle("selected");

    clickedDay = e.currentTarget.querySelector("h3").textContent;
    workoutContent.textContent = workouts[clickedDay];
}

function handleStatsClick(){
    let newWeight = prompt("Entrez votre poids:");

    if (newWeight === null || newWeight.trim() === "") return;

    newWeight = parseFloat(newWeight);

    if (!isNaN(newWeight) && newWeight<WEIGHT_MAX && newWeight>WEIGHT_MIN) {
        document.querySelector("#weight-value").textContent = newWeight;
        weightHistory.push(newWeight);
        localStorage.setItem("historiquePoids", JSON.stringify(weightHistory));
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
        document.querySelector("#fasting-value").textContent = `${newFasting}/${reste}`;
        fastingHistory.push(newFasting);
        localStorage.setItem("historiqueJeune", JSON.stringify(fastingHistory));
    } else {
        alert(`Erreur veuillez entrer un nombre valide entre ${FASTING_MIN} et ${FASTING_MAX}`);
    }
}

async function getQuote(){
    let quote = document.querySelector("#quote");
    let characterAnime = document.querySelector("#character-anime");
    
    try {

        let animeAPI = await fetch("https://api.animechan.io/v1/quotes/random");
        let responseAPI = await animeAPI.json();

        quote.textContent = responseAPI.data.content;
        characterAnime.textContent = ` ${responseAPI.data.character.name} (${responseAPI.data.anime.name})`;
    } catch (error){
        quote.textContent = "Even Further Beyond!";
        characterAnime.textContent = "Goku (Dragon Ball Z)";
    }
}


// Event Listeners
allCards.forEach(card =>{
    card.addEventListener("click", handleDayClick);
});

weightValue.addEventListener("click", handleStatsClick);

fastingValue.addEventListener("click", handleFastingClick);