// First add debug console logs to track initialization
console.log('Script starting...');

document.addEventListener('DOMContentLoaded', function() {
    console.log('DOM Loaded - Initializing...');
    
    // Constants with updated timestamp
    const TIMESTAMP = "2025-02-16 04:01:00";
    const USER = "AbdulManan-KB";
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyiqyq__OMHUU91306W1CgHTgSK3xwKVkHyw1V6ixkA9AcHR-xEBGsWKRh4xNVXF4_J/exec';

    // Get all necessary elements with debug logs
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now');
    const closeModal = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('loanApplicationForm');
    
    console.log('Elements found:', {
        modal: !!modal,
        buttons: applyNowButtons.length,
        closeBtn: !!closeModal,
        cancelBtn: !!cancelBtn,
        form: !!form
    });

    // Extra button fix: Add click handlers to all apply now buttons
    applyNowButtons.forEach((button, index) => {
        console.log(`Setting up button ${index + 1}`);
        button.addEventListener('click', (e) => {
            e.preventDefault(); // Prevent any default behavior
            console.log('Apply Now button clicked');
            if (modal) {
                modal.style.display = 'block';
                document.body.style.overflow = 'hidden';
                console.log('Modal displayed');
            } else {
                console.error('Modal element not found');
            }
        });
    });

    // Close modal function with logging
    function closeModalFunction() {
        console.log('Closing modal');
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (form) form.reset();
            console.log('Modal closed and form reset');
        }
    }

    // Close modal event listeners
    if (closeModal) {
        closeModal.addEventListener('click', () => {
            console.log('Close button clicked');
            closeModalFunction();
        });
    }

    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            console.log('Cancel button clicked');
            closeModalFunction();
        });
    }

    // Close modal when clicking outside
    window.addEventListener('click', (e) => {
        if (e.target === modal) {
            console.log('Clicked outside modal');
            closeModalFunction();
        }
    });

    // Form validation function
    function validateFormData(data) {
        console.log('Validating form data');
        const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
        const phoneRegex = /^\d{4}-\d{7}$/;

        if (!cnicRegex.test(data.cnic)) {
            showMessage('براہ کرم درست شناختی کارڈ نمبر درج کریں', 'error');
            return false;
        }

        if (!phoneRegex.test(data.phone)) {
            showMessage('براہ کرم درست موبائل نمبر درج کریں', 'error');
            return false;
        }

        if (!data.monthlyIncome || parseInt(data.monthlyIncome) < 10000) {
            showMessage('ماہانہ آمدنی کم از کم 10,000 روپے ہونی چاہیے', 'error');
            return false;
        }

        return true;
    }

    // Message display function
    function showMessage(message, type) {
        console.log(`Showing ${type} message:`, message);
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;
        
        const existingMessage = form.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        form.insertBefore(messageDiv, form.firstChild);
        
        setTimeout(() => {
            messageDiv.remove();
            console.log('Message removed');
        }, 5000);
    }

    // Input formatting
    const cnicInput = document.getElementById('cnic');
    if (cnicInput) {
        cnicInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 13) value = value.slice(0, 13);
            if (value.length >= 12) {
                value = value.slice(0, 5) + '-' + value.slice(5, 12) + '-' + value.slice(12);
            } else if (value.length >= 5) {
                value = value.slice(0, 5) + '-' + value.slice(5);
            }
            e.target.value = value;
        });
    }

    const phoneInput = document.getElementById('phone');
    if (phoneInput) {
        phoneInput.addEventListener('input', function(e) {
            let value = e.target.value.replace(/\D/g, '');
            if (value.length > 11) value = value.slice(0, 11);
            if (value.length >= 4) {
                value = value.slice(0, 4) + '-' + value.slice(4);
            }
            e.target.value = value;
        });
    }

    // Form submission
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();
            console.log('Form submitted');
            
            // Show loading state
            form.classList.add('loading');
            const submitButton = form.querySelector('.submit-btn');
            submitButton.disabled = true;

            // Get form data
            const formData = new FormData(form);
            const data = {
                submissionDate: TIMESTAMP,
                submittedBy: USER,
                ...Object.fromEntries(formData.entries())
            };

            console.log('Form data:', data);

            try {
                // Validate form data
                if (!validateFormData(data)) {
                    console.log('Form validation failed');
                    form.classList.remove('loading');
                    submitButton.disabled = false;
                    return;
                }

                console.log('Sending data to server');
                const response = await fetch(GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                const result = await response.json();
                console.log('Server response:', result);
                
                if (result.status === 'success') {
                    showMessage('آپ کی درخواست کامیابی سے جمع کر لی گئی ہے۔', 'success');
                    
                    setTimeout(() => {
                        closeModalFunction();
                        form.reset();
                        console.log('Form reset and modal closed');
                    }, 2000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }

            } catch (error) {
                console.error('Submission error:', error);
                showMessage('درخواست جمع کرنے میں مسئلہ پیش آگیا۔ براہ کرم دوبارہ کوشش کریں۔', 'error');
            } finally {
                form.classList.remove('loading');
                submitButton.disabled = false;
                console.log('Form submission complete');
            }
        });
    }

    console.log('Initialization complete');
});
