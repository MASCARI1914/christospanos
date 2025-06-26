// Language toggle functionality
document.addEventListener('DOMContentLoaded', function() {
    const languageToggle = document.getElementById('language-toggle');
    let currentLanguage = 'el'; // Default to Greek
    
    // Greek content
    const elContent = {
        // Common elements
        'name-header': 'Χρήστος Πάνος',
        'menu-about': 'About Me',
        'menu-cv': 'Βιογραφικό',
        'menu-contact': 'Επικοινωνία',
        'footer-text': '&copy; 2023 Χρήστος Πάνος. All rights reserved.',
        
        // Index page
        'about-title': 'About Me',
        'about-text-1': 'Καλώς ήρθατε στην προσωπική μου ιστοσελίδα. Είμαι φοιτητής στο τμήμα Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων στο ΔΙ.ΠΑ.Ε.\n\nΕνδιαφέροντα μου είναι επιστήμη της Πληροφορικής και ο αθλητισμός.',
        
 
        // CV page
        'cv-title': 'Βιογραφικό',
        'education-title': 'Εκπαίδευση',
        'uni': 'Διεθνές Πανεπηστήμιο Ελλάδος ΔΙ.ΠΑ.Ε.',
        'education-degree': 'Μηχανικών Πληροφορικής και Ηλεκτρονικών Συστημάτων',
        'education-period': '2020 - Σήμερα',
        'skills-title': 'Δεξιότητες',
        'ski1': 'Προγραμματισμός (Python, Java, C++)',
        'ski2': 'Ανάπτυξη Web (HTML, CSS, JavaScript)',
        'ski3': 'Ικανότητα στην επίλυση αλγορίθμων',
        'projects-title': 'Εργασίες & Προτζεκτ',
        'project1-title': 'IoT',
        'project1-desc': 'Έχω συμμετάσχει στην ανάπτυξη εφαρμογής IoT(μέτρηση αισθητήρων,θερμοκρασίας κλπ) για την σχολή μου. Το project είχε διάρκεια δύο μήνες και ήμουν στην ομάδα Embedded Systems για τον προγραμματισμό του μικροελεγκτή.[Απρίλιος-Ιούνιος 2025].',
        'project2-title': 'Διαχειριστής E-shop',
        'project2-desc': 'Έχω εργαστεί σε e-shop (AllAroundAdventure) και στις σελίδες στο Facebook PackShoes και AllAroundAdventure ( ίδιος κάτοχος του Facebook και της ιστοσελίδας). Η θέση μου ήταν στο πόστο των sales, η επίλυση προβλημάτων και διαχείριση ιστοσελίδας. [15/07/2024–30/01/2025]',
        'project3-title' : 'Ευρευνητικό χαρτί',
        'project3-desc' : 'Έχω δημιουργήσει ένα ευρευνητικό κείμενο με θέμα "5G/6G for robotic systems" όπου αποτελόύσε εργασία για την σχολή και είχα βαθμό Άριστα.',
        'project4-title' : 'Εφαρμογή BookingTicket για σινεμά',
        'project4-desc' : 'Η εφαρμογή αναφέρεται στην αγορά εισητηρίων σε σινεμά,σε ένα εικονικό περιβάλλον.Στόχος ήταν κυρίως το κομμάτι της λειτουργικότητας ώστε να λυθούν προβλήματα όπως η μοναδικότητα των θέσων και άλλα πολλά.Η γλώσσα που χρησιμοποίησα ήταν η JavaFX κατα βάση και ελάχιστα το SceneBuilder.',
        'download-cv': 'Κατέβασμα PDF',
        
        // Contact page
        'contact-title': 'Επικοινωνία',
        'contact-info-title': 'Στοιχεία Επικοινωνίας',
        'email-label': 'Email:',
        'phone-label': 'Τηλέφωνο:',
        'location-label': 'Τοποθεσία:',
        'location-label1': 'Θεσσαλονίκη, Ελλάδα',
        'form-title': 'Στείλτε μου μήνυμα',
        'name-label': 'Όνομα:',
        'email-form-label': 'Email:',
        'subject-label': 'Θέμα:',
        'message-label': 'Μήνυμα:',
        'submit-btn': 'Αποστολή'
    };
    
    // English content
    const enContent = {
        // Common elements
        'name-header': 'Christos Panos',
        'menu-about': 'About Me',
        'menu-cv': 'CV',
        'menu-contact': 'Contact',
        'footer-text': '&copy; 2023 Christos Panos. All rights reserved.',
        
        // Index page
        'about-title': 'About Me',
        'about-text-1': 'Welcome to my personal website. I am a student in the Department of Computer Engineering and Electronic Systems at the International Hellenic University. My interests are Computer Science and Sports.',

        
        // CV page
        'cv-title': 'Curriculum Vitae',
        'education-title': 'Education',
        'uni': 'International Hellenic University',
        'education-degree': 'Information and Electronic Systems Engineering',
        'education-period': '2020 - Present',
        'skills-title': 'Skills',
        'ski1': 'Programming (Python, Java, C++)',
        'ski2': 'Web Development (HTML, CSS, JavaScript)',
        'ski3': 'Ability to solve algorithms',
        'projects-title': 'Projects',
        'project1-title': 'IoT',
        'project1-desc': 'I have participated in the development of IoT (sensor measurement, temperature, etc.) for my school. The project was two months long and I was in the Embedded Systems team for the microcontroller programming. [April-June 2025].',
        'project2-title': 'E-shop Administrator',
        'project2-desc': 'I have worked in an e-shop (AllAroundAdventure) and on the Facebook pages PackShoes and AllAroundAdventure (same owner of Facebook and website). My position was in the sales position, problem solving and website management. [15/07/2024–30/01/2025]',
        'project3-title' : 'Research paper',
        'project3-desc' : 'I have created a research paper on the topic "5G/6G for robotic systems" which was a school assignment and I received an Excellent grade.',
        'project4-title' : 'BookingTicket application for cinemas',
        'project4-desc' : 'The application refers to purchasing cinema tickets in a virtual environment. The goal was mainly the functionality part in order to solve problems such as the uniqueness of seats and many others. The language I used was JavaFX mainly and a little SceneBuilder.',
        'download-cv': 'Download PDF',
        

        // Contact page
        'contact-title': 'Contact',
        'contact-info-title': 'Contact Information',
        'email-label': 'Email:',
        'phone-label': 'Phone:',
        'location-label': 'Location:',
        'location-label1': 'Thessaloniki,Greece',
        'form-title': 'Send me a message',
        'name-label': 'Name:',
        'email-form-label': 'Email:',
        'subject-label': 'Subject:',
        'message-label': 'Message:',
        'submit-btn': 'Send'
    };
    
    // Toggle language
    languageToggle.addEventListener('click', function() {
        currentLanguage = currentLanguage === 'el' ? 'en' : 'el';
        updateContent();
        languageToggle.textContent = currentLanguage === 'el' ? 'EN' : 'GR';
    });
    
    // Update content based on current language
    function updateContent() {
        const content = currentLanguage === 'el' ? elContent : enContent;
        
        for (const [id, text] of Object.entries(content)) {
            const element = document.getElementById(id);
            if (element) {
                if (element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') {
                    element.placeholder = text;
                } else {
                    element.textContent = text;
                }
            }
        }
    }
    
    // Initialize content
    updateContent();
    
  // Form validation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        let isValid = true;
        
        // Clear previous errors
        document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
        
        // Name validation
        const name = document.getElementById('name');
        if (name.value.length < 2) {
            document.getElementById('name-error').textContent = currentLanguage === 'el' 
                ? 'Το όνομα πρέπει να έχει τουλάχιστον 2 χαρακτήρες' 
                : 'Name must be at least 2 characters';
            isValid = false;
        }
        
        // Email validation
        const email = document.getElementById('email');
        if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
            document.getElementById('email-error').textContent = currentLanguage === 'el' 
                ? 'Παρακαλώ εισάγετε ένα έγκυρο email' 
                : 'Please enter a valid email';
            isValid = false;
        }
        
        // Subject validation
        const subject = document.getElementById('subject');
        if (subject.value.length < 5) {
            document.getElementById('subject-error').textContent = currentLanguage === 'el' 
                ? 'Το θέμα πρέπει να έχει τουλάχιστον 5 χαρακτήρες' 
                : 'Subject must be at least 5 characters';
            isValid = false;
        }
        
        // Message validation
        const message = document.getElementById('message');
        if (message.value.length < 10) {
            document.getElementById('message-error').textContent = currentLanguage === 'el' 
                ? 'Το μήνυμα πρέπει να έχει τουλάχιστον 10 χαρακτήρες' 
                : 'Message must be at least 10 characters';
            isValid = false;
        }
        
        if (!isValid) {
            e.preventDefault();
        } else {
            // Optional: Show success message in Greek/English
            alert(currentLanguage === 'el' 
                ? 'Το μήνυμά σας εστάλη με επιτυχία!' 
                : 'Your message has been sent successfully!');
                contactForm.classList.add('loading');
    setTimeout(() => {
        window.location.href = 'index.html';
    }, 1000);


        }
    });
}
