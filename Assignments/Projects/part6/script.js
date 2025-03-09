window.onload = () => {
    setupMenuToggle();
    
    // checks if the current page is forum, since there's multiple boxes that utilize the .right-side
    if (window.location.pathname.includes("forum.html")) {
        getForumPosts();
    }
};

const setupMenuToggle = () => {
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const aboutSection = document.querySelector(".about");

    menuButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            if (aboutSection) aboutSection.style.display = "none";
        } else {
            if (aboutSection) aboutSection.style.display = "block";
        }
    });

    document.addEventListener("click", function (event) {
        if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
        }
    });
};

const getForumPosts = async () => {
    try {
        const response = await fetch("https://sockrubbah.github.io/Assignments/Projects/part6/json/forum.json");
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
};

const displayPosts = (posts) => {
    const forumContainer = document.querySelector(".right-side");
    const postList = document.querySelector(".forum-posts-list");

    forumContainer.innerHTML = "";
    postList.innerHTML = "";

    posts.forEach(post => {
        const postTitleItem = document.createElement("li");
        postTitleItem.classList.add("forum-post");
        postTitleItem.textContent = post.title;
        postList.appendChild(postTitleItem);

        const postBox = document.createElement("div");
        postBox.classList.add("post-box");

        // follows old layout of forum html
        postBox.innerHTML = `
            <h2 class="post-title">${post.title}</h2>
            <p class="post-author">Author: ${post.author}</p>
            <div class="post-text">
                <p>${post.content}</p>
            </div>
        `;

        forumContainer.appendChild(postBox);
    });
};
