window.onload = () => {
    document.getElementById("hello-here").onclick = () => {
        helloFunction();
    }

    function helloFunction() {
        document.getElementById("hello-column").innerHTML += "<p>hello</p>";
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


}