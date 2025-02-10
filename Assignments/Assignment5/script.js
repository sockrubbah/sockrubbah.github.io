window.onload = () => { //From the video
    //Learned queryselector from w3schools to figure out how to select certain classes
    //Unsure why I couldn't get the clicking the box itself to print 'hello' so I put it to teh 'Say Hello'
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