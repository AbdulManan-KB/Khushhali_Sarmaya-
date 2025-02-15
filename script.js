document.addEventListener('DOMContentLoaded', function() {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Apply Now button click handler
    document.querySelectorAll('.apply-now').forEach(button => {
        button.addEventListener('click', function() {
            // You can replace this with your actual application form URL
            window.location.href = '#contact';
        });
    });

    // Add animation to feature cards on scroll
    const featureCards = document.querySelectorAll('.feature-card');
    
    const observerOptions = {
        threshold: 0.2
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    featureCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
        observer.observe(card);
    });

    // Modal and Form Handling
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now');
    const closeModal = document.querySelector('.close-modal');
    const form = document.getElementById('loanApplicationForm');
    const cancelBtn = document.querySelector('.cancel-btn');

    // Constants
    const GOOGLE_SHEETS_URL = 'https://script.google.com/macros/s/AKfycbyiqyq__OMHUU91306W1CgHTgSK3xwKVkHyw1V6ixkA9AcHR-xEBGsWKRh4xNVXF4_J/exec';
    submissionDate: "2025-02-15 17:16:23",
submittedBy: "AbdulManan-KB"
    // CNIC formatting
    const cnicInput = document.getElementById('cnic');
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

    // Phone number formatting
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length >= 4) {
            value = value.slice(0, 4) + '-' + value.slice(4);
        }
        e.target.value = value;
    });

    // Open modal
    applyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
        });
    });

    // Close modal
    function closeModalHandler() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        form.reset();
    }

    closeModal.addEventListener('click', closeModalHandler);
    cancelBtn.addEventListener('click', closeModalHandler);
    modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModalHandler();
    });

    // Form validation function
    function validateFormData(data) {
        // CNIC validation (format: 12345-1234567-1)
        const cnicRegex = /^\d{5}-\d{7}-\d{1}$/;
        if (!cnicRegex.test(data.cnic)) {
            showMessage('براہ کرم درست شناختی کارڈ نمبر درج کریں', 'error');
            return false;
        }

        // Phone validation (format: 0300-1234567)
        const phoneRegex = /^\d{4}-\d{7}$/;
        if (!phoneRegex.test(data.phone)) {
            showMessage('براہ کرم درست موبائل نمبر درج کریں', 'error');
            return false;
        }

        // Monthly income validation
        if (!data.monthlyIncome || parseInt(data.monthlyIncome) < 10000) {
            showMessage('ماہانہ آمدنی کم از کم 10,000 روپے ہونی چاہیے', 'error');
            return false;
        }

        return true;
    }

    // Message display function
    function showMessage(message, type) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${type}-message`;
        messageDiv.textContent = message;
        
        // Remove any existing messages
        const existingMessage = form.querySelector('.message');
        if (existingMessage) {
            existingMessage.remove();
        }
        
        form.insertBefore(messageDiv, form.firstChild);
        
        // Remove message after 5 seconds
        setTimeout(() => {
            messageDiv.remove();
        }, 5000);
    }

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Show loading state
        form.classList.add('loading');
        const submitButton = form.querySelector('.submit-btn');
        submitButton.disabled = true;
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            submissionDate: "2025-02-15 17:10:21",
            submittedBy: "AbdulManan-KB",
            ...Object.fromEntries(formData.entries())
        };
        
        try {
            // Validate form data
            if (!validateFormData(data)) {
                form.classList.remove('loading');
                submitButton.disabled = false;
                return;
            }

            // Send data to Google Sheets
            const response = await fetch(GOOGLE_SHEETS_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();
            
            if (result.status === 'success') {
                showMessage('آپ کی درخواست کامیابی سے جمع کر لی گئی ہے۔', 'success');
                
                // Reset form and close modal after delay
                setTimeout(() => {
                    form.reset();
                    closeModalHandler();
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
        }
    });
});
