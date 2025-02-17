document.addEventListener("DOMContentLoaded", () => {
    // loading the constants
    const exerciseContainer = document.querySelector(".exercise-container");
    const travelingExercise = document.querySelector(".traveling-exercise");
    const pictureExercise = document.querySelector(".picture-exercise");
    const exercise1Buttons = document.querySelectorAll(".exercise1");
    const exercise2Buttons = document.querySelectorAll(".exercise2");

    const showExercise = (exercise) => {
        exerciseContainer.style.display = "block"; //display the exercise box

        travelingExercise.style.display = "none"; //hide the exercise
        pictureExercise.style.display = "none"; //hide the exercise

        exercise.style.display = "block"; //display the exercise
    };

    //for sensing clicks to eacah button
    exercise1Buttons.forEach(button => {
        button.addEventListener("click", () => showExercise(travelingExercise));
    });

    exercise2Buttons.forEach(button => {
        button.addEventListener("click", () => showExercise(pictureExercise));
    });


    const showTransportImage = () => {
        const input = document.getElementById("transportInput").value.toLowerCase();
        const imageContainer = document.getElementById("transportImageContainer");
        const image = document.createElement("img");

        imageContainer.innerHTML = ""; // clear the image container

        // paths linking user input to the jpg that pops up
        const imagePaths = {
            "car": "car.jpg",
            "bike": "bike.jpg",
            "scooter": "scooter.jpg",
            "skateboard": "skateboard.jpg"
        };

        // checking user input
        if (imagePaths[input]) {
            image.src = imagePaths[input];
            imageContainer.appendChild(image); // shows image
        }
    };

    document.getElementById("transportInput").addEventListener("input", showTransportImage);

    const changeColor = (color) => {
        document.getElementById("heart").style.color = color;
    };

    document.querySelectorAll(".options button").forEach(button => {
        button.addEventListener("click", () => changeColor(button.textContent.toLowerCase())); // changes color on click
    });

    // constants for the small menu
    const arrowButton = document.getElementById("arrow-button");
    const smallMenu = document.querySelector(".small-menu");

    arrowButton.addEventListener("click", () => {
        smallMenu.classList.toggle("active"); // makes the small menu 'active'
    });
});
