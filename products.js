(() => {
  const buttons = document.querySelectorAll('[data-filter]');
  const cards = document.querySelectorAll('.product-detail[data-status]');
  buttons.forEach(button => {
    button.addEventListener('click', () => {
      buttons.forEach(item => item.classList.toggle('active', item === button));
      const filter = button.dataset.filter;
      cards.forEach(card => {
        card.hidden = filter !== 'all' && card.dataset.status !== filter;
      });
    });
  });
})();