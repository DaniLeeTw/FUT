document.addEventListener('DOMContentLoaded', () => {
    // Select all radio buttons for choosing containers
    const containerRadios = document.querySelectorAll('input[name="containers"]');
    // Select the parent div containing all container divs
    const allContainers = document.getElementById('allContainers');
    // Select the submit button
    const submitButton = document.getElementById('submit');
    // Select the div where the result will be displayed
    const result = document.getElementById('result');

    // Function to hide all specified elements
    function hideAll(elements) {
        console.log('Hiding all elements:', elements);
        elements.forEach(element => {
            element.style.display = 'none'; // Hide the element
            const inputs = element.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true); // Disable all input elements within the element
        });
    }

    // Function to show a specific element
    function showElement(element) {
        console.log('Showing element:', element);
        element.style.display = 'block'; // Show the element
        const inputs = element.querySelectorAll('input');
        inputs.forEach(input => input.disabled = false); // Enable all input elements within the element
    }

    // Function to toggle the visibility of container divs
    function toggleContainers() {
        console.log('Toggling containers');
        hideAll(Array.from(allContainers.children)); // Hide all container divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            const containerDiv = document.getElementById(`${selectedContainer.value}Div`);
            console.log('Selected container:', selectedContainer.value, containerDiv);
            if (containerDiv) {
                showElement(containerDiv); // Show the selected container div
            }
        }
    }

    // Function to toggle the visibility of type divs within the selected container
    function toggleTypes() {
        console.log('Toggling types');
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            hideAll(document.querySelectorAll(`#${selectedContainer.value}Div .type`)); // Hide all type divs within the selected container
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            console.log('Selected type:', selectedType);
            if (selectedType) {
                const typeDiv = document.getElementById(`${selectedType.value}Div`);
                console.log('Type div to show:', typeDiv);
                if (typeDiv) {
                    showElement(typeDiv); // Show the selected type div
                }
            }
        }
    }

    // Function to toggle the visibility of kind divs within the selected type
    function toggleKinds() {
        console.log('Toggling kinds');
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            hideAll(document.querySelectorAll(`#${selectedContainer.value}Div .kind`)); // Hide all kind divs within the selected container
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            if (selectedType) {
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
                console.log('Selected kind:', selectedKind);
                if (selectedKind) {
                    const kindDiv = document.getElementById(`${selectedKind.value}Div`);
                    console.log('Kind div to show:', kindDiv);
                    if (kindDiv) {
                        showElement(kindDiv); // Show the selected kind div
                    }
                }
            }
        }
    }

    // Function to toggle the visibility of content divs within the selected kind
    function toggleContent() {
        console.log('Toggling content');
        hideAll(document.querySelectorAll('.content')); // Hide all content divs
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            if (selectedType) {
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
                if (selectedKind) {
                    const contentDiv = document.getElementById(`${selectedKind.value}Content`);
                    console.log('Content div to show:', contentDiv);
                    if (contentDiv) {
                        showElement(contentDiv); // Show the selected content div
                    }
                }
            }
        }
    }

    // Function to validate the form before submission
    function validateForm() {
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (!selectedContainer) {
            alert('Please select a container!');
            return false;
        }
        const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
        if (!selectedType) {
            alert('Please select a type!');
            return false;
        }
        const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
        if (!selectedKind) {
            alert('Please select a kind!');
            return false;
        }
        return true;
    }

    // Add event listeners to container radio buttons
    containerRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            console.log('Container radio changed');
            toggleContainers();
            toggleTypes();
            toggleKinds();
            toggleContent();
        });
    });

    // Add a single event listener to handle changes to type and kind radio buttons
    document.addEventListener('change', (e) => {
        if (e.target.name.endsWith('Types')) {
            console.log('Type radio changed');
            toggleTypes();
            toggleKinds();
            toggleContent();
        } else if (e.target.name.endsWith('Kinds')) {
            console.log('Kind radio changed');
            toggleKinds();
            toggleContent();
        }
    });

    // Add event listener to the submit button
    submitButton.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent the default form submission
        if (validateForm()) {
            const selectedContainer = document.querySelector('input[name="containers"]:checked');
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
            const resultText = `Selected Container: ${selectedContainer.id}, Selected Type: ${selectedType.id}, Selected Kind: ${selectedKind.id}`;
            result.textContent = resultText; // Display the result
        }
    });

    // Initial state: Hide all containers, types, kinds, and contents
    hideAll(Array.from(allContainers.children));
    hideAll(document.querySelectorAll('.type'));
    hideAll(document.querySelectorAll('.kind'));
    hideAll(document.querySelectorAll('.content'));
});
