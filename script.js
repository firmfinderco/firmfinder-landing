// Subtle interactive glow based on cursor
const card = document.querySelector('.glass-card');
const glow = document.querySelector('.glow');
if (card && glow){
  card.addEventListener('pointermove', (e) => {
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    glow.style.background = `radial-gradient(300px 300px at ${x}% ${y}%, rgba(10,94,255,0.85), rgba(10,94,255,0.0) 60%)`;
  });
}
