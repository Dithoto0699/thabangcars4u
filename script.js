// ===== Mobile Navigation =====
const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelector('.nav-links');

navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Close mobile nav on link click
navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

// ===== Navbar shadow on scroll =====
const navbar = document.querySelector('.navbar');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
        navbar.style.boxShadow = 'none';
    }
});

// ===== Vehicle Inventory Filter =====
const filterBtns = document.querySelectorAll('.filter-btn');
const vehicleCards = document.querySelectorAll('.vehicle-card');

filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        // Update active button
        filterBtns.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');

        const filter = btn.dataset.filter;

        vehicleCards.forEach(card => {
            if (filter === 'all' || card.dataset.type === filter) {
                card.style.display = '';
                card.style.animation = 'fadeIn 0.3s ease';
            } else {
                card.style.display = 'none';
            }
        });
    });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `@keyframes fadeIn { from { opacity: 0; transform: translateY(10px); } to { opacity: 1; transform: translateY(0); } }`;
document.head.appendChild(style);

// ===== Finance Calculator =====
const carPriceInput = document.getElementById('carPrice');
const depositInput = document.getElementById('deposit');
const termSelect = document.getElementById('term');
const monthlyPaymentEl = document.getElementById('monthlyPayment');

function calculatePayment() {
    const price = parseFloat(carPriceInput.value) || 0;
    const deposit = parseFloat(depositInput.value) || 0;
    const months = parseInt(termSelect.value) || 60;
    const annualRate = 11.5; // percent
    const monthlyRate = annualRate / 100 / 12;

    const principal = price - deposit;
    if (principal <= 0) {
        monthlyPaymentEl.textContent = 'R 0';
        return;
    }

    // Standard amortization formula
    const payment = principal * (monthlyRate * Math.pow(1 + monthlyRate, months))
                    / (Math.pow(1 + monthlyRate, months) - 1);

    monthlyPaymentEl.textContent = 'R ' + Math.round(payment).toLocaleString('en-ZA');
}

carPriceInput.addEventListener('input', calculatePayment);
depositInput.addEventListener('input', calculatePayment);
termSelect.addEventListener('change', calculatePayment);

// Run on load
calculatePayment();

// ===== Contact Form =====
const contactForm = document.getElementById('contactForm');
const formSuccess = document.getElementById('formSuccess');

contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData.entries());

    if (!data.name || !data.phone) {
        return;
    }

    // Hide form, show success
    contactForm.style.display = 'none';
    formSuccess.hidden = false;

    console.log('Enquiry submitted:', data);
});

// ===== Smooth Scroll =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
        const href = anchor.getAttribute('href');
        if (href === '#') return;
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
