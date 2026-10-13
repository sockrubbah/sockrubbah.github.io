const base_url = "https://sockrubbah.github.io/projects/part7/song.json";

const getSongs = async () => {
    const response = await fetch(base_url);

    if (!response.ok) {
        throw new Error("Could not load song data.");
    }

    return response.json();
};

const createImage = (src, alt, className = "") => {
    const image = document.createElement("img");
    image.src = src;
    image.alt = alt;

    if (className) {
        image.classList.add(className);
    }

    return image;
};

//SOTD (Homepage) Posts
const showSongOfTheDay = (songs) => {
    const container = document.querySelector("#sotd-content");

    if (!container) return;

    const song = songs.find((song) => song.song_of_the_day);

    if (!song) return;

    const image = createImage(
        song.song_picture,
        `${song.song_name} artwork`,
        "song-icon"
    );

    const description = document.createElement("div");
    description.id = "song-description";

    const title = document.createElement("h1");
    title.textContent = song.song_name;

    const artist = document.createElement("span");
    artist.id = "listener-count";
    artist.textContent = `by ${song.song_artist}`;

    const details = document.createElement("p");
    details.id = "details";
    details.textContent = song.song_description;

    const uploader = document.createElement("p");
    uploader.textContent = `Uploaded by ${song.uploaded_by}`;

    description.append(title, artist, details, uploader);
    container.append(image, description);
};

//Browse Posts
const showBrowseSongs = (songs) => {
    const container = document.querySelector("#song-box");

    if (!container) return;

    const curatedSongs = songs.filter((song) => song.curation);

    curatedSongs.forEach((song) => {
        const article = document.createElement("article");
        article.classList.add("track-card");

        const cover = createImage(
            song.song_picture,
            `${song.song_name} album cover`,
            "album-cover"
        );

        const trackInfo = document.createElement("div");
        trackInfo.classList.add("track-info");

        const title = document.createElement("h3");
        title.textContent = song.song_name;

        const artist = document.createElement("p");
        artist.textContent = song.song_artist;

        const genre = document.createElement("span");
        genre.classList.add("genre-tag");
        genre.textContent = song.song_genre;

        trackInfo.append(title, artist, genre);

        const curator = document.createElement("div");
        curator.classList.add("curator");

        const time = document.createElement("time");
        time.textContent = song.curation.time;

        const user = document.createElement("p");
        const userImage = createImage(
            song.curation.user_picture,
            `${song.curation.username} profile picture`
        );

        const username = document.createElement("a");
        username.href = "#";
        username.textContent = song.curation.username;

        user.append(userImage, username);
        curator.append(time, user);

        article.append(cover, trackInfo, curator);
        container.append(article);
    });
};

//Commingle Posts
const showComminglePosts = (songs) => {
    const container = document.querySelector("#feed-posts");

    if (!container) return;

    const posts = songs.filter((song) => song.post);

    posts.forEach((song) => {
        const article = document.createElement("article");
        article.classList.add("feed-post");

        const header = document.createElement("header");
        header.classList.add("post-header");

        const userImage = createImage(
            song.post.user_picture,
            `${song.post.username} profile picture`
        );

        const userInfo = document.createElement("div");

        const username = document.createElement("h2");
        username.textContent = song.post.username;

        const shared = document.createElement("p");
        shared.textContent = "shared a record";

        userInfo.append(username, shared);

        const topDigger = document.createElement("span");
        topDigger.classList.add("top-digger");
        topDigger.textContent = "☆ TOP DIGGER";

        header.append(userImage, userInfo, topDigger);

        const postText = document.createElement("p");
        postText.classList.add("post-text");
        postText.textContent = song.post.text;

        const sharedTrack = document.createElement("section");
        sharedTrack.classList.add("shared-track");

        const cover = createImage(
            song.song_picture,
            `${song.song_name} cover art`
        );

        const trackInfo = document.createElement("div");

        const title = document.createElement("h3");
        title.textContent = song.song_name;

        const artist = document.createElement("p");
        artist.textContent = song.song_artist;

        const genre = document.createElement("span");
        genre.textContent = song.song_genre;

        trackInfo.append(title, artist, genre);

        const playButton = document.createElement("button");
        playButton.classList.add("play-button");
        playButton.type = "button";
        playButton.textContent = "▷";

        sharedTrack.append(cover, trackInfo, playButton);

        const reactions = document.createElement("footer");
        reactions.classList.add("reactions");

        reactions.innerHTML = `
            <button type="button"> ♡ <span>${song.post.likes}</span></button>
            <button type="button"> ◯ <span>${song.post.comments}</span></button>
            <button type="button"> ⇄ <span>${song.post.reposts}</span></button>
        `;

        article.append(header, postText, sharedTrack, reactions);
        container.append(article);
    });
};

//Profile Posts
const showProfileSongs = (songs) => {
    const container = document.querySelector("#shared-tracks");

    if (!container) return;

    const profileSongs = songs.filter((song) => song.profile_share);

    profileSongs.forEach((song) => {
        const article = document.createElement("article");
        article.classList.add("track-card");

        const image = createImage(
            song.song_picture,
            `${song.song_name} album cover`
        );

        const trackCopy = document.createElement("div");
        trackCopy.classList.add("track-copy");

        const title = document.createElement("h2");
        title.textContent = song.song_name;

        const artist = document.createElement("p");
        artist.textContent = song.song_artist;

        const comment = document.createElement("blockquote");
        comment.textContent = `“${song.profile_share.comment}”`;

        trackCopy.append(title, artist, comment);

        const genre = document.createElement("span");
        genre.classList.add("track-genre");
        genre.textContent = song.song_genre;

        article.append(image, trackCopy, genre);
        container.append(article);
    });
};

const loadPageSongs = async () => {
    try {
        const songs = await getSongs();

        showSongOfTheDay(songs);
        showBrowseSongs(songs);
        showComminglePosts(songs);
        showProfileSongs(songs);
    } catch (error) {
        console.error(error);
    }
};

loadPageSongs();