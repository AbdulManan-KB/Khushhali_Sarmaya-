<!DOCTYPE html>
<html lang="ur" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خوشحالی سرمایہ - کاروباری قرض</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
</head>
<body>
    <header class="header">
        <nav class="navbar">
            <div class="header-content">
                <h2 class="site-title">خوشحالی مائیکروفنانس - کاروباری قرض</h2>
                <div class="logo">
                    <img src="logo.png" alt="خوشحالی بینک" class="logo-img">
                </div>
            </div>
            <div class="nav-links">
                <a href="#home">ہوم</a>
                <a href="#features">خصوصیات</a>
                <a href="#loan-details">قرض کی تفصیلات</a>
                <a href="#contact" class="cta-button">رابطہ کریں</a>
            </div>
        </nav>
    </header>
<!-- Modal Form -->
<div id="applicationModal" class="modal">
    <div class="modal-content">
        <div class="modal-header">
            <h2>قرض کی درخواست فارم</h2>
            <span class="close-modal">&times;</span>
        </div>

        <form id="loanApplicationForm">
            <div class="form-group">
                <label for="fullName">مکمل نام *</label>
                <input type="text" id="fullName" name="fullName" required>
            </div>

            <div class="form-group">
                <label for="cnic">شناختی کارڈ نمبر *</label>
                <input type="text" id="cnic" name="cnic" pattern="\d{5}-\d{7}-\d{1}" placeholder="35201-1234567-1" required>
            </div>

            <div class="form-group">
                <label for="phone">موبائل نمبر *</label>
                <input type="text" id="phone" name="phone" pattern="\d{4}-\d{7}" placeholder="0346-0408190" required>
            </div>

            <div class="form-group">
                <label for="businessType">کاروبار کی قسم *</label>
                <select id="businessType" name="businessType" required>
                    <option value="">Select Business Type</option>
                    <option value="Retail">Retail ریٹیل</option>
                    <option value="Wholesale">Wholesale ہول سیل</option>
                    <option value="Service">Service سروس</option>
                    <option value="Manufacturing">Manufacturing مینوفیکچرنگ</option>
                    <option value="Agriculture">Agriculture زراعت</option>
                    <option value="Other">Other دیگر</option>
                </select>
            </div>

            <div class="form-group">
                <label for="loanAmount">قرض کی رقم *</label>
                <select id="loanAmount" name="loanAmount" required>
                    <option value="">Select Loan Amount</option>
                    <option value="350001-500000">350,001 - 500,000</option>
                    <option value="500001-750000">500,001 - 750,000</option>
                    <option value="750001-1000000">750,001 - 1,000,000</option>
                </select>
            </div>

            <div class="form-group">
                <label for="businessAddress">کاروباری پتہ *</label>
                <textarea id="businessAddress" name="businessAddress" rows="3" required></textarea>
            </div>

            <div class="form-group">
                <label for="monthlyIncome">ماہانہ آمدنی *</label>
                <input type="number" id="monthlyIncome" name="monthlyIncome" min="0" placeholder="50000" required>
                <small class="helper-text">روپے میں درج کریں</small>
            </div>

            <div class="button-group">
                <button type="button" class="cancel-button" onclick="closeModal()">منسوخ کریں</button>
                <button type="submit" class="submit-button">درخواست جمع کریں</button>
            </div>

            <!-- Hidden Fields -->
            <input type="hidden" name="submissionDate" value="2025-02-16 17:14:37">
            <input type="hidden" name="submittedBy" value="AbdulManan-KB">
        </form>
    </div>
</div>
    <!-- Your other sections here -->

    <!-- Contact Section -->
    <section id="contact" class="contact-section">
        <div class="contact-info">
            
        
<div class="profile-section">
    <div class="profile-image">
        <!-- Using a direct GitHub avatar URL -->
        <img src="https://avatars.githubusercontent.com/u/AbdulManan-KB?size=200" 
             alt="عبدالمنان" 
             class="profile-pic"
             onerror="this.src='profile.jpg'">
    </div>
    <div class="profile-details">
        <h3 class="profile-name">عبدالمنان</h3>
        <p class="profile-title">لون آفیسر</p>
    </div>
</div>

            <!-- Contact Details -->
            <div class="contact-details">
                <a href="tel:+923460408190" class="phone-button">
                    <i class="fas fa-phone"></i>
                    0346-0408190
                    <span class="call-text">ابھی کال ملائیں</span>
                </a>
                
                <p class="secondary-phone">
                    <i class="fas fa-phone"></i>
                    0546-566577
                </p>
                
                <p class="address">
                    <i class="fas fa-location-dot"></i>
                    نزد ہیلاں چونگی خوشحالی مائیکروفنانس بینک پھالیہ
                </p>
                
                <p class="working-hours">
                    <i class="fas fa-clock"></i>
                    پیر تا ہفتہ (صبح 9 بجے سے شام 5 بجے تک)
                </p>
            </div>
        </div>
    </section>

    <footer class="footer">
        <p>© 2025 خوشحالی مائیکروفنانس بینک - تمام حقوق محفوظ ہیں</p>
    </footer>
</body>
</html>
