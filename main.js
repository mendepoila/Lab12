body = document.getElementsByTagName("body")[0];

title = document.createElement("h1");
title.textContent = "Lab12 Assignment";
title.style.color = "blue";

body.append(title);

subtitle = document.createElement("h2");
subtitle.textContent = "Task";
subtitle.style.color = "red";

body.append(subtitle);

let a = document.createElement("p");
a.textContent = "In this task you have to reproduce this HTML page as is using only JavaScript. The task will be evaluated on the basis of the following DOM manipulation techniques:";
body.append(a);


let texts = [];

for (let i = 0; i < 6; i++) {
    texts[i] = document.createElement("p");
    if (i % 2 == 0){
        texts[i].style.color = "green";
    }
    else {
        texts[i].style.color = "purple";
    }
}

texts[0].textContent = "find elements in the DOM (5 points).";
texts[1].textContent = "create/add/remove elements (5 points).";
texts[2].textContent = "change contents of the elements (5 points).";
texts[3].textContent = "change styles of the elements (5 points).";
texts[4].textContent = "change attributes of the elements (5 points).";
texts[5].textContent = "change classes of the elements (5 points).";

for (let i = 0; i < 6; i++){
    body.append(texts[i]);
}

let b = document.createElement("p");
b.textContent = "Basic necessary code can be found in the supplementary materials to the Lecture 12 via this ";
let link = document.createElement("a");
link.textContent = "link";
link.setAttribute("href", "");
b.appendChild(link);

body.append(b);