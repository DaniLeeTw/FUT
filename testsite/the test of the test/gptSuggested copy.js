document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="approveType"]');
    const kindContainers = document.querySelectorAll('.selectKinds');
    const contentDivs = document.querySelectorAll('.content');
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

    function toggleKinds() {
        hideAll(kindContainers);
        hideAll(contentDivs);
        const selectedType = document.querySelector('input[name="approveType"]:checked');
        if (selectedType) {
            const kindContainer = document.getElementById(`select${selectedType.value}Kinds`);
            if (kindContainer) {
                showElement(kindContainer);
            }
        }
    }

    function toggleContent() {
        hideAll(contentDivs);
        const selectedType = document.querySelector('input[name="approveType"]:checked');
        if (selectedType) {
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kind"]:checked`);
            if (selectedKind) {
                const contentDiv = document.getElementById(`${selectedKind.value}Content`);
                if (contentDiv) {
                    showElement(contentDiv);
                }
            }
        }
    }

    function validateForm() {
        const selectedType = document.querySelector('input[name="approveType"]:checked');
        if (!selectedType) {
            alert('請選擇公文類型！');
            return false;
        }
        const selectedKind = document.querySelector(`input[name="${selectedType.value}Kind"]:checked`);
        if (!selectedKind) {
            alert('請選擇具體公文類型！');
            return false;
        }
        const contentDiv = document.getElementById(`${selectedKind.value}Content`);
        if (contentDiv) {
            const inputs = contentDiv.querySelectorAll('input[required]');
            for (let input of inputs) {
                if (!input.value) {
                    input.focus();
                    alert('Please fill in all required fields.');
                    return false;
                }
            }
        }
        return true;
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleKinds();
            toggleContent();
        });
    });

    kindContainers.forEach(container => {
        const radios = container.querySelectorAll('input[type="radio"]');
        radios.forEach(radio => {
            radio.addEventListener('change', toggleContent);
        });
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        if (validateForm()) {
            const selectedType = document.querySelector('input[name="approveType"]:checked');
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kind"]:checked`);
            if (selectedKind) {
                if (selectedKind.value.includes('BothPAndL')) {
                    result.textContent = '*還沒做好，請耐心*已選擇簽';
                } else if (selectedKind.value.includes('Petition')) {
                    result.textContent = '*還沒做好，請耐心*已選擇函';
                } else if (selectedKind.value.includes('Letter')) {
                    result.textContent = '*還沒做好，請耐心*已選擇簽及函';
                }
            }
        }
    });

    // Initial state
    hideAll(kindContainers);
    hideAll(contentDivs);
});
