// Get all buttons and the display
const buttons = document.querySelectorAll('button');
const display = document.getElementById('result');

let displayValue = ''; // Store the display value

// Add click event listeners to all buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const value = button.value;

        // Handle different button types
        if (value === 'C') {
            displayValue = ''; // Clear the display
        } else if (value === '=') {
            // Evaluate the expression using JavaScript's eval()
            try {
                displayValue = eval(displayValue); // Calculate result
            } catch (error) {
                displayValue = 'Error'; // Handle invalid expressions
            }
        } else {
            displayValue += value; // Append clicked button value to display
        }

        // Update the display with the current value
        display.value = displayValue;
    });
});
