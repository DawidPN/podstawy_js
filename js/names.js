var names, text, nLen, i;

names = ["Marta", "Magdalena", "Anna", "Joanna", "Dawid", "Małgorzata", "Weronika", "Wiktoria", "Hanna", "Iwona"];
nLen = names.length;
text = "<ul>";
for (i = 0; i < nLen; i++) {
    if (i<9) text += "<li>" + "0"+(i+1) +" - " + names[i] + "</li>";
    else text += "<li>" + (i+1) +" - " + names[i] + "</li>";
}
text += "</ul>";
document.getElementById("names").innerHTML = text;
