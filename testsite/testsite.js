function checkAnswers() {
    // Define the correct answers
    const answers = {
        blank1: "fox",
        blank2: "dog"
    };

    // Get user input
    const userAnswers = {
        blank1: document.getElementById("blank1").value.trim().toLowerCase(),
        blank2: document.getElementById("blank2").value.trim().toLowerCase()
    };

    // Check if answers are correct
    let correct = true;
    for (const key in answers) {
        if (answers[key] !== userAnswers[key]) {
            correct = false;
            break;
        }
    }

    // Display the result
    const resultElement = document.getElementById("result");
    if (correct) {
        resultElement.textContent = "Correct! Well done!";
        resultElement.style.color = "green";
    } else {
        resultElement.textContent = "Incorrect. Try again!";
        resultElement.style.color = "red";
    }
}
