document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-bridgelife-anc-pp');
    const closeBtn = document.getElementById('close-bridgelife-anc-pp');
    const prevBtn = document.getElementById('prev-bridgelife-anc-pp');
    const nextBtn = document.getElementById('next-bridgelife-anc-pp');
    
    // Initial slides data
    const allSlides = [
         {
            img: 'https://www.bridgelife.com.np/storage/popup-modal-announcements/whatsapp-image-2026-06-02-at-84149-am.jpeg',
            slogan: 'IELTS-PTE',
            title: 'IELTS Paper based Test',
            desc: 'Join us for a thrilling IELTS paper based test. Register now to secure your spot!',
            datetime: 'Saturday, june 27 • 2026',
            btnText: 'Book Now',
            targetDate: new Date('2026-06-27T20:00:00').getTime()
        },
        {
            img: 'https://www.bridgelife.com.np/storage/popup-modal-announcements/whatsapp-image-2026-05-22-at-34444-pm.jpeg',
            slogan: 'Bridge Life',
            title: 'Chess Competition',
            desc: 'Join us for a thrilling chess competition. Register now to secure your spot!',
            datetime: 'Friday, june 19 • 2026',
            btnText: 'Book Free Seat',
            targetDate: new Date('2026-06-19T20:00:00').getTime()
        },
        {
            img: 'https://www.bridgelife.com.np/storage/popup-modal-announcements/whatsapp-image-2026-05-22-at-34410-pm.jpeg',
            slogan: 'Language Mastery',
            title: 'New Batch Launch',
            desc: 'Accelerate your IELTS, PTE, and Japanese language scores. Enrollment is now open for our high-success rate language programs.',
            datetime: 'Sunday, may 31 • 2026',
            btnText: 'Join Class',
            targetDate: new Date('2026-05-31T20:00:00').getTime()
        },
        {
            img: 'https://www.bridgelife.com.np/storage/popup-modal-announcements/whatsapp-image-2026-05-22-at-34539-pm.jpeg',
            slogan: 'Language Mastery',
            title: 'New Batch Launch',
            desc: 'Accelerate your IELTS, PTE, and Japanese language scores. Enrollment is now open for our high-success rate language programs.',
            datetime: 'Wednesday, june 21• 2026',
            btnText: 'Join Class',
            targetDate: new Date('2026-06-10T20:00:00').getTime()
        }
    ];

    const slides = allSlides.filter(slide => slide.targetDate > new Date().getTime());

    let currentSlide = 0;
    let countdownInterval;
    let autoSlideInterval;
    const AUTO_SLIDE_DELAY = 5000;
    const SHOW_DELAY = 1500; 

   
    function shouldShowPopup() {

        const path = window.location.pathname.toLowerCase();
      
        const homepagePaths = [
            '/', 
            '/index', 
            '/index.html', 
            '/popupmodels.html'
        ];

        const isHomepage = homepagePaths.some(hp => 
            path === hp || 
            path.endsWith(hp) || 
            (hp === '/' && path === '')
        );
        
        const internalPages = ['taketform.html', 'about', 'contact', 'services', 'test.html', 'pp.html'];
        const isInternalPage = internalPages.some(ip => path.includes(ip));

        if (isInternalPage || !isHomepage) {
            if (modal) {
                modal.style.display = 'none';
                modal.classList.remove('active');
            }
            return false;
        }

        if (slides.length === 0) return false;

        return true;
    }

    if (modal && shouldShowPopup()) {
        setTimeout(() => {
            modal.classList.add('active');
            updateSlide(0);
            startAutoSlide();
        }, SHOW_DELAY);
    }

    function updateSlide(index) {
        const slide = slides[index];
        const contentElements = [
            'slogan-bridgelife-anc-pp',
            'title-bridgelife-anc-pp',
            'desc-bridgelife-anc-pp',
            'datetime-bridgelife-anc-pp',
            'countdown-bridgelife-anc-pp',
            'open-ticket-btn-bridgelife'
        ];

        contentElements.forEach(id => {
            const el = document.getElementById(id);
            if (el) {
                el.style.opacity = '0';
                el.style.transform = 'translateX(20px)';
                el.style.transition = 'none';
            }
        });

        setTimeout(() => {
            const img = document.getElementById('img-bridgelife-anc-pp');
            const slogan = document.getElementById('slogan-bridgelife-anc-pp');
            const title = document.getElementById('title-bridgelife-anc-pp');
            const desc = document.getElementById('desc-bridgelife-anc-pp');
            const datetime = document.getElementById('datetime-bridgelife-anc-pp');
            const btn = document.getElementById('open-ticket-btn-bridgelife');

            if (img) {
                img.style.opacity = '0';
                setTimeout(() => {
                    img.src = slide.img;
                    img.onload = () => {
                        img.style.opacity = '1';
                    };
                }, 200);
            }
            if (slogan) slogan.textContent = slide.slogan;
            if (title) title.textContent = slide.title;
            if (desc) desc.textContent = slide.desc;
            if (datetime) datetime.textContent = slide.datetime;
            if (btn) btn.textContent = slide.btnText;

            contentElements.forEach((id, i) => {
                const el = document.getElementById(id);
                if (el) {
                    setTimeout(() => {
                        el.style.transition = 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)';
                        el.style.opacity = '1';
                        el.style.transform = 'translateX(0)';
                    }, i * 100);
                }
            });

            startCountdown(slide.targetDate);
        }, 50);
    }

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            currentSlide = (currentSlide + 1) % slides.length;
            updateSlide(currentSlide);
        }, AUTO_SLIDE_DELAY);
    }

    function stopAutoSlide() {
        if (autoSlideInterval) clearInterval(autoSlideInterval);
    }

    function startCountdown(targetDate) {
        if (countdownInterval) clearInterval(countdownInterval);
        const container = document.getElementById('countdown-bridgelife-anc-pp');
        if (!container) return;
        
        function update() {
            const now = new Date().getTime();
            const diff = targetDate - now;

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            if (diff < 0) {
                container.innerHTML = `<div class="countdown-item"><span class="countdown-value">00</span><span class="countdown-label">Days</span></div>`;
                return;
            }

            container.innerHTML = `
                <div class="countdown-item"><span class="countdown-value">${d < 10 ? '0'+d : d}</span><span class="countdown-label">Days</span></div>
                <div class="countdown-item"><span class="countdown-value">${h < 10 ? '0'+h : h}</span><span class="countdown-label">Hours</span></div>
                <div class="countdown-item"><span class="countdown-value">${m < 10 ? '0'+m : m}</span><span class="countdown-label">Mins</span></div>
                <div class="countdown-item"><span class="countdown-value">${s < 10 ? '0'+s : s}</span><span class="countdown-label">Secs</span></div>
            `;
        }
        update();
        countdownInterval = setInterval(update, 1000);
    }

    if (closeBtn) {
        closeBtn.onclick = () => {
            modal.classList.remove('active');
            stopAutoSlide();
        };
    }

    if (nextBtn) {
        nextBtn.onclick = () => { 
            currentSlide = (currentSlide + 1) % slides.length; 
            updateSlide(currentSlide);
            startAutoSlide();
        };
    }

    if (prevBtn) {
        prevBtn.onclick = () => { 
            currentSlide = (currentSlide - 1 + slides.length) % slides.length; 
            updateSlide(currentSlide);
            startAutoSlide();
        };
    }
    
    const modalBox = document.querySelector('.modal-box-bridgelife-anc-pp');
    if (modalBox) {
        modalBox.onmouseenter = stopAutoSlide;
        modalBox.onmouseleave = startAutoSlide;
    }

    if (modal) {
        modal.onclick = (e) => { 
            if (e.target === modal) {
                modal.classList.remove('active');
                stopAutoSlide();
            }
        };
    }

    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && modal) {
            modal.classList.remove('active');
            stopAutoSlide();
        }
    });

 
    const ticketModal = document.getElementById('blPremiumSupportModal');
    const ticketCloseBtn = document.getElementById('blCloseSupportModal');
    const footerYear = document.getElementById('blSupportFooterYear');
    const baseIframeUrl = "https://mymail.bridgelife.com.np/forms/ticket?styled=1&with_logo=1";

    function openInquiryForm(subject = null) {
        stopAutoSlide();
        if (modal) modal.classList.remove('active');
        
        // Pre-fill logic: Update iframe URL with subject if provided
        const iframe = document.querySelector('.bl-support-iframe');
        if (iframe) {
            if (subject) {
                iframe.src = `${baseIframeUrl}&subject=${encodeURIComponent('Inquiry: ' + subject)}`;
            } else {
                iframe.src = baseIframeUrl;
            }
        }
        
        if (ticketModal) {
            ticketModal.classList.add('bl-support-active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeInquiryForm() {
        if (ticketModal) {
            ticketModal.classList.remove('bl-support-active');
            document.body.style.overflow = 'auto';
        }
    }

    // Universal Modal Triggers (using class for multiple elements)
    document.querySelectorAll('.blOpenSupportTrigger').forEach(el => {
        el.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            // Try to get subject from data-subject attribute, then from inner text
            const subject = el.getAttribute('data-subject') || el.innerText.trim() || null;
            openInquiryForm(subject);
        });
        el.style.cursor = 'pointer';
    });

    const internalTriggers = [
        'img-bridgelife-anc-pp',
        'open-ticket-btn-bridgelife'
    ];

    internalTriggers.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                if (slides[currentSlide]) {
                    openInquiryForm(slides[currentSlide].title);
                } else {
                    openInquiryForm();
                }
            });
            el.style.cursor = 'pointer';
        }
    });

    if (ticketCloseBtn) {
        ticketCloseBtn.onclick = closeInquiryForm;
    }



    if (footerYear) {
        footerYear.textContent = new Date().getFullYear();
    }

    document.addEventListener('keydown', (e) => { 
        if (e.key === 'Escape' && ticketModal && ticketModal.classList.contains('bl-support-active')) {
            closeInquiryForm();
        }
    });

    /* ============================================================
       ANIMATED ANNOUNCEMENT BANNER LOGIC
       ============================================================ */
    const announcementTrack = document.getElementById('announcement_bridge_track_id');
    const announcementLinks = document.querySelectorAll('.announcement_bridge_link');

    if (announcementTrack) {
        // Accessibility: Pause animation on focus
        announcementLinks.forEach(link => {
            link.addEventListener('focus', () => {
                announcementTrack.style.animationPlayState = 'paused';
            });
            link.addEventListener('blur', () => {
                announcementTrack.style.animationPlayState = 'running';
            });
        });

        // Pause on hover is handled by CSS, but we can add JS backup if needed
        // announcementTrack.parentElement.onmouseenter = () => announcementTrack.style.animationPlayState = 'paused';
        // announcementTrack.parentElement.onmouseleave = () => announcementTrack.style.animationPlayState = 'running';
    }
});
