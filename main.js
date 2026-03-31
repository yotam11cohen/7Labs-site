/* =====================================================
   7Labs Health — main.js
   Handles: navbar scroll, mobile nav, scroll animations,
            counter animation, FAQ accordion, Chart.js
===================================================== */

// ----- Navbar: add .scrolled class on scroll -----
const navbar = document.getElementById('navbar');
window.addEventListener('scroll', () => {
  navbar.classList.toggle('scrolled', window.scrollY > 50);
}, { passive: true });

// ----- Mobile nav toggle -----
const navToggle = document.getElementById('navToggle');
const navLinks  = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  const isOpen = navLinks.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', String(isOpen));
});

// Close mobile nav when a link is tapped
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
  });
});

// ----- Scroll fade-in via Intersection Observer -----
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!prefersReducedMotion) {
  const fadeObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        fadeObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

  document.querySelectorAll('.fade-in').forEach(el => fadeObserver.observe(el));
} else {
  document.querySelectorAll('.fade-in').forEach(el => el.classList.add('visible'));
}

// ----- Counter animation -----
function animateCounter(el) {
  const target   = parseInt(el.dataset.target, 10);
  const suffix   = el.dataset.suffix  || '';
  const prefix   = el.dataset.prefix  || '';
  const duration = 1800;
  const start    = performance.now();

  function tick(now) {
    const elapsed  = now - start;
    const progress = Math.min(elapsed / duration, 1);
    const eased    = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    const value    = Math.round(eased * target);
    el.textContent = prefix + value.toLocaleString() + suffix;
    if (progress < 1) requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

const counterObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      animateCounter(entry.target);
      counterObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.number-item__value[data-target]').forEach(el => {
  counterObserver.observe(el);
});

// ----- FAQ Accordion -----
document.querySelectorAll('.accordion__trigger').forEach(trigger => {
  trigger.addEventListener('click', () => {
    const isExpanded = trigger.getAttribute('aria-expanded') === 'true';
    const panelId    = trigger.getAttribute('aria-controls');
    const panel      = document.getElementById(panelId);

    // Collapse all items first
    document.querySelectorAll('.accordion__trigger').forEach(t => {
      t.setAttribute('aria-expanded', 'false');
      const p = document.getElementById(t.getAttribute('aria-controls'));
      if (p) p.hidden = true;
    });

    // Expand clicked item if it was collapsed
    if (!isExpanded) {
      trigger.setAttribute('aria-expanded', 'true');
      panel.hidden = false;
    }
  });
});

// ----- Chart.js: Metabolite Line Chart (Science section) -----
const metaboliteCtx = document.getElementById('metaboliteChart');
if (metaboliteCtx) {
  new Chart(metaboliteCtx, {
    type: 'line',
    data: {
      labels: ['Seg 1\nBefore', 'Seg 2', 'Seg 3', 'Seg 4\nDuring', 'Seg 5', 'Seg 6', 'Seg 7\nAfter'],
      datasets: [
        {
          label: 'Patient 1',
          data: [0.00277, 0.00182, 0.00139, 0.00073, 0.00023, 0.00088, 0.00035],
          borderColor: '#2563EB',
          backgroundColor: 'rgba(37,99,235,0.08)',
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Patient 2',
          data: [0.00118, 0.00040, 0.00042, 0.00259, 0.00186, 0.00026, 0.00045],
          borderColor: '#10B981',
          backgroundColor: 'rgba(16,185,129,0.08)',
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        },
        {
          label: 'Patient 3',
          data: [0.00102, 0.00242, 0.00059, 0.00053, 0.00074, 0.00036, 0.00053],
          borderColor: '#7C3AED',
          backgroundColor: 'rgba(124,58,237,0.08)',
          borderWidth: 2,
          pointRadius: 5,
          pointHoverRadius: 7,
          tension: 0.4,
          fill: false,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94A3B8', font: { family: 'Inter', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(10,22,40,0.95)',
          titleColor: '#F8FAFC',
          bodyColor: '#94A3B8',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y.toExponential(2)}`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } },
          grid:  { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: {
            color: '#94A3B8',
            font: { family: 'Inter', size: 11 },
            callback: val => val.toExponential(1)
          },
          grid:  { color: 'rgba(255,255,255,0.05)' },
          title: { display: true, text: 'Normalized Intensity', color: '#94A3B8', font: { family: 'Inter', size: 11 } }
        }
      }
    }
  });
}

// ----- Chart.js: Results Bar Chart -----
const resultsCtx = document.getElementById('resultsChart');
if (resultsCtx) {
  new Chart(resultsCtx, {
    type: 'bar',
    data: {
      labels: ['Before vs During', 'During vs After', 'Before vs After'],
      datasets: [
        {
          label: 'HILIC (Polar)',
          data: [37, 105, 164],
          backgroundColor: 'rgba(37,99,235,0.7)',
          borderColor: '#2563EB',
          borderWidth: 1,
          borderRadius: 4,
        },
        {
          label: 'HSST3 (Hydrophobic)',
          data: [148, 316, 352],
          backgroundColor: 'rgba(16,185,129,0.7)',
          borderColor: '#10B981',
          borderWidth: 1,
          borderRadius: 4,
        }
      ]
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      plugins: {
        legend: {
          labels: { color: '#94A3B8', font: { family: 'Inter', size: 12 } }
        },
        tooltip: {
          backgroundColor: 'rgba(10,22,40,0.95)',
          titleColor: '#F8FAFC',
          bodyColor: '#94A3B8',
          borderColor: 'rgba(255,255,255,0.1)',
          borderWidth: 1,
          callbacks: {
            label: ctx => ` ${ctx.dataset.label}: ${ctx.parsed.y} features (p<0.05)`
          }
        }
      },
      scales: {
        x: {
          ticks: { color: '#94A3B8', font: { family: 'Inter', size: 12 } },
          grid:  { color: 'rgba(255,255,255,0.05)' }
        },
        y: {
          ticks: { color: '#94A3B8', font: { family: 'Inter', size: 11 } },
          grid:  { color: 'rgba(255,255,255,0.05)' },
          title: { display: true, text: 'Significant Features (p<0.05)', color: '#94A3B8', font: { family: 'Inter', size: 11 } }
        }
      }
    }
  });
}
