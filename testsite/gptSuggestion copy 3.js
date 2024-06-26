//this version might work, try working on this one without depending on gpt.
//have faith.
document.addEventListener('DOMContentLoaded', () => {
    const containerRadios = document.querySelectorAll('input[name="containers"]');
    const allContainers = document.getElementById('allContainers');
    const submitButton = document.getElementById('submit');
    const result = document.getElementById('result');

    function hideAll(elements) {
        elements.forEach(element => {
            element.style.display = 'none';
            const inputs = element.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);
        });
    }

    function showElement(element) {
        element.style.display = 'block';
        const inputs = element.querySelectorAll('input');
        inputs.forEach(input => input.disabled = false);
    }

    function toggleContainers() {
        console.log('Toggling containers');
        hideAll(Array.from(allContainers.children));
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            const containerDiv = document.getElementById(`${selectedContainer.value}Div`);
            console.log('Selected container:', selectedContainer.value, containerDiv);
            if (containerDiv) {
                showElement(containerDiv);
            }
        }
    }

    function toggleTypes() {
        console.log('Toggling types');
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            hideAll(document.querySelectorAll(`#${selectedContainer.value}Div .type`));
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            console.log('Selected type:', selectedType);
            if (selectedType) {
                const typeDiv = document.getElementById(`${selectedType.value}Div`);
                console.log('Type div to show:', typeDiv);
                if (typeDiv) {
                    showElement(typeDiv);
                }
            }
        }
    }

    function toggleKinds() {
        console.log('Toggling kinds');
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            hideAll(document.querySelectorAll(`#${selectedContainer.value}Div .kind`));
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            if (selectedType) {
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
                console.log('Selected kind:', selectedKind);
                if (selectedKind) {
                    const kindDiv = document.getElementById(`${selectedKind.value}Div`);
                    console.log('Kind div to show:', kindDiv);
                    if (kindDiv) {
                        showElement(kindDiv);
                    }
                }
            }
        }
    }

    function toggleContent() {
        console.log('Toggling content');
        hideAll(document.querySelectorAll('.content'));
        const selectedContainer = document.querySelector('input[name="containers"]:checked');
        if (selectedContainer) {
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            if (selectedType) {
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
                if (selectedKind) {
                    const contentDiv = document.getElementById(`${selectedKind.value}Content`);
                    console.log('Content div to show:', contentDiv);
                    if (contentDiv) {
                        showElement(contentDiv);
                    }
                }
            }
        }
    }

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

    containerRadios.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleContainers();
            toggleTypes();
            toggleKinds();
            toggleContent();
        });
    });

    document.addEventListener('change', (e) => {
        if (e.target.name.endsWith('Types')) {
            toggleTypes();
            toggleKinds();
            toggleContent();
        } else if (e.target.name.endsWith('Kinds')) {
            toggleKinds();
            toggleContent();
        }
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const selectedContainer = document.querySelector('input[name="containers"]:checked');
            const selectedType = document.querySelector(`input[name="${selectedContainer.value}Types"]:checked`);
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
            const resultText = `Selected Container: ${selectedContainer.id}, Selected Type: ${selectedType.id}, Selected Kind: ${selectedKind.id}`;
            result.textContent = resultText;
        }
    });

    // Initial state
    hideAll(Array.from(allContainers.children));
    hideAll(document.querySelectorAll('.type'));
    hideAll(document.querySelectorAll('.kind'));
    hideAll(document.querySelectorAll('.content'));
});
