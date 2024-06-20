document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="toggle"]');
    const divs = document.querySelectorAll('.toggle-div');
    const submitButton = document.getElementById('submit');
    const result = document.getElementById('result');

    function toggleDivs() {
        divs.forEach(div => {
            div.style.display = 'none';
            const inputs = div.querySelectorAll('input');
            inputs.forEach(input => input.disabled = true);

            const nestedDivs = div.querySelectorAll('.layer1, .layer2, .layer3, .layer4, .layer5');
            nestedDivs.forEach(nestedDiv => nestedDiv.style.display = 'none');
        });

        const selectedOption = document.querySelector('input[name="toggle"]:checked');
        if (selectedOption) {
            const divToShow = document.getElementById(`${selectedOption.value}Container`);
            if (divToShow) {
                divToShow.style.display = 'block';
                const inputsToEnable = divToShow.querySelectorAll('input');
                inputsToEnable.forEach(input => input.disabled = false);

                const nestedDivs = divToShow.querySelectorAll('.layer1, .layer2, .layer3, .layer4, .layer5');
                nestedDivs.forEach(nestedDiv => nestedDiv.style.display = 'block');
            }
        }
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', toggleDivs);
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();

        const selectedOption = document.querySelector('input[name="toggle"]:checked');
        if (!selectedOption) {
            result.textContent = '請選擇公文類型！';
            return;
        }

        let isValid = true;
        const divToValidate = document.getElementById(`${selectedOption.value}Container`);
        if (divToValidate) {
            const inputsToValidate = divToValidate.querySelectorAll('input[required]');
            inputsToValidate.forEach(input => {
                if (!input.value) {
                    isValid = false;
                    input.focus();
                    return;
                }
            });
        }

        if (!isValid) {
            alert('Please fill in all required fields.');
            return;
        }

        if (selectedOption.value === 'bothPAndL') {
            result.textContent = '*還沒做好，請耐心*已選擇簽';
        } else if (selectedOption.value === 'Petition') {
            result.textContent = '*還沒做好，請耐心*已選擇函';
        } else if (selectedOption.value === 'Letter') {
            result.textContent = '*還沒做好，請耐心*已選擇簽及函';
        }
    });

    // Initial state
    toggleDivs();
});
