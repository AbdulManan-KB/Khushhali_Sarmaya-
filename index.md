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
    <!-- Header -->
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

        <!-- Modal Form -->
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
                        <input type="text" id="cnic" name="cnic" placeholder="35201-1234567-1" required>
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
                        <select id="loanAmount" name="loanAmount" required>
                            <option value="">رقم منتخب کریں</option>
                            <option value="350001-500000">3,50,001 - 5,00,000</option>
                            <option value="500001-750000">5,00,001 - 7,50,000</option>
                            <option value="750001-1000000">7,50,001 - 10,00,000</option>
                        </select>
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
</body>
</html>
