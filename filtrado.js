window.addEventListener('load', () => {
  // data-categoria según la clase
  document.querySelectorAll('.elemento').forEach(el => {
    const categoria = [...el.classList].find(cls => !['elemento', 'text-white'].includes(cls) && !cls.startsWith('ms-'));
    if (categoria) {
      el.setAttribute('data-categoria', categoria);
    }
  });

  //filtrado
  document.querySelectorAll('.filtro_btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const filtro = btn.getAttribute('data-filter');

      document.querySelectorAll('.elemento').forEach(el => {
        const categoria = el.getAttribute('data-categoria');
        el.style.display = filtro === 'todos' || filtro === categoria ? 'block' : 'none';
      });
      document.querySelectorAll('.filtro_btn').forEach(b => b.classList.remove('activo'));
      btn.classList.add('activo');
    });
  });
});

