// Auto-fill submission date
document.addEventListener("DOMContentLoaded", function () {
    document.getElementById('submissionDate').value = new Date().toISOString().slice(0, 19).replace("T", " ");
});

// Function to open the modal
function openModal() {
    document.getElementById('applicationModal').style.display = 'block';
}

// Function to close the modal
function closeModal() {
    document.getElementById('applicationModal').style.display = 'none';
}

// Form Submission without Page Refresh
document.getElementById("loanApplicationForm").addEventListener("submit", function(event){
    event.preventDefault(); // Prevent page refresh

    var form = this;

    fetch(form.action, {
        method: "POST",
        body: new FormData(form)
    }).then(response => response.text())
    .then(data => {
        alert("آپ کی درخواست کامیابی سے جمع کر دی گئی ہے!"); // Success message
        form.reset(); // Clear the form fields
        closeModal(); // Close modal after successful submission
    }).catch(error => console.error("Error:", error));
});
