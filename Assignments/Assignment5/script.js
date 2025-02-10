window.onload = () => { //From the video
    //Learned queryselector from w3schools to figure out how to select a ceratin class
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
        function toggleImage() {
            if (isFirstImage) {
                imgElement.src = images[1];
            } else {
                imgElement.src = images[0];
            }
            isFirstImage = !isFirstImage;
        }
    };
}