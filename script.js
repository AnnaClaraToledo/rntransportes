function toggleMenu() {
  const menu = document.getElementById('menu');
  menu.classList.toggle('hidden');
}

// Fecha o menu quando clicar em algum link (opcional, mas recomendado no mobile)
document.querySelectorAll('.nav-links a').forEach(link => {
  link.addEventListener('click', () => {
    const menu = document.getElementById('menu');
    if (!menu.classList.contains('hidden')) {
      menu.classList.add('hidden');
    }
  });
});
