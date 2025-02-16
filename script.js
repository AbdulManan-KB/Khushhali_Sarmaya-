document.addEventListener('DOMContentLoaded', function() {
    // Updated Constants
    const TIMESTAMP = "2025-02-16 09:17:08";  // Latest timestamp
    const USER = "AbdulManan-KB";             // Your login
    const WHATSAPP_NUMBER = "923460408190";   // Your WhatsApp number with country code

    // Get DOM elements
    const modal = document.getElementById('applicationModal');
    const applyNowButtons = document.querySelectorAll('.apply-now, .cta-button');
    const closeModalBtn = document.querySelector('.close-modal');
    const cancelBtn = document.querySelector('.cancel-btn');
    const form = document.getElementById('loanApplicationForm');

    // Format WhatsApp message in Urdu
    function formatWhatsAppMessage(data) {
        const loanRanges = {
            '350001-500000': '3,50,001 - 5,00,000',
            '500001-750000': '5,00,001 - 7,50,000',
            '750001-1000000': '7,50,001 - 10,00,000'
        };

        const businessTypes = {
            'retail': 'ریٹیل',
            'wholesale': 'ہول سیل',
            'manufacturing': 'مینوفیکچرنگ',
            'services': 'سروسز',
            'other': 'دیگر'
        };

        return encodeURIComponent(`*خوشحالی مائیکروفنانس بینک - نئی لون درخواست*\n
───────────────
📅 *تاریخ:* ${TIMESTAMP}\n
👤 *درخواست گزار کا نام:* ${data.fullName}\n
🆔 *شناختی کارڈ نمبر:* ${data.cnic}\n
📱 *موبائل نمبر:* ${data.phone}\n
💼 *کاروبار کی نوعیت:* ${businessTypes[data.businessType] || data.businessType}\n
💰 *مطلوبہ رقم:* ${loanRanges[data.loanAmount] || data.loanAmount} روپے\n
📍 *کاروبار کا مقام:* ${data.businessAddress}\n
💵 *ماہانہ آمدنی:* ${data.monthlyIncome} روپے\n
───────────────
Submitted by: ${USER}`);
    }

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

    // Modal functions
    function openModal() {
        if (modal) {
            modal.style.display = 'block';
            document.body.style.overflow = 'hidden';
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
    
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Form submission handler
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();

            // Basic validation
            const requiredFields = form.querySelectorAll('[required]');
            let isValid = true;

            requiredFields.forEach(field => {
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

            const formData = new FormData(form);
            
            const data = {
                fullName: formData.get('fullName'),
                cnic: formData.get('cnic'),
                phone: formData.get('phone'),
                businessType: formData.get('businessType'),
                loanAmount: formData.get('loanAmount'),
                businessAddress: formData.get('businessAddress'),
                monthlyIncome: formData.get('monthlyIncome')
            };

            // Open WhatsApp with formatted message
            const whatsappUrl = `https://wa.me/${WHATSAPP_NUMBER}?text=${formatWhatsAppMessage(data)}`;
            window.open(whatsappUrl, '_blank');
            
            // Show success message and close modal
            showMessage('درخواست کامیابی سے واٹس ایپ پر بھیج دی گئی ہے۔', 'success');
            setTimeout(closeModal, 2000);
        });

        // Input formatting for CNIC
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

        // Input formatting for phone number
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
