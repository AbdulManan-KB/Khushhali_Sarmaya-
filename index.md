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
            <div class="logo">
                <img src="logo.png" alt="خوشحالی بینک" class="logo-img">
            </div>
            <div class="nav-links">
                <a href="#home">ہوم</a>
                <a href="#features">خصوصیات</a>
                <a href="#loan-details">قرض کی تفصیلات</a>
                <a href="#contact" class="cta-button">رابطہ کریں</a>
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero-section">
            <div class="hero-content">
                <h1>خوشحالی سرمایہ – اپنے خوابوں کو حقیقت میں بدلیں!</h1>
                <p class="hero-text">اگر آپ اپنے کاروبار کو بڑھانے کے زبردست آئیڈیاز رکھتے ہیں، لیکن سرمایہ کی کمی رکاوٹ بنی ہوئی ہے، تو گھبرائیں نہیں!</p>
                <button class="apply-now">ابھی اپلائی کریں</button>
            </div>
        </section>

        <section id="features" class="features-section">
            <div class="feature-cards">
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>بڑا آرڈر ملا لیکن وسائل کم ہیں؟</h3>
                </div>
                <div class="feature-card">
                    <i class="fas fa-store"></i>
                    <h3>نیا کاروبار شروع کرنا چاہتے ہیں؟</h3>
                </div>
                <div class="feature-card">
                    <i class="fas fa-rocket"></i>
                    <h3>اپنے حریف سے آگے نکلنا چاہتے ہیں؟</h3>
                </div>
            </div>
        </section>

        <section id="loan-details" class="loan-details-section">
            <h2>قرض کی تفصیلات</h2>
            <div class="loan-info">
                <div class="info-card">
                    <i class="fas fa-money-bill-wave"></i>
                    <h3>رقم</h3>
                    <p>3,50,001 سے 10,00,000 روپے تک</p>
                </div>
                <div class="info-card">
                    <i class="fas fa-calendar-alt"></i>
                    <h3>واپسی کی مدت</h3>
                    <p>6 سے 36 ماہ</p>
                </div>
                <div class="info-card">
                    <i class="fas fa-user"></i>
                    <h3>عمر کی حد</h3>
                    <p>22 سال سے 60 سال تک</p>
                </div>
            </div>
        </section>

        <section id="collateral" class="collateral-section">
            <h2>کولیٹرل (ضمانت) کی شرائط</h2>
            <div class="collateral-types">
                <div class="collateral-card">
                    <h3>Unsecured Loan</h3>
                    <p class="loan-range">3,50,001 سے 5,00,000 روپے تک</p>
                    <ul>
                        <li>آپ کے چیک</li>
                        <li>ایک شخصی ضمانت درکار</li>
                        <li>بڑی جائیداد یا سونا رکھوانے کی ضرورت نہیں</li>
                    </ul>
                </div>
                <div class="collateral-card">
                    <h3>Secured Loan</h3>
                    <p class="loan-range">5,00,001 سے 10,00,000 روپے تک</p>
                    <ul>
                        <li>کاروباری اثاثہ جات کی ہائپوتیکیشن</li>
                        <li>آپ کے چیک</li>
                        <li>رجسٹرڈ یا ایکوئٹیبل مارگیج</li>
                    </ul>
                </div>
            </div>
        </section>

        <section id="contact" class="contact-section">
            <div class="contact-info">
                <h2>ہم سے رابطہ کریں</h2>
                <div class="contact-details">
                    <p><i class="fas fa-phone"></i> 0346-0408190</p>
                    <p><i class="fas fa-globe"></i> Khushhali Microfinance Bank</p>
                </div>
                <button class="apply-now">ابھی اپلائی کریں</button>
            </div>
        </section>
    </main>

    <footer class="footer">
        <p>© 2025 خوشحالی مائیکروفنانس بینک - تمام حقوق محفوظ ہیں</p>
    </footer>

    <script src="script.js"></script>
    <!-- Add this modal form to your index.html before the closing body tag -->
<div id="applicationModal" class="modal">
    <div class="modal-content">
        <span class="close-modal">&times;</span>
        <h2>کاروباری قرض کے لیے درخواست</h2>
        <form id="loanApplicationForm" class="application-form">
            <div class="form-group">
                <label for="fullName">مکمل نام *</label>
                <input type="text" id="fullName" name="fullName" required>
            </div>

            <div class="form-group">
                <label for="cnic">شناختی کارڈ نمبر *</label>
                <input type="text" id="cnic" name="cnic" pattern="[0-9]{5}-[0-9]{7}-[0-9]{1}" placeholder="35201-1234567-1" required>
            </div>

            <div class="form-group">
                <label for="phone">موبائل نمبر *</label>
                <input type="tel" id="phone" name="phone" pattern="[0-9]{4}-[0-9]{7}" placeholder="0333-1234567" required>
            </div>

            <div class="form-group">
                <label for="businessType">کاروبار کی نوعیت *</label>
                <select id="businessType" name="businessType" required>
                    <option value="">منتخب کریں</option>
                    <option value="retail">ریٹیل</option>
                    <option value="wholesale">ہول سیل</option>
                    <option value="manufacturing">مینوفیکچرنگ</option>
                    <option value="services">سروسز</option>
                    <option value="other">دیگر</option>
                </select>
            </div>

            <div class="form-group">
                <label for="loanAmount">درکار قرض کی رقم *</label>
                <select id="loanAmount" name="loanAmount" required>
                    <option value="">منتخب کریں</option>
                    <option value="350001-500000">3,50,001 - 5,00,000</option>
                    <option value="500001-750000">5,00,001 - 7,50,000</option>
                    <option value="750001-1000000">7,50,001 - 10,00,000</option>
                </select>
            </div>

            <div class="form-group">
                <label for="businessAddress">کاروبار کا پتہ *</label>
                <textarea id="businessAddress" name="businessAddress" required></textarea>
            </div>

            <div class="form-group">
                <label for="monthlyIncome">ماہانہ آمدنی *</label>
                <input type="number" id="monthlyIncome" name="monthlyIncome" min="0" required>
            </div>

            <div class="form-group checkbox-group">
                <input type="checkbox" id="terms" name="terms" required>
                <label for="terms">میں شرائط و ضوابط سے متفق ہوں *</label>
            </div>

            <div class="form-actions">
                <button type="submit" class="submit-btn">درخواست جمع کریں</button>
                <button type="button" class="cancel-btn">منسوخ کریں</button>
            </div>
        </form>
    </div>
</div>
</body>
</html>
