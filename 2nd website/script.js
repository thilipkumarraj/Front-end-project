// Get button elements
const helpBtn1 = document.getElementById("helpBtn");
const helpBtn2 = document.getElementById("helpBtn2");
const helpBtn3 = document.getElementById("helpBtn3");


// Function to show alert when button is clicked
function showHelpMessage() {
    alert("How can we help you with your yard maintenance?");
}

// Add event listeners for button clicks
helpBtn1.addEventListener("click", showHelpMessage);
helpBtn2.addEventListener("click", showHelpMessage);
helpBtn3.addEventListener("click", showHelpMessage);
