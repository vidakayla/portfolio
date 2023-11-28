//alert button 
document.addEventListener("DOMContentLoaded", function() {
    var button = document.getElementById("alertButton");
    button.addEventListener("click", function() {
      alert("Thank you human!");
    });
});
//footer
document.addEventListener('DOMContentLoaded', function() {
  // Get the current year
  var currentYear = new Date().getFullYear();
  // Select the <footer> element
  var footer = document.querySelector('footer');
  // Set the text content with the copyright information and current year
  footer.textContent = '\u00A9 ' + currentYear + ' Vida Kayla. All rights reserved.';
});
//hover
const myButton = document.getElementById('alertButton');
// Store the default and new button labels in variables
const defaultLabel = 'Human interaction please!';
const newLabel = 'Please give me attention human!';
// Add mouseover event listener
myButton.addEventListener('mouseover', () => {
    myButton.innerText = newLabel;
});
// Add mouseleave event listener
myButton.addEventListener('mouseleave', () => {
    myButton.innerText = defaultLabel;
});
