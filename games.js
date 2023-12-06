console.log('Hello, World!');

/* Footer */
const year = new Date();
document.getElementById("footer-year").textContent = year.getFullYear(); // footer dynamic change

/* Alert Button */
let alertButton = document.createElement("button"); // create button element
alertButton.innerHTML = "Click Me!";
alertButton.id = "btn-id";
alertButton.onclick = () => { // add onclick event on button
    alert("NANI?");
}
document.getElementById("games-area").append(alertButton); // Append to HTML created element

/* Hover Button */
let hoverButton = document.createElement("button"); // create button element
hoverButton.innerHTML = "Put your cursor on me 😉";
hoverButton.id = "hover-btn-id";
hoverButton.onmouseover = () => { // add onmouseover(mouse hovers in) event on button
    hoverButton.innerText = 'TADA! 🥳💯🤡 Button name changes';
}
hoverButton.onmouseleave = () => { // add on mouseleave(mouse hovers out) event on button
    hoverButton.innerText = 'and it goes back 🥺';
    setTimeout(()=>{hoverButton.innerText = "Put your cursor on me 😉";},3000)
}
document.getElementById("games-area").append(hoverButton); // Append to HTML created element


/* Increment and if-else  */
let numberParagraph = document.createElement("p"); // create p element
let ctr = 0;
numberParagraph.innerText = `Number : ${ctr}`;
let incrementButton = document.createElement("button"); // create button element
incrementButton.innerHTML = "Click me to add on the number! 😉";
incrementButton.id = "btn-counter";
incrementButton.onclick = () => { // add on click event on button
    numberParagraph.classList.remove(...numberParagraph.classList); //clear class the button. used spread to remove all class
    (ctr++ % 2 == 0) ? numberParagraph.classList.add('even') : numberParagraph.classList.add('odd'); // if-else part. if true add even class, else odd class 
    numberParagraph.innerText = `Number : ${ctr}`; // Add text to p element
}
document.getElementById("games-area").append(incrementButton); // Append to HTML created element
document.getElementById("games-area").append(numberParagraph); // Append to HTML created element


/* for Loops */
let orderedlistElement = document.createElement("ol");
let listElement = document.createElement("li");
for (let i = 0; i < 100; i++){ // loop of 100
    let tempList = listElement.cloneNode();
    tempList.innerText = `Hello, I am Number : ${i + 1}`;
    tempList.classList.add((i % 2 == 0) ? 'even' : 'odd');
    orderedlistElement.appendChild(tempList);
}
document.getElementById("games-area").append(orderedlistElement); // Append to HTML created element

