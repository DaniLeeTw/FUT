
// Work
// On
// This
// Version
// You
// Can
// Do
// It
// !
// Try
// Not
// To
// AI
// !

document.addEventListener('DOMContentLoaded', () => {
    const containerRadios = document.querySelectorAll('input[name="containers"]');
    const allContainers = document.getElementById('allContainers');
    const typeRadios = document.querySelectorAll('input[name^="container"][name$="Types"]');
    const kindRadios = document.querySelectorAll('input[name$="Kinds"]');
    const contentDivs = document.querySelectorAll('.content');
    const submitButton = document.getElementById('submit');
    const result = document.getElementById('result');

    // Function to hide all specified elements and disable their inputs
    function hideAll(elements) {
        elements.forEach(element => {
            element.style.display = 'none';
            const inputs = element.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);
        });
    }

    // Function to show a specific element and enable its inputs
    function showElement(element) {
        element.style.display = 'block';
        const inputs = element.querySelectorAll('input');
        inputs.forEach(input => input.disabled = false);
    }

    // Function to toggle the visibility of container divs
    function toggleContainersWithSelection() {
        hideAll(Array.from(allContainers.children)); // Hide all container divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const containerDiv = document.getElementById(`${selectedContainer.value}`); // Get the corresponding container div
            if (containerDiv) {
                showElement(containerDiv); // Show the selected container div
            }
        }
    }

    // Function to toggle the visibility of type divs within the selected container
    function toggleTypesWithSelection() {
        hideAll(document.querySelectorAll('.type')); // Hide all type divs
        hideAll(contentDivs); // Hide all content divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            if (selectedType) { // If a type is selected
                const typeDiv = document.getElementById(`${selectedType.value}`); // Get the corresponding type div
                if (typeDiv) {
                    showElement(typeDiv); // Show the selected type div
                }
            }
        }
    }

    // Function to toggle the visibility of kind divs within the selected type
    function toggleKindsWithSelection() {
        hideAll(contentDivs); // Hide all content divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
        if (selectedContainer) { // If a container is selected
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            if (selectedType) { // If a type is selected
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`); // Get the selected kind radio button within the type
                if (selectedKind) { // If a kind is selected
                    const contentDiv = document.getElementById(`${selectedKind.value}Content`); // Get the corresponding content div
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
            toggleContainersWithSelection(); // Toggle containers when a container radio button is changed
            toggleTypesWithSelection(); // Toggle types when a container radio button is changed
            toggleKindsWithSelection(); // Toggle kinds when a container radio button is changed
        });
    });

    // Add event listener to handle changes to type and kind radio buttons
    typeRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleTypesWithSelection(); // Toggle types when a type radio button is changed
            toggleKindsWithSelection(); // Toggle kinds when a type radio button is changed
        });
    });

    // Add event listener to handle changes to kind radio buttons
    kindRadios.forEach(radio => {
        radio.addEventListener('change', toggleKindsWithSelection); // Toggle kinds when a kind radio button is changed
    });

    // Add event listener to handle the form submission
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission behavior
        if (validateForm()) { // Validate the form
            const selectedContainer = document.querySelector('input[name="containers"]:checked'); // Get the selected container radio button
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`); // Get the selected type radio button within the container
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`); // Get the selected kind radio button within the type
            const resultText = `Selected Container: ${selectedContainer.id}, Selected Type: ${selectedType.id}, Selected Kind: ${selectedKind.id}`; // Construct the result text
            result.textContent = resultText; // Display the result text
        }
    });

    // Initial state: Hide all containers, types, kinds, and content divs
    hideAll(Array.from(allContainers.children));
    hideAll(document.querySelectorAll('.type'));
    hideAll(contentDivs);
});
