// Language toggle
const langBtn = document.getElementById('lang-toggle');
langBtn.dataset.state = 'en';
langBtn.addEventListener('click', () => {
  const current = langBtn.dataset.state;
  const next = current === 'en' ? 'es' : 'en';
  document.querySelectorAll('[data-en]').forEach(el => {
    el.textContent = el.getAttribute(`data-${next}`);
  });
  langBtn.dataset.state = next;
  langBtn.textContent = next.toUpperCase();
});

// Theme toggle
const themeBtn = document.getElementById('theme-toggle');
themeBtn.addEventListener('click', () => {
  const isDark = document.body.classList.toggle('dark');
  themeBtn.textContent = isDark ? 'Light' : 'Dark';
});

// Open modal
document.querySelectorAll('.card').forEach(card => {
  card.addEventListener('click', () => {
    document.getElementById(card.dataset.target).classList.add('active');
  });
});

// Close modal
document.querySelectorAll('.modal__close').forEach(btn => {
  btn.addEventListener('click', () => {
    btn.closest('.modal').classList.remove('active');
  });
});

// Close modal when clicking backdrop
document.querySelectorAll('.modal').forEach(modal => {
  modal.addEventListener('click', e => {
    if (e.target === modal) modal.classList.remove('active');
  });
});

// ===== DRAGGABLE MODALS FIXED LOGIC =====
function makeDraggable(dialog) {
  let isDragging = false;
  let offset = { x: 0, y: 0 };

  dialog.addEventListener('mousedown', (e) => {
    isDragging = true;
    offset = {
      x: dialog.offsetLeft - e.clientX,
      y: dialog.offsetTop - e.clientY
    };
    dialog.style.cursor = 'grabbing';
    dialog.style.position = 'absolute';
  });

  document.addEventListener('mousemove', (e) => {
    if (!isDragging) return;
    e.preventDefault();
    dialog.style.left = (e.clientX + offset.x) + 'px';
    dialog.style.top = (e.clientY + offset.y) + 'px';
  });

  document.addEventListener('mouseup', () => {
    if (isDragging) {
      isDragging = false;
      dialog.style.cursor = 'grab';
    }
  });
}

document.querySelectorAll('.modal__dialog').forEach(makeDraggable);
