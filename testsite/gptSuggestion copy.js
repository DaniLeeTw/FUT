document.addEventListener("DOMContentLoaded", function() {
    const approvalForm = document.getElementById("approvalForm");
    const approveType1Content = document.getElementById("approveType1Content");
    const approveType2Content = document.getElementById("approveType2Content");

    // Function to toggle visibility of approval content based on approveTypes
    function toggleApprovalContent() {
        const selectedType = document.querySelector('input[name="approveTypes"]:checked');
        if (selectedType) {
            const selectedValue = selectedType.value;
            if (selectedValue === "Type1") {
                approveType1Content.style.display = "block";
                approveType2Content.style.display = "none";
            } else if (selectedValue === "Type2") {
                approveType1Content.style.display = "none";
                approveType2Content.style.display = "block";
            }
        }
    }

    // Event listener for approveTypes radio buttons
    document.querySelectorAll('input[name="approveTypes"]').forEach(radio => {
        radio.addEventListener('change', toggleApprovalContent);
    });

    // Event listener for form submission
    approvalForm.addEventListener('submit', function(event) {
        // Validate form before submission
        if (!validateForm()) {
            event.preventDefault(); // Prevent form submission if validation fails
            // Optionally, display an error message or highlight fields
        }
    });

    // Function to validate the form
    function validateForm() {
        let isValid = true;

        // Validate required fields based on visibility
        if (approveType1Content.style.display === "block") {
            const selectedKind = document.querySelector('input[name="approveKinds"]:checked');
            if (!selectedKind) {
                isValid = false;
                // Optionally, display an error message or highlight fields
            }
        }

        // Validate other fields as needed

        return isValid;
    }

    // Initial toggle of approval content based on default selection
    toggleApprovalContent();
});
