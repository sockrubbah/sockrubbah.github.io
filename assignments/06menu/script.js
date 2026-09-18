//Show Exercises
const showExercise1 = document.getElementById("button-1");
const showExercise2 = document.getElementById("button-2");
const attendanceExercise = document.getElementById("exercise1");
const dateExercise = document.getElementById("exercise2");

showExercise1.addEventListener("click", () => {
    attendanceExercise.style.display = "block";
    dateExercise.style.display = "none";
    console.log("Exercise 1 is shown!");
}
);
showExercise2.addEventListener("click", () => {
    attendanceExercise.style.display = "none";
    dateExercise.style.display = "block";
    console.log("Exercise 2 is shown!");
}
);

//Mobile Menu
const mobileExercise1 = document.getElementById("mobile-1");
const mobileExercise2 = document.getElementById("mobile-2");
const dropdownArrow = document.getElementById("dropdown-arrow");
const mobileMenu = document.getElementById("mobile-menu");
dropdownArrow.addEventListener("click", () => {
    mobileMenu.classList.toggle("open");
    dropdownArrow.classList.toggle("open");
}
)
mobileExercise1.addEventListener("click", () => {
    attendanceExercise.style.display = "block";
    dateExercise.style.display = "none";
});

mobileExercise2.addEventListener("click", () => {
    attendanceExercise.style.display = "none";
    dateExercise.style.display = "block";
});

//Missing Class Point Deductions
const deductionTotal = document.getElementById("class-response");
document.getElementById("user-input").onkeyup = (e) => {
    const daysMissed = parseInt(e.target.value);

    let missingPercentage = (((daysMissed / 25) * 0.07) * 100).toFixed(2);
    if (daysMissed > 6) {
        deductionTotal.innerHTML = `Your attendance percentage loss is: ` + missingPercentage + `%<br>Might as well stay home from now on.`;
    }
    else if (daysMissed > 3) {
        deductionTotal.innerHTML = `Your attendance percentage loss is: ` + missingPercentage + `%<br>Try to make it to more classes.`;
    } else if (daysMissed <= 2) {
        deductionTotal.innerHTML = `Your attendance percentage loss is: ` + missingPercentage + `%<br>Almost perfect attendance. Nice!`;
    }

}

//Date Exercise
const numberOfDays = document.getElementById("num-days");

function endOfSemester() {
    const today = new Date().getTime();
    const end = new Date("2026-12-04").getTime();
    const endOfClassDistance = end - today;
    const countdown = Math.floor(endOfClassDistance / (1000*60*60*24));

    if(countdown < 80) {
        numberOfDays.innerHTML = `You have <strong>${countdown}</strong> days left in the semester<br>A bit over 2 months left!`;
    } else if(countdown < 63) {
numberOfDays.innerHTML = `You have <strong>${countdown}</strong> days left in the semester<br>Only 2 months left. Keep Studying!`;
    } else if(countdown < 31) {
numberOfDays.innerHTML = `You have <strong>${countdown}</strong> days left in the semester<br>ONe more month to go!`;
    } 
}
endOfSemester();
    
//querySelector(":root").style