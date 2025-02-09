window.onload = () => {
    function helloFunction() {
        document.getElementById("hello-column").onclick = () => {
            document.getElementById("hello-box").innerHTML += "<p>hello</p>";
        };
    }

    function colorFunction() {
        document.getElementById("colorPicker").oninput = (e) => {
            document.getElementById("star").style.color = e.target.value;
        };
    }

    function imageFunction() {
        document.getElementById("toggleImage").onclick = () => {

        }
    }

    helloFunction();
}