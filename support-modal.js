document.addEventListener('DOMContentLoaded', () => {
    const ticketModal = document.getElementById('blPremiumSupportModal');
    const ticketCloseBtn = document.getElementById('blCloseSupportModal');
    const footerYear = document.getElementById('blSupportFooterYear');

    /**
     * Opens the Premium Support Inquiry Form
     */
    function openInquiryForm() {
        // Handle background decorations if they exist
        const c1 = document.querySelector('.circle-1');
        const c2 = document.querySelector('.circle-2');
        if (c1) c1.style.transform = 'scale(1.5) translate(-10%, -10%)';
        if (c2) c2.style.transform = 'scale(1.2) translate(10%, 10%)';

        if (ticketModal) {
            ticketModal.classList.add('bl-support-active');
            document.body.style.overflow = 'hidden';
        }
    }

    /**
     * Closes the Premium Support Inquiry Form
     */
    function closeInquiryForm() {
        // Reset background decorations if they exist
        const c1 = document.querySelector('.circle-1');
        const c2 = document.querySelector('.circle-2');
        if (c1) c1.style.transform = 'scale(1) translate(0, 0)';
        if (c2) c2.style.transform = 'scale(1) translate(0, 0)';

        if (ticketModal) {
            ticketModal.classList.remove('bl-support-active');
            document.body.style.overflow = 'auto';
        }
    }

    // Set up triggers for opening the modal
    // This handles any element with the ID or class 'blOpenSupportTrigger'
    const triggers = document.querySelectorAll('#blOpenSupportTrigger, .blOpenSupportTrigger');
    triggers.forEach(trigger => {
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            openInquiryForm();
        });
        trigger.style.cursor = 'pointer'; 
    });

    // Close button event
    if (ticketCloseBtn) {
        ticketCloseBtn.onclick = closeInquiryForm;
    }

    // Close on clicking outside the modal box
    if (ticketModal) {
        ticketModal.onclick = (e) => {
            if (e.target === ticketModal) {
                closeInquiryForm();
            }
        };
    }

    // Close on Escape key
    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && ticketModal && ticketModal.classList.contains('bl-support-active')) {
            closeInquiryForm();
        }
    });

    // Update footer year dynamically
    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }
});
