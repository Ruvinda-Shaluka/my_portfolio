    // Certificate data - 5 certificates as requested
    const educationCertificates = [
    {
        title: "Java Programming (Basics)",
        issuer: "HackerRank",
        description: "Comprehensive Java programming course covering fundamentals to advanced topics including OOP, data structures, multithreading, and JavaFX. Completed with hands-on projects and exercises.",
        cardText: "Java",
        previewUrl: "https://www.hackerrank.com/certificates/iframe/a9c9767ef028",
        fullUrl: "https://www.hackerrank.com/certificates/a9c9767ef028"
    },
    {
        title: "Python for Data Science",
        issuer: "Coursera",
        description: "Specialization covering Python programming, data analysis, visualization, and machine learning. Completed multiple projects using real-world datasets.",
        cardText: "Python",
        previewUrl: "",
        fullUrl: "https://www.coursera.org/account/accomplishments/specialization/example"
    },
    {
        title: "Advanced CSS and Sass",
        issuer: "Frontend Masters",
        description: "In-depth course covering modern CSS techniques including Flexbox, Grid, animations, and Sass preprocessing. Built multiple responsive layouts and components.",
        cardText: "CSS",
        previewUrl: "",
        fullUrl: "https://frontendmasters.com/certificates/example"
    },
    {
        title: "JavaScript: The Advanced Concepts",
        issuer: "Zero To Mastery",
        description: "Advanced JavaScript course covering ES6+, OOP, functional programming, async/await, and modern frameworks. Built complex applications with clean architecture.",
        cardText: "JavaScript",
        previewUrl: "",
        fullUrl: "https://zerotomastery.io/certificates/example"
    },
    {
        title: "SQL for Data Analysis",
        issuer: "DataCamp",
        description: "Course focused on SQL skills for data analysis applications. Covered complex queries, joins, subqueries, and window functions with real datasets.",
        cardText: "SQL",
        previewUrl: "",
        fullUrl: "https://www.hackerrank.com/certificates/a9c9767ef028"
    }
    ];

    // DOM elements
    const educationCertificateCard = document.getElementById('education-certificate-card');
    const educationCertificateTitle = document.getElementById('education-certificate-title');
    const educationCertificateIssuer = document.getElementById('education-certificate-issuer');
    const educationCertificateDescription = document.getElementById('education-certificate-description');
    const educationCertificateCounter = document.getElementById('education-certificate-counter');
    const educationPrevBtn = document.getElementById('education-prev-btn');
    const educationNextBtn = document.getElementById('education-next-btn');
    const certificateLink = document.getElementById('certificate-link');

    // Certificate preview elements
    const certificatePreviewOverlay = document.getElementById('certificate-preview-overlay');
    const certificatePreviewIframe = document.getElementById('certificate-preview-iframe');
    const certificatePreviewClose = document.getElementById('certificate-preview-close');
    const certificatePreviewTitle = document.getElementById('certificate-preview-title');

    // Current certificate index
    let educationCurrentIndex = 0;

    // Function to update certificate display
    function updateEducationCertificate() {
    const cert = educationCertificates[educationCurrentIndex];

    educationCertificateCard.textContent = cert.cardText;
    educationCertificateTitle.textContent = cert.title;
    educationCertificateIssuer.textContent = `Issued by: ${cert.issuer}`;
    educationCertificateDescription.textContent = cert.description;
    educationCertificateCounter.textContent = `${educationCurrentIndex + 1} of ${educationCertificates.length}`;

    // Update certificate link
    certificateLink.href = cert.fullUrl;
    certificateLink.textContent = cert.previewUrl ? "View Full Certificate" : "Visit Certificate Page";

    // Update button states
    educationPrevBtn.disabled = educationCurrentIndex === 0;
    educationNextBtn.disabled = educationCurrentIndex === educationCertificates.length - 1;
}

    // Event listeners for navigation buttons
    educationPrevBtn.addEventListener('click', () => {
    if (educationCurrentIndex > 0) {
    educationCurrentIndex--;
    updateEducationCertificate();
}
});

    educationNextBtn.addEventListener('click', () => {
    if (educationCurrentIndex < educationCertificates.length - 1) {
    educationCurrentIndex++;
    updateEducationCertificate();
}
});

    // Show certificate preview on card hover
    educationCertificateCard.addEventListener('mouseenter', () => {
    const currentCert = educationCertificates[educationCurrentIndex];
    if (currentCert.previewUrl) {
    certificatePreviewTitle.textContent = `${currentCert.title} - Preview`;
    certificatePreviewIframe.src = currentCert.previewUrl;
    certificatePreviewOverlay.classList.add('active');
}
});

    // Close certificate preview
    certificatePreviewClose.addEventListener('click', () => {
    certificatePreviewOverlay.classList.remove('active');
    certificatePreviewIframe.src = "";
});

    // Close preview when clicking outside the container
    certificatePreviewOverlay.addEventListener('click', (e) => {
    if (e.target === certificatePreviewOverlay) {
    certificatePreviewOverlay.classList.remove('active');
    certificatePreviewIframe.src = "";
}
});

    // Initialize the display
    updateEducationCertificate();
