// ============================================================
//  SCRIPT.JS – CLEAN, OPTIMIZED, CONSOLIDATED
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

    // ------------------------------------------------------------
    // 1. NAVBAR SCROLL EFFECT (background + logo fade)
    // ------------------------------------------------------------

    const navbar = document.querySelector('.navbar');
    const heroLogo = document.querySelector('.hero-logo');

  const handleScroll = () => {
    const scrolled = window.scrollY > 40;

    if (navbar) {
        navbar.classList.toggle('scrolled', scrolled);
    }

    if (heroLogo) {
        heroLogo.classList.toggle('scrolled-logo', scrolled);
    }
};


    window.addEventListener('scroll', handleScroll);
    handleScroll(); // run once on load

    // ------------------------------------------------------------
    // 2. HAMBURGER TOGGLE (mobile navigation)
    // ------------------------------------------------------------

    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');

    if (hamburger && navLinks) {
        hamburger.addEventListener('click', () => {
            const expanded = hamburger.getAttribute('aria-expanded') === 'true';

            hamburger.classList.toggle('active');
            navLinks.classList.toggle('open');

            hamburger.setAttribute('aria-expanded', String(!expanded));
        });
    }
    navLinks.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navLinks.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
    });
});

    function isMobile() {
        return window.innerWidth < 820;
    }



  

    // ------------------------------------------------------------
    // 4. SCROLL REVEAL (IntersectionObserver)
    // ------------------------------------------------------------

    const revealItems = document.querySelectorAll('[data-reveal]');

    if (revealItems.length > 0) {
        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.15 });

        revealItems.forEach(item => revealObserver.observe(item));
    }






// ABOUT SECTION — interactions (safe to append inside existing DOMContentLoaded)
(function () {
  // 1) toggle "Czytaj więcej" (accessible)
  const histBtn = document.getElementById('history-toggle');
  const histMore = document.getElementById('history-more');

  if (histBtn && histMore) {
    histBtn.addEventListener('click', () => {
      const open = histMore.hasAttribute('hidden') === false;
      if (open) {
        histMore.setAttribute('hidden', '');
        histBtn.setAttribute('aria-expanded', 'false');
        histBtn.textContent = 'Czytaj więcej';
      } else {
        histMore.removeAttribute('hidden');
        histBtn.setAttribute('aria-expanded', 'true');
        histBtn.textContent = 'Zwiń';
        // smooth scroll to reveal area (mobile)
        histMore.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  }

})();

 // TYPEWRITER JS (stabilny i responsywny)

 (function () {
    const el = document.querySelector('.typewriter');
    if (!el) return;

    const fullText = el.textContent.trim();
    const DESKTOP_MIN = 900;

    let started = false;

    const isDesktop = () => window.innerWidth >= DESKTOP_MIN;

    const startTypewriter = () => {
        if (started) return;
        started = true;

        el.textContent = "";
        el.classList.remove('no-typewriter');

        let i = 0;
        const speed = 45;

        requestAnimationFrame(() => el.classList.add('visible'));

        const type = () => {
            if (i < fullText.length) {
                el.textContent += fullText.charAt(i);
                i++;
                setTimeout(type, speed);
            }
        };

        type();
    };

    const showStatic = () => {
        el.textContent = fullText;
        el.classList.add('no-typewriter');
    };

    // initial state
    if (isDesktop()) {
        startTypewriter();
    } else {
        showStatic();
    }

    // react to resize (only once)
    window.addEventListener('resize', () => {
        if (!started && isDesktop()) {
            startTypewriter();
        }
    });
})();


(function(){
  const isTablet = () => window.innerWidth >= 820 && window.innerWidth <= 1023;
  if (!isTablet()) return;

  const cards = document.querySelectorAll('.trust-card');
  cards.forEach(card => {
    card.addEventListener('click', (e) => {
      // toggle .open on tap
      if (card.classList.contains('open')) {
        card.classList.remove('open');
      } else {
        // close other open cards if you want single-open behavior:
        cards.forEach(c => c.classList.remove('open'));
        card.classList.add('open');
        // prevent link clicks / propagation if card contains links
        e.preventDefault();
      }
    });
  });
})();
 // PRODUCT SPECS TOGGLE
const specToggle = document.getElementById('spec-toggle');
const specs = document.getElementById('product-specs');

if (specToggle && specs) {
    specToggle.addEventListener('click', () => {
        const expanded = specToggle.getAttribute('aria-expanded') === 'true';

        specToggle.setAttribute('aria-expanded', String(!expanded));

        if (!expanded) {
            specs.removeAttribute('hidden');
            specs.style.maxHeight = specs.scrollHeight + 'px';
        } else {
            specs.setAttribute('hidden', '');
            specs.style.maxHeight = null;
        }
    });
}


});
