class Vacation {
    constructor(title, type, description, image, mapLink, thingsToDo) {
        this.title = title;
        this.type = type;
        this.description = description;
        this.image = image;
        this.mapLink = mapLink;
        this.thingsToDo = thingsToDo;
    }

    getCard() {
        const card = document.createElement("section");
        card.classList.add("vacation-preview");

        card.innerHTML =
            `<div class="vacation-header">
            <h2 class="vacation-title">${this.title}</h2>
            <p class="vacation-subtitle">${this.type} Vacation</p>
        </div>
        <img src="${this.image}" alt="${this.title}">`;

        card.addEventListener("click", () => {
            showModal(this);
        });

        return card;
    }
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
    new Vacation("Asheville", "Mountain", "Asheville blends Blue Ridge Mountain hikes with local restaurants, art, and scenic drives.", "images/asheville.webp", mountainMap["Asheville"], ["Drive the Blue Ridge Parkway", "Visit Biltmore Estate", "Explore downtown Asheville"]),
    new Vacation("Boone", "Mountain", "Boone is a cool-weather mountain town known for outdoor adventures and Appalachian charm.", "images/boone.webp", mountainMap["Boone"], ["Hike at Grandfather Mountain", "Visit downtown Boone", "See the views at Blowing Rock"]),
    new Vacation("Hot Springs", "Mountain", "Hot Springs offers a quiet mountain getaway near the French Broad River and the Appalachian Trail.", "images/hot.webp", mountainMap["Hot Springs"], ["Relax in a mineral bath", "Hike the Appalachian Trail", "Walk along the French Broad River"]),
    new Vacation("Table Rock", "Mountain", "Table Rock State Park is a scenic destination for hiking, waterfalls, and mountain overlooks.", "images/table.webp", mountainMap["Table Rock"], ["Hike the Table Rock Trail", "Visit Carrick Creek Falls", "Have a picnic by the lake"]),
    new Vacation("Folly Beach", "Beach", "Folly Beach is a laid-back coastal destination near Charleston with surfing, fishing, and ocean views.", "images/folly.webp", beachMap["Folly"], ["Walk the Folly Beach Pier", "Go surfing", "Visit nearby Charleston"]),
    new Vacation("Myrtle Beach", "Beach", "Myrtle Beach combines wide beaches with entertainment, restaurants, shopping, and a lively boardwalk.", "images/myrtle.webp", beachMap["Myrtle"], ["Walk the boardwalk", "Visit the SkyWheel", "Play mini golf"]),
    new Vacation("Kiawah Beach", "Beach", "Kiawah Island offers peaceful beaches, coastal wildlife, and scenic paths for biking and walking.", "images/kiawah.webp", beachMap["Kiawah"], ["Bike along coastal paths", "Relax on the beach", "Look for local wildlife"]),
    new Vacation("Hilton Head", "Beach", "Hilton Head Island is known for its beaches, bike trails, golf courses, and relaxed coastal atmosphere.", "images/hilton.webp", beachMap["Hilton Head"], ["Ride the island bike trails", "Visit Harbour Town", "Spend time at the beach"])
];

const vacationList = document.getElementById("vacation-list");
const vacationModal = document.getElementById("vacation-container");

function loadVacations() {
    vacations.forEach(vacation => {
        vacationList.append(vacation.getCard());
    });
}

function showModal(vacation) {
    document.getElementById("title").textContent = vacation.title;
    document.getElementById("type").textContent = `Type: ${vacation.type}`;
    document.getElementById("description").textContent =
        `Description: ${vacation.description}`;

    document.getElementById("googleMap").innerHTML =
        `<iframe src="${vacation.mapLink}" style="border: 0;"></iframe>`;
    document.getElementById("things-to-do").innerHTML =
        `Things to Do: ${vacation.thingsToDo}`;
    vacationModal.style.display = "flex";
}

function closeModal() {
    vacationModal.style.display = "none";
}

document.getElementById("close-modal").addEventListener("click", closeModal);
loadVacations();