window.onload = () => {
    document.getElementById("hello-column").onclick = () => {
        helloFunction();
    }

    function helloFunction() {
        document.getElementById("hello-column").querySelector(".hello-box").innerHTML += "<p>hello</p>";
    }

    document.getElementById("colorPicker").oninput = (e) => {
        document.querySelector(".star").style.color = e.target.value;
    };

    function imageFunction() {
        document.getElementById("toggleImage").onclick = () => {

        }
    }


}