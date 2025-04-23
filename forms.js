// Получаем элементы
const bookingButtons = document.querySelectorAll('.btn'); // Все кнопки "Заказать столик"
const bookingForm = document.getElementById('booking-form');
const closeFormButton = document.querySelector('.close-form');

// Функция для открытия формы
function openBookingForm() {
    bookingForm.classList.add('show');
}

// Функция для закрытия формы
function closeBookingForm() {
    bookingForm.classList.remove('show');
}

// Добавляем обработчики событий
bookingButtons.forEach(button => {
    button.addEventListener('click', openBookingForm);
});

closeFormButton.addEventListener('click', closeBookingForm);

// Закрытие формы при клике вне её области
bookingForm.addEventListener('click', (event) => {
    if (event.target === bookingForm) {
        closeBookingForm();
    }
});