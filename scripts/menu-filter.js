document.addEventListener('DOMContentLoaded', function() {
    const menuNavBtns = document.querySelectorAll('.menu-nav-btn');
    const menuCategories = document.querySelectorAll('.menu-category');

    // Функция для фильтрации меню
    function filterMenu(category) {
        menuCategories.forEach(categoryElement => {
            if (category === 'all') {
                categoryElement.style.display = 'block';
            } else {
                const categoryName = categoryElement.querySelector('h3').textContent.toLowerCase().trim();
                if (categoryName === category) {
                    categoryElement.style.display = 'block';
                } else {
                    categoryElement.style.display = 'none';
                }
            }
        });
    }

    // Обработчик клика по кнопкам навигации
    menuNavBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            // Удаляем класс active у всех кнопок
            menuNavBtns.forEach(btn => btn.classList.remove('active'));
            // Добавляем класс active к нажатой кнопке
            this.classList.add('active');
            // Получаем категорию из data-атрибута
            const category = this.getAttribute('data-category');
            // Фильтруем меню
            filterMenu(category);
        });
    });
}); 