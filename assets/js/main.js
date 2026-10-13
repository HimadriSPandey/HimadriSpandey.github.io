// Open the CV (and any PDF) and links to other sites in a new tab.
document.querySelectorAll('a[href]').forEach(link => {
    const external = /^https?:$/.test(link.protocol) && link.host !== location.host;
    const pdf = /\.pdf$/i.test(link.pathname);
    if (external || pdf) {
        link.target = '_blank';
        link.rel = 'noopener';
    }
});

// Mobile menu toggle. Without JavaScript the links are always shown (see .no-js in style.css).
const mobileMenuBtn = document.getElementById('mobileMenuBtn');
const navLinks = document.getElementById('navLinks');

if (mobileMenuBtn && navLinks) {
    const setOpen = (open) => {
        navLinks.classList.toggle('active', open);
        mobileMenuBtn.setAttribute('aria-expanded', String(open));
    };

    mobileMenuBtn.addEventListener('click', () => {
        setOpen(mobileMenuBtn.getAttribute('aria-expanded') !== 'true');
    });

    navLinks.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => setOpen(false));
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && mobileMenuBtn.getAttribute('aria-expanded') === 'true') {
            setOpen(false);
            mobileMenuBtn.focus();
        }
    });
}
