const buttons = document.querySelectorAll('.menu-nav-btn');
const categories = document.querySelectorAll('.menu-category');

buttons.forEach(button => {
    button.addEventListener('click', () => {
      // Убираем активный класс со всех кнопок
      buttons.forEach(btn => btn.classList.remove('active'));
      // Добавляем активный класс той, на которую кликнули
      button.classList.add('active');

      const category = button.dataset.category;

      categories.forEach(cat => {
        if (cat.dataset.category === category || category === 'all') {
          cat.classList.remove('hidden'); // Показываем
        } else {
          cat.classList.add('hidden'); // Скрываем
        }
      });
    });
  });
