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

    function imageFunction() {
        document.getElementById("toggleImage").onclick = () => {

        }
    }


}