let templates = model.data.template;
let temp = '';
let selectedImg = '';
let output = '';

for (let i = 0; i < templates.length; i++) {
    temp += /*HTML*/ `
    <img src="${templates[i].img}" 
    height=300px width=350px border=1px solid
    onclick="selected(${i})"> `;
}

function selected(i) {
    selectedImg = templates[i].name;
    view();
}

function generate() {
    output = Math.floor(Math.random() * 100);
    view();
}