// Menu data structure
var menuLinks = [
    { text: 'about', href: '/about' },
    { text: 'catalog', href: '/catalog' },
    { text: 'orders', href: '/orders' },
    { text: 'account', href: '/account' },
];

//  PART 1: Getting Started

// Start the project by building a main content element using the following steps:

// STEP 1: Select and cache the <main> element in a variable named mainEl.
// (select and cache means ——> Query and save into a variable)
const mainEl = document.querySelector("main");
console.log(mainEl);

// STEP 2: Set the background color of mainEl to the value stored in the --main-bg CSS custom property.
// Hint: Assign a string that uses the CSS var() function like this: 'var(--main-bg)'.
mainEl.style.backgroundColor = 'var(--main-bg)';
console.log(mainEl.style.background);

// STEP 3: Set the content of mainEl to <h1>DOM Manipulation</h1>. There are a variety of ways to do this; pick whichever one that you think works best in this situation.
mainEl.innerHTML = `<h1> DOM Manipulation</h1>`;


// STEP 4: Add a class of flex-ctr to mainEl.
// Hint: Use the Element.classList API.
// <h1> will be centered on window
mainEl.classList.add("flex-ctr");
//////////////////////////////////////////////////////////////////////

// PART 2: Creating a Menu Bar

// Next, create a blank menu bar that we can use to later add some interactivity to the page:

//  STEP 1: Select and cache the <nav id="top-menu"> element in a variable named topMenuEl.
const topMenuEl = document.getElementById("top-menu");
console.log(topMenuEl);

//  STEP 2: Set the height of the topMenuEl element to be 100%.
topMenuEl.style.height = "100%";

//  STEP 3: Set the background color of topMenuEl to the value stored in the --top-menu-bg CSS custom property.

topMenuEl.style.backgroundColor = 'var(--top-menu-bg)';

//  STEP 4: Add a class of flex-around to topMenuEl.
topMenuEl.classList.add("flex-around");

///////////////////////////////////////////////////////////////////////////

// PART 3: Adding Menu Buttons

// Very often, you will be working with data provided by external sources in a variety of ways. For this project, copy the following data structure ( "// Menu data Structure") to the top of your index.js file; you will use it to create your menu buttons.

// If this data was provided by an external source, it would allow that source to control how our menu is built. We would simply implement the logic, and allow the data to decide what displays. This is not typically done with menus, but it can be done with any DOM element.

// To continue:

// STEP 1: Iterate over the entire menuLinks array and for each "link" object:

for (let i = 0; i < menuLinks.length; i++) {

    // STEP 2: Create an <a> element.
    const linkEl = document.createElement("a");

    // STEP 3: On the new element, add an href attribute with its value set to the href property of the "link" object.

    //assigns the menu links to the href
    linkEl.setAttribute("href", menuLinks[i].href);

    // STEP 4: Set the new element's content to the value of the text property of the "link" object.
    // linkEl.classList.add(a);
    linkEl.textContent = menuLinks[i].text;


    // STEP 5: Append the new element to the topMenuEl element.
    // first is what you're linking to
    // the thing in the parentheses is what you're linking
    topMenuEl.appendChild(linkEl);
}
/////////////////////////////////////////////////////////////////////
// PART 4: Adding Interactivity

// With the basic structure of the page now generated purely with JavaScript, we have demonstrated the ability to manipulate the DOM in several fundamental ways.

// In order to continue with this project, we must first explore how to add user interaction to DOM elements, which will be covered in a future lesson. For now, save your work so that you can return to it for Part Two of this lab activity.