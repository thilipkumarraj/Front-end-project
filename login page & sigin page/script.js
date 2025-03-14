// Get button elements
const helpBtn1 = document.getElementById("helpBtn1");


// Function to show alert when button is clicked
function showHelpMessage() {
    alert("How can we help you with your yard maintenance?");
}

// Add event listeners for button clicks
helpBtn1.addEventListener("click", showHelpMessage);
