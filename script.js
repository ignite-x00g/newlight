// Language Toggle
document.getElementById('lang-toggle').addEventListener('click', function() {
  var btn = this;
  var toES = btn.textContent === 'EN';
  btn.textContent = toES ? 'ES' : 'EN';
  document.querySelectorAll('[data-en]').forEach(function(el) {
    if (el.getAttribute('data-en') && el.getAttribute('data-es')) {
      el.textContent = toES ? el.getAttribute('data-es') : el.getAttribute('data-en');
    }
  });
});

// Theme Toggle
document.getElementById('theme-toggle').addEventListener('click', function() {
  var body = document.body;
  body.classList.toggle('dark');
  this.textContent = body.classList.contains('dark') ? 'Light' : 'Dark';
});

// Card Popups
document.querySelectorAll('.card').forEach(function(card) {
  card.addEventListener('click', function() {
    var modal = document.getElementById(card.getAttribute('data-target'));
    if(modal) modal.classList.add('active');
  });
});
document.querySelectorAll('.modal__close').forEach(function(btn) {
  btn.addEventListener('click', function() {
    btn.closest('.modal').classList.remove('active');
  });
});

// Draggable Modal
document.querySelectorAll('.modal__dialog').forEach(function(dialog) {
  let offsetX, offsetY, isDragging = false;
  dialog.addEventListener('mousedown', function(e) {
    if (e.target.classList.contains('modal__close')) return;
    isDragging = true;
    offsetX = e.clientX - dialog.getBoundingClientRect().left;
    offsetY = e.clientY - dialog.getBoundingClientRect().top;
    dialog.style.transition = 'none';
  });
  window.addEventListener('mousemove', function(e) {
    if (isDragging) {
      dialog.style.left = (e.clientX - offsetX) + 'px';
      dialog.style.top = (e.clientY - offsetY) + 'px';
      dialog.style.transform = 'none';
    }
  });
  window.addEventListener('mouseup', function() {
    isDragging = false;
    dialog.style.transition = '';
  });
});

// Optional: ESC closes any open modal
window.addEventListener('keydown', function(e) {
  if(e.key === 'Escape') {
    document.querySelectorAll('.modal.active').forEach(function(modal){
      modal.classList.remove('active');
    });
  }
});
