class Vacation {
    constructor(title, type, description, image, mapLink) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.image = image;
        this.mapLink = mapLink;
    }

    getCard() {
        const card = document.createElement("section");
        card.classList.add("vacation-preview");

        card.innerHTML = `
        <div class="vacation-header">
            <h2 class="vacation-title">${this.title}</h2>
            <p class="vacation-subtitle">${this.type} Vacation</p>
        </div>
        <img src="${this.image}" alt="${this.title}">
    `;

        card.addEventListener("click", () => {
            showModal(this);
        });

        return card;
    }
}

function loadVacations() {
    vacations.forEach(vacation => {
        vacationList.append(vacation.getCard());
    });
}

const beachMap = {};
const mountainMap = {};

beachMap["Folly"] =
    "https://www.google.com/maps?q=Folly+Beach,SC&output=embed";
beachMap["Myrtle"] =
    "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed";
beachMap["Kiawah"] =
    "https://www.google.com/maps?q=Kiawah+Island,SC&output=embed";
beachMap["Hilton Head"] =
    "https://www.google.com/maps?q=Hilton+Head+Island,SC&output=embed";

mountainMap["Asheville"] =
    "https://www.google.com/maps?q=Asheville,NC&output=embed";
mountainMap["Boone"] =
    "https://www.google.com/maps?q=Boone,NC&output=embed";
mountainMap["Hot Springs"] =
    "https://www.google.com/maps?q=Hot+Springs,NC&output=embed";
mountainMap["Table Rock"] =
    "https://www.google.com/maps?q=Table+Rock,SC&output=embed";

const vacations = [
    new Vacation("Asheville", "Mountain", "This is a mountain in Asheville!", "images/asheville.webp", mountainMap["Asheville"]),
    new Vacation("Boone", "Mountain", "This is a mountain in Boone!", "images/boone.webp", mountainMap["Boone"]),
    new Vacation("Hot Springs", "Mountain", "This is a mountain in Hot Springs!", "images/hot.webp", mountainMap["Hot Springs"]),
    new Vacation("Table Rock", "Mountain", "This is Table Rock!", "images/table.webp", mountainMap["Table Rock"]),
    new Vacation("Folly Beach", "Beach", "This is Folly Beach!", "images/folly.webp", beachMap["Folly"]),
    new Vacation("Myrtle Beach", "Beach", "This is Myrtle Beach!", "images/myrtle.webp", beachMap["Myrtle"]),
    new Vacation("Kiawah Beach", "Beach", "This is Kiawah Beach!", "images/kiawah.webp", beachMap["Kiawah"]),
    new Vacation("Hilton Head", "Beach", "This is Hilton Head!", "images/hilton.webp", beachMap["Hilton Head"])
];

const vacationList = document.getElementById("vacation-list");
const vacationModal = document.getElementById("vacation-container");

function loadVacations() {
    vacations.forEach(vacation => {
        vacationList.append(vacation.getCard());
    });
}

const pageDim = document.getElementById("everything");

function showModal(vacation) {
    document.getElementById("title").textContent = vacation.title;
    document.getElementById("type").textContent = `Type: ${vacation.type}`;
    document.getElementById("description").textContent =
        `Description: ${vacation.description}`;

    document.getElementById("googleMap").innerHTML =
        `<iframe
            src="${vacation.mapLink}" style="border: 0;">
        </iframe>`;
    pageDim.classList.add("dim");
    vacationModal.style.display = "flex";
}

function closeModal() {
    pageDim.classList.remove("dim");
    vacationModal.style.display = "none";
}

document.getElementById("close-modal").addEventListener("click", closeModal);

loadVacations();