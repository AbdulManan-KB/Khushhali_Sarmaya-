<!DOCTYPE html>
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
</body>
<script src="script.js"></script>
</html>
