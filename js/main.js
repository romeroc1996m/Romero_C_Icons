console.log('JavaScript is running!');

/* "Longer JS block comment"
const is a type of variable - a bit of memory that can hold a value

JS uses (can use) ANY valid CSS selector to maje a connection to ANY element on the page - it works the same way as CSS selectors do, because it's USING css selectors to find matchinh element (s).

The document is the DOM - the web page and all of its elements

querySelector is the method (function) that makes the connection between JS and the DOM (the elements)
*/

//Step 1 - Make the connection to the element you want to interact with

const jpgGraphic= document.querySelector ("#bitmap");

function logID() {
    console.log('clicked on this element:', this.id);
}

// step 2 - decide how you want the user to interact with the object you created in step 1

jpgGraphic.addEventListener('click', logID);

// SVG BUTTON
const svgGraphic= document.querySelector ("#vector");

function logID() {
    console.log('clicked on this element:', this.id);
}

svgGraphic.addEventListener('click', logID);