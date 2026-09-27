const mountains = document.getElementById("mountain-choices");
const beaches = document.getElementById("beach-choices");
const map = document.getElementById("googleMap");
const l = document.getElementById("locations");

//Selection
l.addEventListener("change", () => {
    if (l.value == "blank") {
        mountains.style.display = "none";
        beaches.style.display = "none";
        map.style.display = "none";
    }
    else if (l.value == "mountains") {
        mountains.style.display = "flex";
        mountains.style.flexDirection = "column";
        beaches.style.display = "none";
        map.style.display = "block";
    }
    else if (l.value == "beaches") {
        beaches.style.display = "flex";
        beaches.style.flexDirection = "column";
        mountains.style.display = "none";
        map.style.display = "block";
    }

});

//Mountains
const mountainMap = [];
mountainMap["Asheville"] =  "https://www.google.com/maps?q=Asheville,NC&output=embed";
mountainMap["Boone"] =  "https://www.google.com/maps?q=Boone,NC&output=embed";
mountainMap["Hot Springs"] =    "https://www.google.com/maps?q=Hot+Springs,NC&output=embed";
mountainMap["Table Rock"] = "https://www.google.com/maps?q=Table+Rock,SC&output=embed";

document.getElementById("asheville").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${mountainMap["Asheville"]}"></iframe>`;
};

document.getElementById("boone").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${mountainMap["Boone"]}"></iframe>`;
};

document.getElementById("hot-springs").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${mountainMap["Hot Springs"]}"></iframe>`;
};

document.getElementById("table-rock").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${mountainMap["Table Rock"]}"></iframe>`;
};

//Beaches
const beachMap = [];
beachMap["Folly"] =  "https://www.google.com/maps?q=Folly+Beach,SC&output=embed";
beachMap["Myrtle"] =  "https://www.google.com/maps?q=Myrtle+Beach,SC&output=embed";
beachMap["Kiawah"] =    "https://www.google.com/maps?q=Kiawah+Island,SC&output=embed";
beachMap["Hilton Head"] = "https://www.google.com/maps?q=Hilton+Head+Island,SC&output=embed";

document.getElementById("folly").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${beachMap["Folly"]}"></iframe>`;
};

document.getElementById("myrtle").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${beachMap["Myrtle"]}"></iframe>`;
};

document.getElementById("kiawah").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${beachMap["Kiawah"]}"></iframe>`;
};

document.getElementById("hilton-head").onclick = () => {
    document.getElementById("googleMap").innerHTML =
    `<iframe src="${beachMap["Hilton Head"]}"></iframe>`;
};

//document.getElementById("btn-show-mountain").onclick = () => {
 ///   const div = document.getElementById("mountain-info");

  //  const mountainMap = [];
  //  mountainMap["Asheville"] = 
//}