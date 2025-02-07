// Menu data structure
// PART 1:
// var menuLinks = [
//     { text: 'about', href: '/about' },
//     { text: 'catalog', href: '/catalog' },
//     { text: 'orders', href: '/orders' },
//     { text: 'account', href: '/account' },
// ];

// updated for PART 2
var menuLinks = [
    {text: 'about', href: '/about'},
    {text: 'catalog', href: '#', subLinks: [
      {text: 'all', href: '/catalog/all'},
      {text: 'top selling', href: '/catalog/top'},
      {text: 'search', href: '/catalog/search'},
    ]},
    {text: 'orders', href: '#' , subLinks: [
      {text: 'new', href: '/orders/new'},
      {text: 'pending', href: '/orders/pending'},
      {text: 'history', href: '/orders/history'},
    ]},
    {text: 'account', href: '#', subLinks: [
      {text: 'profile', href: '/account/profile'},
      {text: 'sign out', href: '/account/signout'},
    ]},
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

// DOM MANIPULATION (PART 2)
// STEP 3: Creating the submenu

// 1. Select and cache the <nav id="sub-menu"> element in a variable named subMenuEl.
const subMenuEl = document.getElementById("sub-menu");
console.log(subMenuEl);

// 2. Set the height subMenuEl element to be "100%".
// document.body.style.height = "100vh";
subMenuEl.style.height = "100%"; // this line at 100% is too tall --------
// subMenuEl.style.height = "50px"; // this makes it the right height but it's still at the bottom
// subMenuEl.style.height = topMenuEl.offsetHeight + "px";

// 3. Set the background color of subMenuEl to the value stored in the --sub-menu-bg CSS custom property.
subMenuEl.style.backgroundColor = 'var(--sub-menu-bg)';

// 4. Add the class of flex-around to the subMenuEl element.
subMenuEl.classList.add("flex-around");

// height of sub-menu is too much at this point of the code (since line 94) figure out how to fix (5-10% seems to get the right height)

// 1. Set the CSS position property of subMenuEl to the value of absolute.
subMenuEl.style.position = "absolute";

// 2. Set the CSS top property of subMenuEl to the value of 0.
subMenuEl.style.top="0";

// STEP 4: Adding Menu Interaction
 // updated menulinks array at top of document

// 1. Select and cache the all of the <a> elements inside of topMenuEl in a variable named topMenuLinks.
const topMenuLinks = topMenuEl.querySelectorAll("a");

// 2. Attach a delegated 'click' event listener to topMenuEl.
topMenuEl.addEventListener("click", function(event){
// The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault();
// The second line of code of the function should immediately return if the element clicked was not an <a> element.

// (makes sure they clicked on the link and not a random part of the top menu)
if (event.target.tagName !== "A") return;

// removes active class from all links
topMenuLinks.forEach(link => link.classList.remove("active"));

// finds click links object in menulinks
const clickedLink = menuLinks.find(link => link.text === event.target.textContent);

if (!clickedLink) return;

//toggles the active class on link that was clicked
if (event.target.classList.contains("active")) {
    event.target.classList.remove("active"); // removes active state?
        subMenuEl.style.top ="0";
} else {
event.target.classList.add("active"); // adds active class to clicked link
    //show submenu if it has one
    if (clickedLink.subLinks) {
        // makes sure submenu shows up (is populated)
        buildSubmenu(clickedLink.subLinks);
               subMenuEl.style.top = "100%"; // Shows submenu
    } else {
        subMenuEl.style.top = "0"; // Hides submenu if clicking again
    }
}
// Log the content of the <a> to verify the handler is working.
console.log(event.target.textContent);
})
// Progress Check - Ensure that clicking ABOUT, CATALOG, etc. logs about, catalog, etc. when a link is clicked. Clicking anywhere other than on a link should do nothing.
// RESPONSE: successfully clicked on hyperlinked text for those words to log in the console. Clicking on space without hyperlinked text did nothing. 

// Now that we have references to each of these links, and a registered event listener, we will want to add a toggled "active" state to each menu item, showing whether or not it is currently selected:
// 1. The event listener should add the active class to the <a> element that was clicked, unless it was already active, in which case it should remove it. 
// Added in PART 4:
// if (!event.target.classList.contains("active")) {
//     event.target.classList.add("active");
// }
// 2. The event listener should remove the active class from each other <a> element in topMenuLinks - whether the active class exists or not.
// added in part 4: 
// topMenuLinks.forEach(link => link.classList.remove("active"));

// Hint: Removing a non-existent class from an element does not cause an error!

// Progress Check - Clicking any of the links should make that link active and clear the others. Clicking an active link should clear that link. 
// RESPONSE: active link is darker in color and becomes white again when a different menu link is clicked on

// STEP 5: Adding Submenu Interaction
// Within the same event listener, we want to toggle the submenu between active and non-active states. First, we will set the submenu to show or hide itself depending on the menu state:
// 1. Within the event listener, if the clicked <a> element does not yet have a class of "active" (it was inactive when clicked):
// a. If the clicked <a> element's "link" object within menuLinks has a subLinks property (all do, except for the "link" object for ABOUT), set the CSS top property of subMenuEl to 100%.
// b. Otherwise, set the CSS top property of subMenuEl to 0.
// Hint: Caching the "link" object will come in handy for passing its subLinks array later.

// Progress Check - Ensure that clicking CATALOG, ORDERS, etc. shows the submenu bar, and that clicking them again hides it. Clicking ABOUT should not show the submenu bar.

// The submenu needs to be dynamic based on the clicked link. To facilitate that, we will create a helper function called buildSubmenu that does the following:
// 1. Clear the current contents of subMenuEl.

// 2. Iterate over the subLinks array, passed as an argument, and for each "link" object:
// a. Create an <a> element.
// b. Add an href attribute to the <a>, with the value set by the href property of the "link" object.
// c. Set the element's content to the value of the text property of the "link" object.
// d. Append the new element to the subMenuEl.

function buildSubmenu(subLinks) {
    subMenuEl.innerHTML = ""; // Clears current submenu content

    subLinks.forEach(link => {
        const subLinkEl = document.createElement("a"); // Creates new <a> element
        subLinkEl.setAttribute("href", link.href); // Sets href attribute
        subLinkEl.textContent = link.text; // Sets text content
        subMenuEl.appendChild(subLinkEl); // Appends to submenu
    });
}

// Once you have created your helper function, include it in the event listener within the same logic that shows the submenu, remembering to pass the array of sub-links as an argument.

// The menu is almost complete! Now, we need to add interactions to the submenu items themselves:
// 1. Attach a delegated 'click' event listener to subMenuEl.
subMenuEl.addEventListener("click", function(event) {

// a. The first line of code of the event listener function should call the event object's preventDefault() method.
event.preventDefault(); // Prevents default link behavior

// b. The second line of code within the function should immediately return if the element clicked was not an <a> element.
if (event.target.tagName !== "A") return; // Makes sure an <a> was clicked

// c. Log the content of the <a> to verify the handler is working.
console.log(event.target.textContent); // Logs clicked submenu text

// 2. Next, the event listener should set the CSS top property of subMenuEl to 0.
subMenuEl.style.top = "0"; // Hides the submenu

// 3. Remove the active class from each <a> element in topMenuLinks.
topMenuLinks.forEach(link => link.classList.remove("active")); // Removes active class from top menu

// 4. Update the contents of mainEl, within an <h1>, to the contents of the <a> element clicked within subMenuEl.
mainEl.innerHTML = `<h1>${event.target.textContent}</h1>`;
});
// 5. If the ABOUT link is clicked, an <h1>About</h1> should be displayed.

// STEP 6: Completion and Code Review

// Test your menu! If it works in a way that makes sense, you have likely been successful. 