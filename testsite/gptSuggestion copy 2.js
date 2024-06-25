document.addEventListener('DOMContentLoaded', () => {
    const actionTypes = document.querySelectorAll('input[name="actionTypes"]');
    const approveTypes = document.querySelectorAll('input[name="approveTypes"]');
    const sections = document.querySelectorAll('section');
    const kindContainers = document.querySelectorAll('.selectKinds');
    const contentDivs = document.querySelectorAll('.content');
    const submitButton = document.getElementById('submit');
    const result = document.getElementById('result');
    const approveContainer = document.getElementById('approveContainer');
    const appropriateContainer = document.getElementById('appropriateContainer');
    const preparedFundContainer = document.getElementById('preparedFundContainer');

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
        const selectedAction = document.querySelector('input[name="actionTypes"]:checked');
        if (selectedAction) {
            hideAll([approveContainer, appropriateContainer, preparedFundContainer]);

            switch (selectedAction.value) {
                case 'approve':
                    showElement(approveContainer);
                    break;
                case 'appropriate':
                    showElement(appropriateContainer);
                    break;
                case 'preparedFund':
                    showElement(preparedFundContainer);
                    break;
            }
        }
    }

    function toggleKinds() {
        hideAll(kindContainers);
        hideAll(contentDivs);
        const selectedType = document.querySelector('input[name="approveTypes"]:checked');
        if (selectedType) {
            const kindContainer = document.getElementById(`select${selectedType.id}Kinds`);
            if (kindContainer) {
                showElement(kindContainer);
            }
        }
    }

    function toggleContent() {
        hideAll(contentDivs);
        const selectedType = document.querySelector('input[name="approveTypes"]:checked');
        if (selectedType) {
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
            if (selectedKind) {
                const contentDiv = document.getElementById(`${selectedKind.value}Content`);
                if (contentDiv) {
                    showElement(contentDiv);
                }
            }
        }
    }

    function validateForm() {
        const selectedAction = document.querySelector('input[name="actionTypes"]:checked');
        if (!selectedAction) {
            alert('請選擇動作！');
            return false;
        }
        if (selectedAction.value === 'approve') {
            const selectedType = document.querySelector('input[name="approveTypes"]:checked');
            if (!selectedType) {
                alert('請選擇核定態樣！');
                return false;
            }
            const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
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
        }
        return true;
    }

    actionTypes.forEach(radio => {
        radio.addEventListener('change', () => {
            toggleContainers();
            toggleKinds();
            toggleContent();
        });
    });

    approveTypes.forEach(radio => {
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
            const selectedAction = document.querySelector('input[name="actionTypes"]:checked');
            let resultText = `Selected Action: ${selectedAction.id}`;
            if (selectedAction.value === 'approve') {
                const selectedType = document.querySelector('input[name="approveTypes"]:checked');
                const selectedKind = document.querySelector(`input[name="${selectedType.value}Kinds"]:checked`);
                if (selectedKind) {
                    resultText += `, Selected Type: ${selectedType.id}, Selected Kind: ${selectedKind.id}`;
                }
            }
            result.textContent = resultText;
        }
    });

    // Initial state
    hideAll([approveContainer, appropriateContainer, preparedFundContainer]);
    hideAll(kindContainers);
    hideAll(contentDivs);
});
