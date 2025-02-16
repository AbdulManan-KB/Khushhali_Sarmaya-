<html lang="ur" dir="rtl">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>خوشحالی سرمایہ - کاروباری قرض</title>
    <link rel="stylesheet" href="styles.css">
    <link href="https://fonts.googleapis.com/css2?family=Noto+Nastaliq+Urdu:wght@400;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css">
    <!-- Open Graph Meta Tags -->
    <meta property="og:title" content="خوشحالی سرمایہ - کاروباری قرض">
    <meta property="og:description" content="کاروباری قرضوں کے لیے آن لائن درخواست دیں">
    <meta property="og:image" content="logo.png">
    <meta name="theme-color" content="#4CAF50">
</head>
<body>
    <!-- Header -->
    <header class="header">
        <nav class="navbar">
            <div class="logo">
                <img src="logo.png" alt="خوشحالی بینک" class="logo-img"> <h2>خوشحالی سرمایہ، کاروباری قرض</h2>
            </div>
            <div class="nav-links">
                <a href="#home">ہوم</a>
                <a href="#features">خصوصیات</a>
                <a href="#loan-details">قرض کی تفصیلات</a>
                <a href="#collateral">ضمانت</a>
                <a href="#contact" 
            </div>
        </nav>
    </header>

    <main>
        <section id="hero" class="hero-section">
            <div class="hero-content">
                <h1>خوشحالی سرمایہ – اپنے خوابوں کو حقیقت میں بدلیں!</h1>
                <p class="hero-text">اگر آپ اپنے کاروبار کو بڑھانے کے زبردست آئیڈیاز رکھتے ہیں، لیکن سرمایہ کی کمی رکاوٹ بنی ہوئی ہے، تو گھبرائیں نہیں!</p>
                
            </div>
        </section>

        <section id="features" class="features-section">
            <h2>کاروباری قرض کی خصوصیات</h2>
            <div class="feature-cards">
                <div class="feature-card">
                    <i class="fas fa-chart-line"></i>
                    <h3>بڑا آرڈر ملا لیکن وسائل کم ہیں؟</h3>
                    <p>فوری مالی مدد حاصل کریں</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-store"></i>
                    <h3>نیا کاروبار شروع کرنا چاہتے ہیں؟</h3>
                    <p>آسان شرائط پر قرض حاصل کریں</p>
                </div>
                <div class="feature-card">
                    <i class="fas fa-rocket"></i>
                    <h3>اپنے حریف سے آگے نکلنا چاہتے ہیں؟</h3>
                    <p>کاروبار کو نئی بلندیوں تک لے جائیں</p>
                </div>
            </div>
        </section>

        <section id="loan-details" class="loan-details-section">
            <h2>قرض کی تفصیلات</h2>
            <div class="loan-info">
                <div class="info-card">
                    <i class="fas fa-money-bill-wave"></i>
                    <h3>قرض کی رقم</h3>
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
            <h2>ضمانت کی اقسام</h2>
            <div class="collateral-types">
                <div class="collateral-card">
                    <h3>بغیر ضمانت قرض</h3>
                    <p class="loan-range">3,50,001 سے 5,00,000 روپے تک</p>
                    <ul>
                        <li>صرف چیک درکار ہیں</li>
                        <li>ایک شخصی ضمانت</li>
                        <li>بغیر کسی اثاثہ جات کی ضمانت</li>
                    </ul>
                </div>
                <div class="collateral-card">
                    <h3>ضمانتی قرض</h3>
                    <p class="loan-range">5,00,001 سے 10,00,000 روپے تک</p>
                    <ul>
                        <li>کاروباری اثاثہ جات</li>
                        <li>چیک</li>
                        <li>رجسٹرڈ مارگیج</li>
                    </ul>
                </div>
            </div>
        </section>

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
                        <input type="text" id="cnic" name="cnic" placeholder="35201-1234567-1" required>
                    </div>

                    <div class="form-group">
                        <label for="phone">موبائل نمبر *</label>
                        <input type="text" id="phone" name="phone" placeholder="0300-0000000" required>
                    </div>

                    <div class="form-group">
                        <label for="businessType">کاروبار کی قسم *</label>
                        <select id="businessType" name="businessType" required>
                            <option value="">کاروبار منتخب کریں</option>
                            <option value="retail">ریٹیل</option>
                            <option value="wholesale">ہول سیل</option>
                            <option value="service">سروس</option>
                            <option value="manufacturing">مینوفیکچرنگ</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="loanAmount">قرض کی رقم *</label>
                        <select id="loanAmount" name="loanAmount" required>
                            <option value="">رقم منتخب کریں</option>
                            <option value="350001-500000">3,50,001 - 5,00,000</option>
                            <option value="500001-750000">5,00,001 - 7,50,000</option>
                            <option value="750001-1000000">7,50,001 - 10,00,000</option>
                        </select>
                    </div>

                    <div class="form-group">
                        <label for="businessAddress">کاروباری پتہ *</label>
                        <textarea id="businessAddress" name="businessAddress" required></textarea>
                    </div>

                    <div class="form-group">
                        <label for="monthlyIncome">ماہانہ آمدنی *</label>
                        <input type="number" id="monthlyIncome" name="monthlyIncome" min="0" required>
                        <small class="helper-text">روپے میں درج کریں</small>
                    </div>

                    <div class="button-group">
                        <button type="button" class="cta-button">منسوخ کریں</button>
                        <button type="submit" class="cta-button">درخواست جمع کریں</button>
                    </div>

                    <!-- Hidden Fields -->
                    <input type="hidden" name="submissionDate" value="2025-02-16 10:46:01">
                    <input type="hidden" name="submittedBy" value="AbdulManan-KB">
                </form>
            </div>
        </div>

        <section id="contact" class="contact-section">
            <div class="contact-info">
                <!-- Update just the contact section in your HTML -->
<section id="contact" class="contact-section">
    <div class="contact-info">
        <div class="contact-details">
        <div class="profile-image">
                <img src="https://github.com/AbdulManan-KB.jpg" alt="AbdulManan-KB" class="profile-pic">
            </div>
            <div class="profile-details">
                <h3 class="profile-name">عبدالمنان</h3>
                <p class="profile-title">لون آفیسر</p>
            </div>
        </div>
        </section>
            <a href="tel:+923460408190" class="cta-button">
                <i class="fas fa-phone"></i>
                0346-0408190 
                <span class="call-text">ابھی کال ملائیں</span>
            </a> <p><i class="fas fa-phone"></i> 0546-566577</p>

             </section>       
                    
                    <p><i class="fas fa-globe"></i> نزد ہیلاں چونگی خوشحالی 
                    مائیکروفنانس بینک پھالیہ</p>
                    <p><i class="fas fa-clock"></i> پیر تا ہفتہ (صبح 9 بجے سے شام 5 بجے تک)</p>
                </div>
            
            </div>

    <footer class="footer">
        <p>© 2025 خوشحالی مائیکروفنانس بینک - تمام حقوق محفوظ ہیں</p>
    </footer>

    <script src="script.js"></script>
