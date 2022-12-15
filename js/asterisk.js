
var asterisks, text, aLen, i;

asterisks = ["*", "**", "***", "****", "*****"];
aLen = asterisks.length;
text = "<ul>";
for (i = 0; i < aLen; i++) {
    text += "<p>" + asterisks[i] + "</p>";
}
text += "</ul>";
document.getElementById("ast_asc").innerHTML = text;

var asterisksReversed = asterisks.slice().reverse();
aLen = asterisks.length;
text = "<ul>";
for (i = 0; i < aLen; i++) {
    text += "<p>" + asterisksReversed[i] + "</p>";
}
text += "</ul>";
document.getElementById("ast_desc").innerHTML = text;