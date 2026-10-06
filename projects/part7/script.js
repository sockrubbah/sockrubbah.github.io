const waveform = document.getElementById("waveform");
let bars;

function createBars() {
    waveform.innerHTML = " ";

    const barSpace = 10;

    const numBars = Math.floor(waveform.clientWidth / barSpace);
    for (let i = 0; i < numBars; i++) {
        const bar = document.createElement("span");
        waveform.appendChild(bar);
    }

    bars = waveform.querySelectorAll("span");
}

createBars();

window.addEventListener("resize", createBars);

document.addEventListener("mousemove", (event) => {
    bars.forEach((bar) => {
        const barPosition = bar.getBoundingClientRect();
        const barCenter = barPosition.left + barPosition.width / 2;
        const distance = Math.abs(event.clientX - barCenter);

        const reactionDistance = 180;
        const strength = Math.max(0, 1 - distance / reactionDistance);

        const minimumHeight = 8;
        const maximumHeight = 50;

        const height =
            minimumHeight +
            (maximumHeight - minimumHeight) * strength;

        bar.style.height = `${height}px`;
    });
});

document.addEventListener("mouseleave", () => {
    bars.forEach((bar) => {
        bar.style.height = "10px";
    });
});

const menuButton = document.getElementById("menu-button");
const navigationMenu = document.querySelector(".site-header nav");

menuButton.addEventListener("click", () => {
    navigationMenu.classList.toggle("show-menu");

    if (navigationMenu.classList.contains("show-menu")) {
        menuButton.textContent = "✕";
    } else {
        menuButton.textContent = "☰";
    }
});