let result = document.getElementById("result");
let currentInput = "";

// Append value to the result
function appendToResult(value) {
    currentInput += value;
    result.value = currentInput;
}

// Clear the result field
function clearResult() {
    currentInput = "";
    result.value = "";
}

// Calculate the result of the current input expression
function calculateResult() {
    try {
        currentInput = eval(currentInput); // Use eval to evaluate the expression
        result.value = currentInput;
    } catch (error) {
        result.value = "Error"; // Display "Error" if there is any issue in the calculation
        currentInput = ""; // Reset the input after an error
    }
}
