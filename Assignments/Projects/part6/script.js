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
        const response = await fetch("https://sockrubbah.github.io/Assignments/Projects/part6/forum.json");
        const posts = await response.json();
        displayPosts(posts);
    } catch (error) {
        console.error("Error loading JSON:", error);
    }
};

const displayPosts = (posts) => {
    const forumContainer = document.querySelector(".right-side");

    const existingPosts = Array.from(forumContainer.children).map(post => ({
        title: post.querySelector(".post-title")?.textContent.trim() || "Untitled",
        author: post.querySelector(".post-author")?.textContent.replace("Author: ", "").trim() || "Unknown",
        content: post.querySelector(".post-text p")?.textContent.trim() || ""
    }));

    // combine all posts
    const allPosts = [...existingPosts, ...posts];

    // clear
    forumContainer.innerHTML = "";

    allPosts.forEach(post => {
        const postBox = document.createElement("div");
        postBox.classList.add("post-box");

        // follows the html layout of the old forum.html post-box
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
