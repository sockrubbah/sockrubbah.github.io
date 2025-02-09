window.onload = () => {
    function helloFunction() {
        document.getElementById("hello-column").addEventListener("click", () => {
            document.getElementById("hello-box").innerHTML += "<p>hello</p>;"
        });
    }

    function colorFunction() {
        document.getElementById("colorPicker").addEventListener("input", (e) => {
            document.getElementById("star").style.color = e.target.value;
        });
    }
}