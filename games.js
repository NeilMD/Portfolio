console.log('Hello, World!');

// footer dynamic change
const year = new Date();
document.getElementById("footer-year").textContent = year.getFullYear();


// create button with onclick event
let alertButton = document.createElement("button");
alertButton.innerHTML = "Click Me!";
alertButton.id = "btn-id";
alertButton.onclick = () => {
    alert("NANI?");
}

document.getElementById("games-area").append(alertButton);


// button with hover events
let hoverButton = document.createElement("button");
hoverButton.innerHTML = "Put your cursor on me 😉";
hoverButton.id = "hover-btn-id";

hoverButton.onmouseover = () => {
    hoverButton.innerText = 'TADA! 🥳💯🤡 Button name changes';
}
hoverButton.onmouseleave = () => {
    hoverButton.innerText = 'and it goes back 🥺';
    setTimeout(()=>{hoverButton.innerText = "Put your cursor on me 😉";},3000)
}

document.getElementById("games-area").append(hoverButton);


// increment button 
let numberParagraph = document.createElement("p");
let ctr = 0;
numberParagraph.innerText = `Number : ${ctr}`;

let incrementButton = document.createElement("button");

incrementButton.innerHTML = "Click me to add on the number! 😉";
incrementButton.id = "btn-counter";

incrementButton.onclick = () => {

    //clear class
    numberParagraph.classList.remove(...numberParagraph.classList);
    if (ctr++ % 2 == 0) {
        numberParagraph.classList.add('even');
    } else {
        numberParagraph.classList.add('odd');
    }
    numberParagraph.innerText = `Number : ${ctr}`;

    ``
}

document.getElementById("games-area").append(incrementButton);
document.getElementById("games-area").append(numberParagraph);


// list
let orderedlistElement = document.createElement("ol");
let listElement = document.createElement("li");

for (let i = 0; i < 100; i++){
    let tempList = listElement.cloneNode();
    tempList.innerText = `Hello, I am Number : ${i + 1}`;
    tempList.classList.add((i % 2 == 0) ? 'even' : 'odd');
    orderedlistElement.appendChild(tempList);
}

document.getElementById("games-area").append(orderedlistElement);

