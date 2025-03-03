window.onload = () => {
    const menuButton = document.getElementById("menu-toggle");
    const navMenu = document.getElementById("nav-menu");
    const aboutSection = document.querySelector(".about");

    menuButton.addEventListener("click", function(event) {
        navMenu.classList.toggle("active");

        if (navMenu.classList.contains("active")) {
            aboutSection.style.display = "none";
        } else {
            aboutSection.style.display = "block";
        }
    });

    document.addEventListener("click", function(event) {
        if (!menuButton.contains(event.target) && !navMenu.contains(event.target)) {
            navMenu.classList.remove("active");
            aboutSection.style.display = "block";
        }
    });
};
