window.onload = () => {
    function helloFunction() {
        document.getElementById("hello-column").onclick = () => {
            document.getElementById("hello-box").innerHTML += "<p>hello</p>";
        }
    }

    function colorFunction() {
        document.getElementByClassName("colorPicker").addEventListener("input", (e) => {
            document.getElementById("star").style.color = e.target.value;
        });
    }
}