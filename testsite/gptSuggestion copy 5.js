document.addEventListener('DOMContentLoaded', () => {
    // Select all radio buttons for choosing containers
    const containerRadios = document.querySelectorAll('input[name="containers"]');
    // Select the parent div containing all container divs
    const allContainers = document.getElementById('allContainers');
    // Select all radio buttons for choosing types within containers
    const typeRadios = document.querySelectorAll('input[name^="container"][name$="Types"]');
    // Select all radio buttons for choosing kinds within types
    const kindRadios = document.querySelectorAll('input[name$="Kinds"]');
    // Select all content divs
    const contentDivs = document.querySelectorAll('.content');
    // Select the submit button
    const submitButton = document.getElementById('submit');
    // Select the div where the result will be displayed
    const result = document.getElementById('result');

    // Function to hide all specified elements and disable their inputs
    function hideAll(elements) {
        console.log('Hiding elements:', elements);
        elements.forEach(element => {
            element.style.display = 'none';
            const inputs = element.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);
        });
    }

    // Function to show a specific element and enable its inputs
    function showElement(element) {
        console.log('Showing element:', element);
        element.style.display = 'block';
        const inputs = element.querySelectorAll('input');
        inputs.forEach(input => input.disabled = false);
    }

    // Function to toggle the visibility of container divs
    function toggleContainers() {
        console.log('Toggling containers'); // Log that containers are being toggled
        hideAll(Array.from(allContainers.children)); // Hide all container divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const containerDiv = document.getElementById(`${selectedContainer.value}Div`); // Get the corresponding container div
            console.log('Selected container:', selectedContainer.value, containerDiv); // Log the selected container and its div
            if (containerDiv) {
                showElement(containerDiv); // Show the selected container div
            }
        }
    }

    // Function to toggle the visibility of type divs within the selected container
    function toggleTypes() {
        console.log('Toggling types'); // Log that types are being toggled
        hideAll(document.querySelectorAll('.type')); // Hide all type divs
        hideAll(contentDivs); // Hide all content divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            if (selectedType) { // If a type is selected
                const typeDiv = document.getElementById(`${selectedType.value}Div`); // Get the corresponding type div
                console.log('Selected type:', selectedType.value, typeDiv); // Log the selected type and its div
                if (typeDiv) {
                    showElement(typeDiv); // Show the selected type div
                }
            }
        }
    }

    // Function to toggle the visibility of kind divs within the selected type
    function toggleKinds() {
        console.log('Toggling kinds'); // Log that kinds are being toggled
        hideAll(contentDivs); // Hide all content divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            if (selectedType) { // If a type is selected
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`); // Get the selected kind radio button within the type
                if (selectedKind) { // If a kind is selected
                    const contentDiv = document.getElementById(`${selectedKind.value}Content`); // Get the corresponding content div
                    console.log('Selected kind:', selectedKind.value, contentDiv); // Log the selected kind and its div
                    if (contentDiv) {
                        showElement(contentDiv); // Show the selected content div
                    }
                }
            }
        }
    }

    // Function to validate the form before submission
    function validateForm() {
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (!selectedContainer) { // If no container is selected
            alert('Please select a container!'); // Show an alert
            return false;
        }
        const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
        if (!selectedType) { // If no type is selected
            alert('Please select a type!'); // Show an alert
            return false;
        }
        const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`); // Get the selected kind radio button within the type
        if (!selectedKind) { // If no kind is selected
            alert('Please select a kind!'); // Show an alert
            return false;
        }
        return true; // Return true if all selections are valid
    }

    // Add event listeners to container radio buttons
    containerRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleContainers(); // Toggle containers when a container radio button is changed
            toggleTypes(); // Toggle types when a container radio button is changed
            toggleKinds(); // Toggle kinds when a container radio button is changed
        });
    });

    // Add event listener to handle changes to type and kind radio buttons
    typeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleTypes(); // Toggle types when a type radio button is changed
            toggleKinds(); // Toggle kinds when a type radio button is changed
        });
    });

    kindRadios.forEach(radio => {
        radio.addEventListener('change', toggleKinds); // Toggle kinds when a kind radio button is changed
    });

    // Add event listener to the submit button to validate the form and display the result
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (validateForm()) { // If the form is valid
            const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`); // Get the selected kind radio button within the type
            const resultText = `Selected Container: ${selectedContainer.id}, Selected Type: ${selectedType.id}, Selected Kind: ${selectedKind.id}`; // Construct the result text
            result.textContent = resultText; // Display the result
        }
    });

    // Initial state
    hideAll(Array.from(allContainers.children)); // Hide all container divs initially
    hideAll(document.querySelectorAll('.type')); // Hide all type divs initially
    hideAll(document.querySelectorAll('.kind')); // Hide all kind divs initially
    hideAll(contentDivs); // Hide all content divs initially
});
