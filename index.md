
<html lang="ur" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Loan Application Form</title>
    <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="styles.css">
</head>
<body>
    <!-- Main Content -->
    <div class="container">
        <button class="apply-now">درخواست دیں</button>
    </div>

    <!-- Modal -->
    <div id="applicationModal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h2>قرض کی درخواست</h2>
                <span class="close-modal">&times;</span>
            </div>

            <form id="loanApplicationForm">
                <div class="form-group">
                    <label for="fullName">مکمل نام</label>
                    <input type="text" id="fullName" name="fullName" required>
                </div>

                <div class="form-group">
                    <label for="cnic">شناختی کارڈ نمبر</label>
                    <input type="text" id="cnic" name="cnic" placeholder="00000-0000000-0" required>
                </div>

                <div class="form-group">
                    <label for="phone">فون نمبر</label>
                    <input type="text" id="phone" name="phone" placeholder="0300-0000000" required>
                </div>

                <div class="form-group">
                    <label for="businessType">کاروبار کی قسم</label>
                    <select id="businessType" name="businessType" required>
                        <option value="">کاروبار منتخب کریں</option>
                        <option value="retail">ریٹیل</option>
                        <option value="wholesale">ہول سیل</option>
                        <option value="service">سروس</option>
                        <option value="manufacturing">مینوفیکچرنگ</option>
                    </select>
                </div>

                <div class="form-group">
                    <label for="loanAmount">قرض کی رقم</label>
                    <input type="number" id="loanAmount" name="loanAmount" min="10000" max="1000000" required>
                </div>

                <div class="form-group">
                    <label for="businessAddress">کاروباری پتہ</label>
                    <textarea id="businessAddress" name="businessAddress" required></textarea>
                </div>

                <div class="form-group">
                    <label for="monthlyIncome">ماہانہ آمدنی</label>
                    <input type="number" id="monthlyIncome" name="monthlyIncome" min="0" required>
                </div>

                <div class="button-group">
                    <button type="button" class="cancel-btn">منسوخ کریں</button>
                    <button type="submit" class="submit-btn">جمع کریں</button>
                </div>
            </form>
        </div>
    </div>

    <script>
        // Current timestamp and user
        const TIMESTAMP = "2025-02-16 10:07:19";
        const USER = "AbdulManan-KB";
        const WHATSAPP_NUMBER = "923460408190";

        // Get DOM elements
        const modal = document.getElementById('applicationModal');
        const applyButton = document.querySelector('.apply-now');
        const closeButton = document.querySelector('.close-modal');
        const cancelButton = document.querySelector('.cancel-btn');
        const form = document.getElementById('loanApplicationForm');

        // Modal functions
        function openModal() {
            modal.style.display = 'block';
        }

        function closeModal() {
            modal.style.display = 'none';
            if (form) form.reset();
        }

        // Event listeners
        applyButton.addEventListener('click', openModal);
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

        // Handle form submission
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(form);
            
            // Format currency
            function formatCurrency(amount) {
                return new Intl.NumberFormat('ur-PK').format(amount);
            }

            // Create WhatsApp message
            const message = encodeURIComponent(`*نئی لون کی درخواست*\n
───────────────
📅 تاریخ: ${TIMESTAMP}\n
👤 درخواست گزار کا نام: ${formData.get('fullName')}
🆔 شناختی کارڈ نمبر: ${formData.get('cnic')}
📱 فون نمبر: ${formData.get('phone')}
💼 کاروبار کی قسم: ${formData.get('businessType')}
💰 قرض کی رقم: ${formatCurrency(formData.get('loanAmount'))} روپے
📍 کاروباری پتہ: ${formData.get('businessAddress')}
💵 ماہانہ آمدنی: ${formatCurrency(formData.get('monthlyIncome'))} روپے
───────────────
Submitted by: ${USER}`);

            // Open WhatsApp
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
            
            // Close modal
            closeModal();
        });
    </script>
</body>
</html>
