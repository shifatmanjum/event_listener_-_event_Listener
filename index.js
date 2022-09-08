// <!--this button is with event handeler-->
function makeRed() {
    document.body.style.backgroundColor = "red";

}

// <!--this button is with event listener-->

const makegreenBackground = document.getElementById("MakeGreen");

makegreenBackground.addEventListener("click", function () {
    document.body.style.backgroundColor = "green";
}
);