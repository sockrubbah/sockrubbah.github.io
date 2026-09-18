//

document.getElementById("num-input").onkeyup = (e) => {
    const testNum = parseInt(e.target.value);
    //console.log(testNum + 5);
    const tMessage = document.getElementById("test-message");
    //dummyImage.classList.remove("hidden"), which hides an image using className
    if (testNum <= 2) {
        tMessage.innerHTML = `${testNum} is such a small number. Go Higher!`;
    } else if (testNum > 2) {
        tMessage.innerHTML = `Getting better...`;
        //dummyImage.src="https://blahblah";
    } else if (testNum = 100) {
        tMessage.innerHTML = `No need to go further.`;
    } else if (testNum > 100) {
        tMessage.innerHTML = `Way too high!`;
    }
}

let countInterval;
let count = 0;
const tCount = document.getElementById("t-count")
const btnStart = document.getElementById("startButton");
const btnPause = document.getElementById("pauseButton");
const btnStop = document.getElementById("stopButton");

document.getElementById("startButton").onclick = () => {
    countInterval = setInterval(() => {
        tCount.innerHTML = ++count;
    }, 100); //Made and called setInterval function
    console.log("Count started.")
    btnPause.disabled=false;
}
document.getElementById("pauseButton").onclick = () => {
    clearInterval(countInterval);

    console.log("Count paused.")
}
document.getElementById("stopButton").onclick = () => {
    clearInterval(countInterval);
    count = 0; tCount.innerHTML = "";
    console.log("Count stopped.")
    btnPause.disabled=true;
}

