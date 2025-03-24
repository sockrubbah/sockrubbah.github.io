window.onload = () => {
    setupMenuToggle();
    verifyContactForm();

    // checks if the current page is forum, since there are multiple boxes that utilize the .right-side
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
    const forumContainer = document.querySelector(".right-side"); // right side of forum page
    const postList = document.querySelector(".forum-posts-list"); // left side of forum page

    forumContainer.innerHTML = "";
    postList.innerHTML = "";

    posts.forEach(post => {
        const postTitleItem = document.createElement("li");
        postTitleItem.classList.add("forum-post");
        postTitleItem.textContent = post.title;
        postList.appendChild(postTitleItem);

        const postBox = document.createElement("div");
        postBox.classList.add("post-box");

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

const verifyContactForm = () => {
    const form = document.getElementById("contact-form");
    const resultDiv = document.getElementById("form-result");

    form.addEventListener("submit", async (event) => {
        event.preventDefault(); // prevents the form from submitting

        if (!form.checkValidity()) {
            resultDiv.innerHTML = "<p style='color: red;'>Please fill in all fields correctly.</p>";
            return; // checks if all sections were filled
        }

        const formData = new FormData(form);

        try {
            const response = await fetch("https://api.web3forms.com/submit", {
                method: "POST",
                body: formData
            });

            const data = await response.json(); // checking from the web3forms website

            if (data.success) {
                resultDiv.innerHTML = "<p style='color: white;'> Message sent successfully!</p>";
                form.reset(); // resets the form without reloading page
            } else {
                resultDiv.innerHTML = "<p style='color: red;'> Error: Message was unable to be sent.</p>";
            }
        } catch (error) {
            resultDiv.innerHTML = "<p style='color: red;' >Network error, try again later.</p>";
        }
    });
};
