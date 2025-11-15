function biggerButtonClick() {
    document.getElementById("text").style.fontSize = "24pt";
}
function fancyButtonClick() {
    alert("Your text is now fancy!");
    document.getElementById("text").style.fontWeight = "bold";
    document.getElementById("text").style.color = "blue";
    document.getElementById("text").style.textDecoration = "underline";
}
function boringButtonClick() {
    alert("Your text is now boring...");
    document.getElementById("text").style.fontWeight = "normal";
    document.getElementById("text").style.color = "black";
    document.getElementById("text").style.textDecoration = "none";
}
function mooButtonClick() {
    var sentences = document.getElementById("text").value.split(".");
    result = [];
    for (const sentence of sentences) {
        if (sentence.trim() !== "") {
            result.push(sentence + "-Moo.");
        }
    }
    let newSentence = result.join("");
    text.value = newSentence.toUpperCase();
}