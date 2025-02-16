document.addEventListener('DOMContentLoaded', function() {
    // Constants - Updated with current timestamp
    const TIMESTAMP = "2025-02-16 10:42:46";
    const USER = "AbdulManan-KB";
    const WHATSAPP_NUMBER = "923460408190";

    // Get DOM elements
    const modal = document.getElementById('applicationModal');
    const applyButtons = document.querySelectorAll('.apply-now');
    const closeButton = document.querySelector('.close-modal');
    const cancelButton = document.querySelector('.cancel-btn');
    const form = document.getElementById('loanApplicationForm');

    // Modal functions
    function openModal() {
        modal.style.display = 'block';
        document.body.style.overflow = 'hidden';
    }

    function closeModal() {
        modal.style.display = 'none';
        document.body.style.overflow = 'auto';
        if (form) form.reset();
    }

    // Event listeners for all apply now buttons
    applyButtons.forEach(button => {
        button.addEventListener('click', openModal);
    });

    closeButton.addEventListener('click', closeModal);
    cancelButton.addEventListener('click', closeModal);
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }

    // Format CNIC
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

    // Format phone
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        if (value.length > 11) value = value.slice(0, 11);
        if (value.length >= 4) {
            value = value.slice(0, 4) + '-' + value.slice(4);
        }
        e.target.value = value;
    });

    // Format currency input
    const monthlyIncomeInput = document.getElementById('monthlyIncome');
    monthlyIncomeInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');
        e.target.value = value;
    });

    // Handle form submission
    if (form) {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Format currency
            function formatCurrency(amount) {
                return new Intl.NumberFormat('ur-PK').format(amount);
            }

            // Get loan amount range text
            function getLoanAmountText(value) {
                const ranges = {
                    "350001-500000": "3,50,001 - 5,00,000",
                    "500001-750000": "5,00,001 - 7,50,000",
                    "750001-1000000": "7,50,001 - 10,00,000"
                };
                return ranges[value] || value;
            }

            // Create WhatsApp message
            const message = encodeURIComponent(`*خوشحالی مائیکروفنانس - نئی لون درخواست*\n
───────────────
📅 تاریخ: ${TIMESTAMP}\n
👤 درخواست گزار کا نام: ${formData.get('fullName')}
🆔 شناختی کارڈ نمبر: ${formData.get('cnic')}
📱 فون نمبر: ${formData.get('phone')}
💼 کاروبار کی قسم: ${formData.get('businessType')}
💰 قرض کی رقم: ${getLoanAmountText(formData.get('loanAmount'))} روپے
📍 کاروباری پتہ: ${formData.get('businessAddress')}
💵 ماہانہ آمدنی: ${formatCurrency(formData.get('monthlyIncome'))} روپے
───────────────
درخواست دہندہ: ${USER}`);

            // Open WhatsApp
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
            
            // Close modal
            closeModal();
        });
    }
});
