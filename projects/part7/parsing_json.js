const base_url = "https://sockrubbah.github.io/projects/part7/song.json";

const getSongs = () => {
    const response = fetch(base_url); // Go get data from the url
    return response.json(); // Gives response in json format

};

const showSongs = () => {
    const song = getSongs();
    console.log(song);
}

showSongs();