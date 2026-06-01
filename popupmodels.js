document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-bridgelife-anc-pp');
    const closeBtn = document.getElementById('close-bridgelife-anc-pp');
    const prevBtn = document.getElementById('prev-bridgelife-anc-pp');
    const nextBtn = document.getElementById('next-bridgelife-anc-pp');
    
    // Initial slides data
    const allSlides = [
        {
            img: 'https://www.bridgelife.com.np/storage/popup-modal-announcements/whatsapp-image-2026-05-22-at-34444-pm.jpeg',
            slogan: 'Bridge Life',
            title: 'Chess Competition',
            desc: 'Join us for a thrilling chess competition. Register now to secure your spot!',
            datetime: 'Friday, june 12 • 2026',
            btnText: 'Book Free Seat',
            targetDate: new Date('2026-06-12T20:00:00').getTime()
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
            datetime: 'Wednesday, june 10• 2026',
            btnText: 'Join Class',
            targetDate: new Date('2026-06-10T20:00:00').getTime()
        }
    ];

    // Filter out expired events
    const slides = allSlides.filter(slide => slide.targetDate > new Date().getTime());

    let currentSlide = 0;
    let countdownInterval;
    let autoSlideInterval;
    const AUTO_SLIDE_DELAY = 5000;
    const SHOW_DELAY = 1500; // 1.5 second interval before showing

    // Logical Points: Visit tracking and Session management
    function shouldShowPopup() {
        // 1. Strict Homepage Check: Only show on the exact homepage entry points
        const path = window.location.pathname.toLowerCase();
        
        // Define what constitutes the "Homepage"
        const homepagePaths = [
            '/', 
            '/index', 
            '/index.html', 
            '/popupmodels.html'
        ];

        // Check if current path matches or ends with any homepage paths
        const isHomepage = homepagePaths.some(hp => 
            path === hp || 
            path.endsWith(hp) || 
            (hp === '/' && path === '')
        );
        
        // 2. Secondary Safety: Specifically block known non-homepage files
        const internalPages = ['taketform.html', 'about', 'contact', 'services', 'test.html', 'pp.html'];
        const isInternalPage = internalPages.some(ip => path.includes(ip));

        // If it's an internal page or NOT a homepage, suppress the modal
        if (isInternalPage || !isHomepage) {
            if (modal) {
                modal.style.display = 'none';
                modal.classList.remove('active');
            }
            return false;
        }

        // 3. Final Check: Only show if there are active (non-expired) slides
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

    function openInquiryForm() {
        
        stopAutoSlide();
    
        if (modal) modal.classList.remove('active');
        
       
        const c1 = document.querySelector('.circle-1');
        const c2 = document.querySelector('.circle-2');
        if (c1) c1.style.transform = 'scale(1.5) translate(-10%, -10%)';
        if (c2) c2.style.transform = 'scale(1.2) translate(10%, 10%)';


        if (ticketModal) {
            ticketModal.classList.add('bl-support-active');
            document.body.style.overflow = 'hidden';
        }
    }

    function closeInquiryForm() {
        const c1 = document.querySelector('.circle-1');
        const c2 = document.querySelector('.circle-2');
        if (c1) c1.style.transform = 'scale(1) translate(0, 0)';
        if (c2) c2.style.transform = 'scale(1) translate(0, 0)';

        if (ticketModal) {
            ticketModal.classList.remove('bl-support-active');
            document.body.style.overflow = 'auto';
        }
    }

  
    const triggerElements = [
        'img-bridgelife-anc-pp',
        'open-ticket-btn-bridgelife',
        'blOpenSupportTrigger'
    ];

    triggerElements.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                openInquiryForm();
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
});
