(() => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.primary-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', String(isOpen));
    });
    nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      nav.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }));
  }

  // Living cosmos: twinkling stars and occasional shooting stars.
  const starfield = document.querySelector('.starfield');
  if (starfield) {
    const shootingLayer = document.createElement('div');
    shootingLayer.className = 'shooting-star-layer';
    shootingLayer.setAttribute('aria-hidden', 'true');
    document.body.appendChild(shootingLayer);

    const launchShootingStar = () => {
      if (document.hidden) return;
      const star = document.createElement('span');
      star.className = 'shooting-star';
      star.style.setProperty('--star-top', `${54 + Math.random() * 34}%`);
      star.style.setProperty('--star-left', `${58 + Math.random() * 34}%`);
      star.style.setProperty('--star-duration', `${1000 + Math.random() * 650}ms`);
      shootingLayer.appendChild(star);
      star.addEventListener('animationend', () => star.remove(), { once: true });
    };
    const scheduleStar = () => window.setTimeout(() => {
      launchShootingStar();
      scheduleStar();
    }, 7000 + Math.random() * 7000);
    window.setTimeout(() => {
      launchShootingStar();
      scheduleStar();
    }, 1800);
  }

  document.querySelectorAll('[data-year]').forEach(el => {
    el.textContent = new Date().getFullYear();
  });

  const revealItems = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12 });
    revealItems.forEach(item => observer.observe(item));
  } else {
    revealItems.forEach(item => item.classList.add('visible'));
  }

  const form = document.querySelector('#contact-form');
  if (form) {
    form.addEventListener('submit', event => {
      event.preventDefault();
      const data = new FormData(form);
      const subject = `[Arch Luna] ${data.get('topic')}`;
      const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nTopic: ${data.get('topic')}\n\n${data.get('message')}`;
      // Replace this placeholder with the company's real contact email before launch.
      const contactEmail = 'gtgamingcpu@gmail.com';
      if (contactEmail === 'gtgamingcpu@gmail.com') {
        const hint = document.querySelector('#form-hint');
        hint.textContent = 'The form is ready, check your email app to review it.';
        hint.setAttribute('role', 'status');
        return;
      }
      window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    });
  }
})();
