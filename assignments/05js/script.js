//Sets the speech button and bubble as constants
const speechButton = document.querySelector('.speech-button');
const speechBubble = document.getElementById('speech-bubble');

//Checks if speech button is click, and then displays the speech bubble if so
speechButton.addEventListener("click", () => {
    speechBubble.style.display = "block";
    console.log("Button was clicked.")
});

//Sets the drink choice sentence and drink options list as constants
const sentence = document.getElementById("choice-sentence");
const d = document.getElementById("drinks");
sentence.style.display = "none";

d.addEventListener("change", () => {
    if (d.value == "blank") {
        sentence.style.display = "none"; //Hides choice sentence until an option is picked
    }
    else {
        document.getElementById("choice").innerHTML = d.options[d.selectedIndex].text;
        sentence.style.display = "block";
    }
});

//Similar method as speech bubble, change to block style when clicked
const sunButton = document.getElementById("sun-button");
const sunEmoji = document.getElementById("emoji");
sunButton.addEventListener("click", () => {
    sunEmoji.style.display = "block";
});


//Class list
//.classList.add("className")
//.className overwrites

//e.preventDefault();
//Prevents from gong to '#' page when empty link clicked

