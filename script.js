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
});
// Add this to your existing JavaScript file
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now');
    const closeModal = document.querySelector('.close-modal');
    const form = document.getElementById('loanApplicationForm');
    const cancelBtn = document.querySelector('.cancel-btn');

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

    // Form submission
    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Validate form
        if (!form.checkValidity()) {
            form.reportValidity();
            return;
        }

        // Prepare form data
        const formData = new FormData(form);
        const data = Object.fromEntries(formData.entries());
        
        // Add timestamp and user info
        data.submissionDate = new Date().toISOString();
        data.submittedBy = 'AbdulManan-KB';

        try {
            // Show loading state
            form.classList.add('loading');
            
            // Simulate API call (replace with your actual API endpoint)
            await new Promise(resolve => setTimeout(resolve, 1500));
            
            // Show success message
            const successMessage = document.createElement('div');
            successMessage.className = 'success-message';
            successMessage.textContent = 'آپ کی درخواست کامیابی سے جمع کر لی گئی ہے۔';
            form.insertBefore(successMessage, form.firstChild);

            // Reset form after 2 seconds
            setTimeout(() => {
                closeModalHandler();
                successMessage.remove();
            }, 2000);

            // Log the submission (replace with your actual logging logic)
            console.log('Form submitted:', data);

        } catch (error) {
            console.error('Submission error:', error);
            alert('درخواست جمع کرنے میں مسئلہ پیش آگیا۔ براہ کرم دوبارہ کوشش کریں۔');
        } finally {
            form.classList.remove('loading');
        }
    });
});
