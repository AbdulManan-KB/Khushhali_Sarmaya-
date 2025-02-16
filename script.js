document.addEventListener('DOMContentLoaded', function() {
    // Constants updated with latest timestamp
    const TIMESTAMP = "2025-02-16 06:17:39";  // Updated timestamp
    const USER = "AbdulManan-KB";             // Your login
    const DEPLOYMENT_ID = "AKfycbw6Nyp5qTSIt9rilMrCoPXf1K6VCL_cn1ryJl5Ec0Iqd8ZPDclRlMg9e_E0dY7va6f6";
    const GOOGLE_SHEETS_URL = `https://script.google.com/macros/s/${DEPLOYMENT_ID}/exec`;

    console.log('Initializing with timestamp:', TIMESTAMP);

    // Get DOM elements with both button classes
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now, .cta-button');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('loanApplicationForm');

    console.log('Found apply buttons:', applyNowButtons.length);

    // Message display function
    function showMessage(message, type = 'error') {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;
        
        const existingMessage = form.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        form.insertBefore(messageDiv, form.firstChild);
        setTimeout(() => messageDiv.remove(), 5000);
    }

    // Modal functions with animations
    function openModal() {
        if (modal) {
            modal.style.display = 'block';
            modal.classList.add('modal-active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeModal() {
        if (modal) {
            modal.classList.remove('modal-active');
            setTimeout(() => {
                modal.style.display = 'none';
                document.body.style.overflow = 'auto';
                if (form) {
                    form.reset();
                    const message = form.querySelector('.message');
                    if (message) message.remove();
                }
            }, 300);
        }
    }

    // Event Listeners with logging
    applyNowButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            console.log('Apply button clicked');
            openModal();
        });
    });

    // Close modal buttons
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeModal);
    if (cancelBtn) cancelBtn.addEventListener('click', closeModal);
    
    // Close on outside click
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Form submission handler
    if (form) {
        form.addEventListener('submit', async function(e) {
            e.preventDefault();

            const submitButton = form.querySelector('.submit-btn');
            submitButton.disabled = true;
            submitButton.textContent = 'درخواست جمع کر رہا ہے...';
            form.classList.add('loading');

            try {
                const formData = new FormData(form);
                
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
                submitButton.disabled = false;
                submitButton.textContent = 'درخواست جمع کریں';
                form.classList.remove('loading');
            }
        });

        // Input formatting
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
