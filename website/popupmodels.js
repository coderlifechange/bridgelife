document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal-bridgelife-anc-pp');
    const closeBtn = document.getElementById('close-bridgelife-anc-pp');
    const prevBtn = document.getElementById('prev-bridgelife-anc-pp');
    const nextBtn = document.getElementById('next-bridgelife-anc-pp');
    
    const slides = [
        {
            img: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&q=80&w=1200',
            slogan: 'Bridge Life Excellence',
            title: 'Your Future Starts Here',
            desc: 'Join our comprehensive seminar on studying in Japan, Korea, and UK. Get expert counseling and visa guidance directly from our specialists.',
            datetime: 'SATURDAY, JUNE 20 • 2026',
            btnText: 'Book Free Seat',
            targetDate: new Date('2026-06-20T20:00:00').getTime()
        },
        {
            img: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?auto=format&fit=crop&q=80&w=1200',
            slogan: 'Language Mastery',
            title: 'New Batch Launch',
            desc: 'Accelerate your IELTS, PTE, and Japanese language scores. Enrollment is now open for our high-success rate language programs.',
            datetime: 'MONDAY, AUGUST 15 • 2026',
            btnText: 'Join Class',
            targetDate: new Date('2026-08-15T09:00:00').getTime()
        }
    ];

    let currentSlide = 0;
    let countdownInterval;
    let autoSlideInterval;
    const AUTO_SLIDE_DELAY = 5000;

    setTimeout(() => {
        modal.classList.add('active');
        updateSlide(0);
        startAutoSlide();
    }, 1000);

    function updateSlide(index) {
        const slide = slides[index];
        const contentElements = [
            'slogan-bridgelife-anc-pp',
            'title-bridgelife-anc-pp',
            'desc-bridgelife-anc-pp',
            'datetime-bridgelife-anc-pp',
            'countdown-bridgelife-anc-pp',
            'btn-bridgelife-anc-pp'
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
            const btn = document.getElementById('btn-bridgelife-anc-pp');

            if (img) img.src = slide.img;
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
});
