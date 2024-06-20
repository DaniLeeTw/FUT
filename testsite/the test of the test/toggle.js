document.addEventListener('DOMContentLoaded', () => {
    const radioButtons = document.querySelectorAll('input[name="toggle"]');
    const divs = document.querySelectorAll('.toggle-div');
    const result = document.getElementById('result');
    const submitButton = document.getElementById('submit');

    function toggleDivs() {
        divs.forEach(div => {
            const inputs = div.querySelectorAll('input');
            if (div.querySelector('input[type="radio"]:checked')) {
                div.style.display = 'block';
                inputs.forEach(input => input.disabled = false);
            } else {
                div.style.display = 'none';
                inputs.forEach(input => input.disabled = true);
            }
        });
    }

    radioButtons.forEach(radio => {
        radio.addEventListener('change', toggleDivs);
    });

    submitButton.addEventListener('click', (e) => {
        e.preventDefault();
        let selectedOption = document.querySelector('input[name="toggle"]:checked');
        if (selectedOption) {
            switch (selectedOption.id) {
                case 'radioDiv1':
                    result.textContent = '*還沒做好，請耐心*已選擇簽';
                    break;
                case 'radioDiv2':
                    result.textContent = '*還沒做好，請耐心*已選擇函';
                    break;
                case 'radioDiv3':
                    result.textContent = '*還沒做好，請耐心*已選擇簽及函';
                    break;
                default:
                    result.textContent = '請選擇公文類型！';
            }
        } else {
            result.textContent = '請選擇公文類型！';
        }
    });

    // Initial state
    toggleDivs();
});
