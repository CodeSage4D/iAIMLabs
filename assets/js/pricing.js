document.addEventListener('DOMContentLoaded', function () {
    // Tab navigation
    const tabs = document.querySelectorAll('.nav-link');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = tab.getAttribute('data-target');
            const targetPane = document.querySelector(targetId);

            tabs.forEach(t => t.classList.remove('active'));
            tabPanes.forEach(pane => pane.classList.remove('active'));

            tab.classList.add('active');
            targetPane.classList.add('active');
        });
    });

    // Inquiry Modal
    const inquireBtns = document.querySelectorAll('.inquire-btn');
    const modal = document.getElementById('inquiryModal');
    const closeBtn = modal.querySelector('.close-btn');
    const modalPlan = document.getElementById('modalPlan');

    inquireBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            modalPlan.textContent = btn.getAttribute('data-plan');
            modal.style.display = 'block';
        });
    });

    closeBtn.addEventListener('click', function () {
        modal.style.display = 'none';
    });

    window.addEventListener('click', function (event) {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });

    // Form submission handling
    document.getElementById('inquiryForm').addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Thank you for your inquiry! We will get back to you soon.');
        modal.style.display = 'none';
        this.reset();
    });
});

