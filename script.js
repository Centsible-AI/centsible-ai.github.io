// ── CUSTOM CURSOR ─────────────────────────────────────────────────────────
const dot  = document.getElementById('cursorDot');
const ring = document.getElementById('cursorRing');

let mx = 0, my = 0, rx = 0, ry = 0;

document.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });

(function animateCursor() {
    rx += (mx - rx) * 0.18;
    ry += (my - ry) * 0.18;
    dot.style.left  = mx + 'px';
    dot.style.top   = my + 'px';
    ring.style.left = rx + 'px';
    ring.style.top  = ry + 'px';
    requestAnimationFrame(animateCursor);
})();

const hoverTargets = 'a, button, .feat-card, .team-card, .for-card, .why-item, .hiw-step, .stat-item';
document.querySelectorAll(hoverTargets).forEach(el => {
    el.addEventListener('mouseenter', () => {
        ring.style.width       = '56px';
        ring.style.height      = '56px';
        ring.style.borderColor = 'rgba(127,179,255,0.75)';
    });
    el.addEventListener('mouseleave', () => {
        ring.style.width       = '32px';
        ring.style.height      = '32px';
        ring.style.borderColor = 'rgba(127,179,255,0.5)';
    });
});

// ── NAVBAR SCROLL ──────────────────────────────────────────────────────────
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
    navbar.classList.toggle('scrolled', window.scrollY > 40);
});

// ── SCROLL REVEAL ──────────────────────────────────────────────────────────
const revealObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserver.unobserve(entry.target);
        }
    });
}, { threshold: 0.1, rootMargin: '0px 0px -60px 0px' });

document.querySelectorAll('.reveal').forEach(el => revealObserver.observe(el));

// ── SMOOTH SCROLL ──────────────────────────────────────────────────────────
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', e => {
        e.preventDefault();
        const target = document.querySelector(anchor.getAttribute('href'));
        if (target) {
            window.scrollTo({ top: target.offsetTop - 72, behavior: 'smooth' });
        }
    });
});

console.log('Centsible loaded ✓');