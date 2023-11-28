//alert 
document.addEventListener('DOMContentLoaded', function() {
    // Select the button by its ID
    var alertButton = document.getElementById('alertButton');

    // Add a click event listener to the button
    alertButton.addEventListener('click', function() {
        // Display an alert when the button is clicked
        alert('Hello world!');
    });
});