document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'el';

    const elContent = {
        'name-header': 'Χρήστος Πάνος',
        'menu-about': 'About Me',
        'menu-cv': 'Βιογραφικό',
        'menu-contact': 'Επικοινωνία',
        'footer-text': '© 2026 Χρήστος Πάνος. All rights reserved.',
        'about-title': 'About Me',
        'about-text-1': 'Καλώς ήρθατε. Είμαι μηχανικός πληροφορικής με εξειδίκευση στο Full-Stack Software Development, την υπολογιστική όραση (Computer Vision) και τα ενσωματωμένα συστήματα. Στόχος μου είναι η ανάπτυξη αποδοτικού λογισμικού και ευφυών συστημάτων υψηλής απόδοσης.',
        'cv-title': 'Βιογραφικό',
        'education-title': 'Εκπαίδευση',
        'uni': 'Διεθνές Πανεπιστήμιο της Ελλάδος (ΔΙ.ΠΑ.Ε.)',
        'education-degree': 'Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων',
        'education-period': '2020 – Σήμερα',
        'skills-title': 'Τεχνικές Δεξιότητες',
        'projects-title': 'Ερευνητικά Έργα & Εμπειρία',
        'download-cv': '<i class="fas fa-file-pdf"></i> Κατέβασμα CV (PDF)',
        'contact-title': 'Επικοινωνία',
        'contact-info-title': 'Στοιχεία Επικοινωνίας',
        'email-label': 'Email:',
        'phone-label': 'Τηλέφωνο:',
        'location-label': 'Τοποθεσία:',
        'location-label1': 'Θεσσαλονίκη, Ελλάδα',
        'form-title': 'Αποστολή Μηνύματος',
        'name-label': 'Όνομα:',
        'email-form-label': 'Email:',
        'subject-label': 'Θέμα:',
        'message-label': 'Μήνυμα:',
        'submit-btn': 'Αποστολή'
    };

    const enContent = {
        'name-header': 'Christos Panos',
        'menu-about': 'About Me',
        'menu-cv': 'CV / Resume',
        'menu-contact': 'Contact',
        'footer-text': '© 2026 Christos Panos. All rights reserved.',
        'about-title': 'About Me',
        'about-text-1': 'Welcome. I am a Software & Computer Systems Engineer specializing in Full-Stack Web Development, Computer Vision, and Embedded Systems. Dedicated to engineering high-performance software and autonomous intelligent perception models.',
        'cv-title': 'Curriculum Vitae',
        'education-title': 'Education',
        'uni': 'International Hellenic University (IHU)',
        'education-degree': 'Information and Electronic Systems Engineering',
        'education-period': '2020 – Present',
        'skills-title': 'Technical Skills',
        'projects-title': 'Research Projects & Experience',
        'download-cv': '<i class="fas fa-file-pdf"></i> Download CV (PDF)',
        'contact-title': 'Contact',
        'contact-info-title': 'Contact Information',
        'email-label': 'Email:',
        'phone-label': 'Phone:',
        'location-label': 'Location:',
        'location-label1': 'Thessaloniki, Greece',
        'form-title': 'Send Message',
        'name-label': 'Name:',
        'email-form-label': 'Email:',
        'subject-label': 'Subject:',
        'message-label': 'Message:',
        'submit-btn': 'Send'
    };

    if (languageToggle) {
        languageToggle.addEventListener('click', function() {
            currentLanguage = currentLanguage === 'el' ? 'en' : 'el';
            updateContent();
            languageToggle.textContent = currentLanguage === 'el' ? 'EN' : 'GR';
        });
    }

    function updateContent() {
        const content = currentLanguage === 'el' ? elContent : enContent;
        for (const [id, text] of Object.entries(content)) {
            const el = document.getElementById(id);
            if (el) {
                if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
                    el.placeholder = text;
                } else {
                    el.innerHTML = text;
                }
            }
        }
    }

    // Form Validation
    const contactForm = document.getElementById('contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            let isValid = true;
            document.querySelectorAll('.error-message').forEach(el => el.textContent = '');

            const name = document.getElementById('name');
            if (name && name.value.trim().length < 2) {
                document.getElementById('name-error').textContent = currentLanguage === 'el' ? 'Τουλάχιστον 2 χαρακτήρες' : 'Minimum 2 characters';
                isValid = false;
            }

            const email = document.getElementById('email');
            if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value.trim())) {
                document.getElementById('email-error').textContent = currentLanguage === 'el' ? 'Μη έγκυρο email' : 'Invalid email';
                isValid = false;
            }

            const subject = document.getElementById('subject');
            if (subject && subject.value.trim().length < 4) {
                document.getElementById('subject-error').textContent = currentLanguage === 'el' ? 'Τουλάχιστον 4 χαρακτήρες' : 'Minimum 4 characters';
                isValid = false;
            }

            const msg = document.getElementById('message');
            if (msg && msg.value.trim().length < 10) {
                document.getElementById('message-error').textContent = currentLanguage === 'el' ? 'Τουλάχιστον 10 χαρακτήρες' : 'Minimum 10 characters';
                isValid = false;
            }

            if (!isValid) e.preventDefault();
        });
    }

    const downloadBtn = document.getElementById('download-cv');
    if (downloadBtn) {
        downloadBtn.addEventListener('click', function() {
            this.href = 'ChristosPanos_CV.pdf?t=' + Date.now();
        });
    }
});
