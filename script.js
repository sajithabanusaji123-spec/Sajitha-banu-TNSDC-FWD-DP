// Simple SPA switching between panels and a basic contact form handler

document.addEventListener('DOMContentLoaded', () => {

  const navButtons = document.querySelectorAll('.nav-btn');

  const panels = document.querySelectorAll('.panel');

  function showSection(id) {

    panels.forEach(p => p.classList.toggle('active', p.id === id));

    navButtons.forEach(btn => btn.classList.toggle('active', btn.dataset.section === id));

    // update URL hash (optional)

    history.replaceState(null, '', '#' + id);

  }

  // click handlers

  navButtons.forEach(btn => {

    btn.addEventListener('click', () => showSection(btn.dataset.section));

  });

  // if URL has hash, use it

  const hash = window.location.hash.replace('#','');

  if (hash) {

    // if there's a matching section

    if (document.getElementById(hash)) showSection(hash);

  } else {

    showSection('about'); // default

  }

  // Simple contact form submission (no backend) — validates and shows a message

  const form = document.getElementById('contactForm');

  const result = document.getElementById('formResult');

  form.addEventListener('submit', (e) => {

    e.preventDefault();

    const name = form.name.value.trim();

    const email = form.email.value.trim();

    const message = form.message.value.trim();

    if (!name || !email || !message) {

      result.textContent = 'Please fill in all fields.';

      result.style.color = 'crimson';

      return;

    }

    // very simple email pattern

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(email)) {

      result.textContent = 'Please enter a valid email address.';

      result.style.color = 'crimson';

      return;

    }

    // "simulate" send

    result.textContent = 'Sending...';

    result.style.color = '#333';

    // Simulate async send (no backend)

    setTimeout(() => {

      result.textContent = `Thanks ${name}! Your message has been received (demo).`;

      result.style.color = 'green';

      form.reset();

    }, 900);

  });

});