let x = 10
console.log(x);

document.getElementById("testParagraph").style.color = "blue";

console.log(document.getElementById("testParagraph").style.color);

console.log(document.querySelectorAll("p.sampleClass"));

document.getElementsByClassName("sampleClass")[1].innerText = "My text has changed!";

document.querySelectorAll("p.sampleClass")[2].innerHTML = "<h2>Hi</h2>";

document.getElementsById("button").addEventListener("click", function (details) {
    console.log(details);
});