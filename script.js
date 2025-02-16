document.addEventListener('DOMContentLoaded', function() {
    // Constants updated with latest timestamp
    const TIMESTAMP = "2025-02-16 06:50:36";  // Your current UTC time
    const USER = "AbdulManan-KB";             // Your login
    const DEPLOYMENT_ID = "AKfycbw6Nyp5qTSIt9rilMrCoPXf1K6VCL_cn1ryJl5Ec0Iqd8ZPDclRlMg9e_E0dY7va6f6";
    const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec`;

    // Get DOM elements
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now, .cta-button');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('loanApplicationForm');

    // Message display function with improved visibility
    function showMessage(message, type = 'error') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;
        
        const existingMessage = form.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        form.insertBefore(messageDiv, form.firstChild);
        
        // Scroll to message
        messageDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        
        setTimeout(() => messageDiv.remove(), 5000);
    }

    // Modal functions with scroll management
    function openModal() {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            // Reset form and scroll position
            if (form) {
                form.reset();
                form.scrollTop = 0;
            }
        }
    }

    function closeModal() {
        if (modal) {
            modal.style.display = 'none';
            document.body.style.overflow = 'auto';
            if (form) {
                form.reset();
                const message = form.querySelector('.message');
                if (message) message.remove();
            }
        }
    }

    // Event Listeners
    applyNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            openModal();
        });
    });

    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    
    // Close modal on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Form submission handler with improved error handling
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            // Validate form
            const submitButton = form.querySelector('.submit-btn');
            const formData = new FormData(form);
            
            // Check required fields
            let isValid = true;
            form.querySelectorAll('[required]').forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    field.classList.add('invalid');
                } else {
                    field.classList.remove('invalid');
                }
            });

            if (!isValid) {
                showMessage('براہ کرم تمام مطلوبہ فیلڈز کو پُر کریں۔');
                return;
            }

            // Disable submit button and show loading state
            if (submitButton) {
                submitButton.disabled = true;
                submitButton.textContent = 'درخواست جمع کر رہا ہے...';
            }
            form.classList.add('loading');

            try {
                // Prepare data
                const data = {
                    submissionDate: TIMESTAMP,
                    submittedBy: USER,
                    fullName: formData.get('fullName'),
                    cnic: formData.get('cnic'),
                    phone: formData.get('phone'),
                    businessType: formData.get('businessType'),
                    loanAmount: formData.get('loanAmount'),
                    businessAddress: formData.get('businessAddress'),
                    monthlyIncome: formData.get('monthlyIncome')
                };

                console.log('Submitting data:', data);

                const response = await fetch(GOOGLE_SHEETS_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();

                if (result.success) {
                    showMessage('آپ کی درخواست کامیابی سے جمع کر لی گئی ہے۔', 'success');
                    setTimeout(closeModal, 2000);
                } else {
                    throw new Error(result.message || 'Submission failed');
                }

            } catch (error) {
                console.error('Form submission error:', error);
                showMessage('درخواست جمع کرنے میں مسئلہ آ گیا ہے۔ براہ کرم دوبارہ کوشش کریں۔');
            } finally {
                // Reset button state
                if (submitButton) {
                    submitButton.disabled = false;
                    submitButton.textContent = 'درخواست جمع کریں';
                }
                form.classList.remove('loading');
            }
        });

        // Input formatting with improved validation
        const cnicInput = form.querySelector('#cnic');
        if (cnicInput) {
            cnicInput.addEventListener('input', (e) => {
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

        const phoneInput = form.querySelector('#phone');
        if (phoneInput) {
            phoneInput.addEventListener('input', (e) => {
                let value = e.target.value.replace(/\D/g, '');
                if (value.length > 11) value = value.slice(0, 11);
                if (value.length >= 4) {
                    value = value.slice(0, 4) + '-' + value.slice(4);
                }
                e.target.value = value;
            });
        }
    }
});
