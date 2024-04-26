const txt1 = document.getElementById('userInput');
const btn1 = document.getElementById('button1');
const txt2 = document.getElementById('output');
function fun1() {
    if (txt1.value.toLowerCase() === "yes") {
        txt2.innerHTML = "congrats you are mine now";
    } else {
        txt2.innerHTML = "مش بمزاجك يبقرتي";
    }
}



btn1.addEventListener('click',fun1);