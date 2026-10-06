const base_url = "https://sockrubbah.github.io/projects/part7/song.json";

const getSongs = async() => {
    const response = await fetch(base_url); // Go get data from the url
    return response.json(); // Gives response in json format

};

const showSongs = async() => {
    const song = await getSongs();
    song.forEach((song)=>{
        document.querySelector("#song-box").append(displaySongs(song));
    })
};

const displaySongs = (song) => {
    const section = document.createElement("section");
    section.classList.add("song");

    const h2 = document.createElement("h2");
    h2.innerHTML = song.song_name;
    section.append(h2);

    const img = document.createElement("img");
    img.innerHTML = song.song_picture;
    console.log(song);
};

showSongs();

//92a5743c-c634-450d-ae8a-61017c85c35a