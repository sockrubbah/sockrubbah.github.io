window.onload = () => {
    document.querySelector("#hello-column h3").onclick = () => {
        helloFunction();
    };

    function helloFunction() {
        document.querySelector(".hello-box").innerHTML += "<p>hello</p>";
    }

    document.getElementById("colorPicker").oninput = (e) => {
        document.querySelector(".star").style.color = e.target.value;
    };

    document.querySelector(".column img").onclick = () => {
        const images = ["Image1.webp", "Image2.webp"];
        let imgElement = document.getElementById("toggleImage");
        imgElement.src = imgElement.src.includes(images[0]) ? images[1] : images[0];
    };
}