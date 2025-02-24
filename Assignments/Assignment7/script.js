window.onload = () => {
    const drawButton = document.querySelector(".draw-button");
    const climbButton = document.querySelector(".climb-button");
    const stairsContainer = document.getElementById("stairs-container");
    const stickFigure = document.getElementById("stick-figure");

    climbButton.classList.add("hidden");
    stickFigure.classList.add("hidden");
    stairsContainer.classList.add("hidden");

    let stickFigureStartPosition = 0;

    const drawStairs = () => {
        stairsContainer.innerHTML = "";
        climbButton.classList.remove("hidden");
        stickFigure.classList.remove("hidden");
        stairsContainer.classList.remove("hidden");

        const totalStairs = 10;
        let startingPoint = 0;

        for (let i = 0; i < totalStairs; i++) {
            const stair = document.createElement("div");
            stair.classList.add("stair");

            let stairPosition = i * 20;
            stair.style.bottom = stairPosition + "px";
            stairsContainer.appendChild(stair);

            if (i === 2) {
                startingPoint = stairPosition;
            }
        }

        stickFigureStartPosition = startingPoint;
        stickFigure.style.bottom = stickFigureStartPosition + "px";
    };

    const climbStairs = () => {
        let step = 0;
        const totalSteps = 10;
        let climbing = setInterval(() => {
            if (step < totalSteps) {
                stickFigure.style.bottom = (stickFigureStartPosition + step * 20) + "px";
                stickFigure.src = step % 2 === 0 ? "left.png" : "right.png";

                step++;
            } else {
                clearInterval(climbing);
            }
        }, 200);
    };

    drawButton.addEventListener("click", drawStairs);
    climbButton.addEventListener("click", climbStairs);
};
