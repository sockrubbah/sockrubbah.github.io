window.onload = () => {
    const titles = [
        { title: "Happy Birthday", image: "birthday.jpg" },
        { title: "Crazy Clown", image: "clown.jpg" },
        { title: "It's Raining", image: "rain.jpg" },
        { title: "Quiet Time", image: "read.jpg" },
        { title: "Working Hard", image: "shovel.jpg" },
        { title: "Work from Home", image: "work.jpg" }
    ];

    const container = document.querySelector(".array-titles");
    const popup = document.getElementById("popup");
    const popupTitle = document.getElementById("popup-title");
    const popupImage = document.getElementById("popup-image");
    const closeBtn = document.getElementById("close");

    titles.forEach(item => {
        const button = document.createElement("button");
        button.textContent = item.title;
        button.classList.add("popup-btn");

        button.onclick = function () {
            popupTitle.textContent = item.title;
            popupImage.src = item.image;
            popupImage.alt = item.title;

            popup.style.display = "block";

            popup.style.left = `${button.offsetLeft - 90}px`; // location of popup
            popup.style.top = `${button.offsetTop + button.offsetHeight + 10}px`;
            popup.style.marginTop = "5px";
        };

        container.appendChild(button);
    });

    closeBtn.onclick = () => popup.style.display = "none"; // close

    popup.onclick = (event) => {
        if (!event.target.closest(".popup-content")) popup.style.display = "none";
    };
};
