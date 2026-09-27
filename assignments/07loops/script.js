const createCar = (color, lane, position) => {
    const car = document.createElement("div");
    const windshield = document.createElement("div");
    windshield.classList.add("windshield"); // windshield element because ::before and after used for tires
    car.classList.add("car");

    car.style.backgroundColor = color;
    car.style.left = position + "px";
    car.appendChild(windshield);

    // Car lane height
    if (lane == 1) {
        car.style.top = "15%";
    }
    else {
        car.style.top = "65%";
    }

    document.getElementById("road").appendChild(car);
}

const colors = ["red", "blue", "yellow", "white", "green"];

for (let i = 0; i < 7; i++) {

    const color = colors[Math.floor(Math.random() * colors.length)];

    const lane = Math.floor(Math.random() * 2) + 1;

    const position = Math.floor(Math.random() * (window.innerWidth - 100)); // spread out cars on road

    createCar(color, lane, position);
}