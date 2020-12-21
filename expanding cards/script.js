// select all the panels on the page
const panels = document.querySelectorAll('.panel');

// for each panel, add an event listener for click
panels.forEach(panel => {
    panel.addEventListener('click', () => {
        // run the function to remove the active class off all panels
        removeActiveClasses();
        // add the active class to the clicked panel
        panel.classList.add('active')
    })
})

// function to remove the active classes on the page
function removeActiveClasses(){
    // remove each active class 
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}