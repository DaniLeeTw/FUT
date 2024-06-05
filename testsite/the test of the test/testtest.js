const sourceAdjust = document.getElementById("sourceAdjust")
const yesSourceAdjust = document.getElementById("yesSourceAdjust")
const noSourceAdjust = document.getElementById("noSourceAdjust")
const additionalInfoSourceAdjust = document.getElementById("additionalInfoSourceAdjust")

function showSourceAdjust() {
  if (yesSourceAdjust.checked) {
      additionalInfoSourceAdjust.style.display = "block";
  } else {
      additionalInfoSourceAdjust.style.display = "none";
  }
}

//金額欄用
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission
  
    // Get the value of the input field
    var inputNumber = document.getElementById("inputNumber").value;
  
    // Validate and format the input number
    var resultText = formatNumber(inputNumber);
    
    // Display the result text
    document.getElementById("resultText").textContent = resultText;
  
    return false; // Prevent form submission
  }
  
  function formatNumber(input) {
    // Remove any non-digit characters
    input = input.replace(/[^\d]/g, '');
  
    // Convert input to a number
    var number = parseInt(input, 10);
  
    if (isNaN(number)) {
      return "Invalid input";
    }
  
    var units = ["", "萬", "億", "兆"];
    var unitIndex = 0;
    var result = "";
  
    while (number > 0) {
      var segment = number % 10000;
      var segmentString = segment.toString();
  
      // Add commas to the segment if it's more than 3 digits
      if (segmentString.length > 3) {
        segmentString = segmentString.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
      }
  
      if (unitIndex > 0 && segment > 0) {
        result = segmentString + units[unitIndex] + result;
      } else if (segment > 0) {
        result = segmentString + result;
      }
  
      number = Math.floor(number / 10000);
      unitIndex++;
    }
  
    // Add commas to the final result string if necessary
    result = result.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  
    return result + "元";
  }
  
