// Use the provided index.html
// -----------------------------------------------------------------------------------

// 1. USA
// Define function getUSA()
// Find the html element that contains "USA".
// Print that element's contents.
    function getUSA() {
    const h1 = document.querySelector("[data-customattr='USA']").nextSibling.nextSibling.textContent;
    console.log(h1);

    };

    getUSA();
    
// 2. Sales
// Define function getPeopleInSales()
// Print the names of all the people in the sales department.
function getPeopleInSales() {
    const dep = document.querySelectorAll(".empName +  td");
    dep.forEach( depart => {
        if (depart.textContent === "Sales"){
            console.log(depart.previousElementSibling.textContent);
        }
    });
}

getPeopleInSales();
// 3. Click Here
// Define function getAnchorChildren()
// Find all anchor elements with a <span> child.
// Print the contents of <span>

function getAnchorChildren() {
    const ancherWithSpanChild = document.querySelectorAll("a span");
    ancherWithSpanChild.forEach( eachSpan => {
    console.log(eachSpan.textContent)
    });
}

getAnchorChildren();

// 4. Hobbies
// Define function getHobbies()
// Find all checked options in the 'skills' select element.
// Print the value and the contents.
function getHobbies() {
    const skillOptions = document.getElementsByName("skills");
    console.log(skillOptions.length);
    
    for (let i = 0; i < skillOptions.length; i++){
        const skillChild = skillOptions[i].children;
        for (let item in skillChild){
            console.log(`Content of the option ${item} is:${skillChild[item].textContent}`);
            console.log(`The value of the option ${item} is: ${skillChild[item].value}`);
        }
    } 
}

getHobbies();

// 5. Custom Attribute
// Define function getCustomAttribute()
// Find all elements with "data-customAttr" attribute
// Print the value of the attribute.
// Print the element that has the attribute. 

function attribute() {
    const customAtrri = document.querySelectorAll("[data-customAttr]");
    //console.log(customAtrri);
    //console.log(customAtrri[0].getAttribute("data-customAttr"));

    for(let i = 0; i < customAtrri.length; i++) {
        console.log(`the value of data-attribute is: ${customAtrri[i].getAttribute("data-customAttr")}`);
        console.log("The element that has the attribute is:", customAtrri[i]);
    }
}

attribute();

// 6. Sum Event
// NOTE: Write unobtrusive Javascript
// Regarding these elements:
// 	<input id="num1" class="nums" type="text"/>
// 	<input id="num2" class="nums" type="text"/>
// 	<h3>Sum: <span id="sum"></span></h3>  
// Define onchange event handler.
// Add <input> element values.
// Put the sum in the <span> element.
// If values cannot be added, put "Cannot add" in the <span> element


// 7. Skills Event
// NOTE: Write unobtrusive Javascript
// When user selects a skill, create an alert with a message similar to:
// 	"Are you sure CSS is one of your skills?"
// NOTE: no alert should appear when user deselects a skill.


// 8. Favorite Color Event
// NOTE: Write unobtrusive Javascript
// NOTE: This is regarding the favoriteColor radio buttons.
// When a user selects a color, create an alert with a message similar to:
// 	"So you like green more than blue now?"
// In this example, green is the new value and blue is the old value.
// Make the background color (of all favoriteColor radio buttons) the newly selected favoriteColor

// 9. Show/Hide Event
// NOTE: Write unobtrusive Javascript
// When user hovers over an employees name:
// 	Hide the name if shown.
// 	Show the name if hidden.


// 10. Current Time
// Regarding this element:
// 	<h5 id="currentTime"></h5>
// Show the current time in this element in this format: 9:05:23 AM
// The time should be accurate to the second without having to reload the page.


// 11. Delay
// Regarding this element:
// 	<p id="helloWorld">Hello, World!</p>
// Three seconds after a user clicks on this element, change the text to a random color.

// 12. Walk the DOM
// Define function walkTheDOM(node, func)
// This function should traverse every node in the DOM. Use recursion.
// On each node, call func(node).
