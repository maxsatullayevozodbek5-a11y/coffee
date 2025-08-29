// Animatsiya uchun: elementlar scrollda ko‘rinishi bilan chiqadi
const animated = document.querySelectorAll('.animate');
const onScroll = () => {
  animated.forEach(el => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 60) {
      el.classList.add('visible');
    }
  });
};
window.addEventListener('scroll', onScroll);
window.addEventListener('DOMContentLoaded', onScroll);