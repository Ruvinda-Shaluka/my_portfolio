    document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contact-form');
    const contactName = document.getElementById('contact-name');
    const contactEmail = document.getElementById('contact-email');
    const contactMessage = document.getElementById('contact-message');
    const contactFile = document.getElementById('contact-file');
    const contactFileName = document.getElementById('contact-file-name');
    const contactFileBtn = document.querySelector('.contact-file-btn');
    const contactSuccessMessage = document.getElementById('contact-success-message');
    const contactErrorMessage = document.getElementById('contact-error-message');
    const attachmentInstruction = document.getElementById('attachment-instruction');

    // Focus effect for form fields
    const formFields = [contactName, contactEmail, contactMessage];

    formFields.forEach(field => {
    field.addEventListener('focus', function() {
    this.style.borderColor = '#00cc77';
    this.style.boxShadow = '0 0 0 3px rgba(0, 255, 153, 0.3)';
    this.style.transform = 'translateY(-2px)';
});

    field.addEventListener('blur', function() {
    this.style.borderColor = '#00ff99';
    this.style.boxShadow = 'none';
    this.style.transform = 'translateY(0)';
});
});

    // File input handling
    contactFileBtn.addEventListener('click', function() {
    contactFile.click();
});

    contactFile.addEventListener('change', function() {
    if (this.files.length > 0) {
    const file = this.files[0];
    contactFileName.textContent = `Selected: ${file.name} (${(file.size / 1024).toFixed(2)} KB)`;
    contactFileBtn.style.borderColor = '#00cc77';
    contactFileBtn.style.backgroundColor = 'rgba(0, 255, 153, 0.1)';

    // Show attachment instruction
    attachmentInstruction.style.display = 'block';
} else {
    contactFileName.textContent = 'No file selected';
    contactFileBtn.style.borderColor = '#00ff99';
    contactFileBtn.style.backgroundColor = 'transparent';

    // Hide attachment instruction
    attachmentInstruction.style.display = 'none';
}
});

    // Auto-resize textarea as user types
    contactMessage.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = Math.min(this.scrollHeight, 200) + 'px';
});

    // Form submission
    contactForm.addEventListener('submit', function(e) {
    e.preventDefault();

    // Hide any previous messages
    contactSuccessMessage.style.display = 'none';
    contactErrorMessage.style.display = 'none';

    // Get form data
    const name = contactName.value;
    const email = contactEmail.value;
    const message = contactMessage.value;
    const subject = `${name}'s response`;

    // Validate form
    if (!name || !email || !message) {
    contactErrorMessage.textContent = '✗ Please fill in all required fields';
    contactErrorMessage.style.display = 'block';
    return;
}

    // Create mailto link
    const mailtoLink = `mailto:shalu24vs@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\n${contactFile.files.length > 0 ? `File Selected: ${contactFile.files[0].name} (Please attach manually in your email client)` : 'No file selected'}`
    )}`;

    // Try to open email client
    try {
    window.location.href = mailtoLink;
    contactSuccessMessage.style.display = 'block';

    // Optional: Clear form after successful submission
    setTimeout(() => {
    contactForm.reset();
    contactFileName.textContent = 'No file selected';
    contactFileBtn.style.borderColor = '#00ff99';
    contactFileBtn.style.backgroundColor = 'transparent';
    contactMessage.style.height = '120px';
    attachmentInstruction.style.display = 'none';
}, 3000);

} catch (error) {
    console.error('Error opening email client:', error);
    contactErrorMessage.textContent = '✗ Could not open email client. Please try again.';
    contactErrorMessage.style.display = 'block';
}
});
});