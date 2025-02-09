window.onload = () => {
    function helloFunction() {
        document.getElementById("hello-column").addEventListener("click", () => {
            document.getElementById("hello-box").innerHTML += "<p>hello</p>;"
        });
    }
}