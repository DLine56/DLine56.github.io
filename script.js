let currentSlide = 0;
const slides = document.querySelectorAll('.slides img');

// Функция для переключения слайдов
function changeSlide(direction) {
    slides[currentSlide].style.display = 'none'; // Скрыть текущий слайд
    currentSlide = (currentSlide + direction + slides.length) % slides.length; // Изменить индекс слайда
    slides[currentSlide].style.display = 'block'; // Показать новый слайд
}

// Функция для автоматического переключения слайдов
function autoChangeSlide() {
    changeSlide(1); // Переключаем на следующий слайд
}

// Показать первый слайд
slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? 'block' : 'none';
});

// Устанавливаем интервал для автоматического переключения
let autoSlideInterval = setInterval(autoChangeSlide, 3000); // Каждые 3 секунды

// Добавляем обработчики событий для кнопок
document.querySelector('.prev').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Останавливаем автоматическое переключение при ручном переключении
    changeSlide(-1); // Переключаем на предыдущий слайд
});

document.querySelector('.next').addEventListener('click', () => {
    clearInterval(autoSlideInterval); // Останавливаем автоматическое переключение при ручном переключении
    changeSlide(1); // Переключаем на следующий слайд
});

// Функция для открытия табов
function openTab(evt, tabName) {
    const tabcontent = document.getElementsByClassName("tabcontent");
    for (let i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none"; // Скрыть все табы
    }
    const tablinks = document.getElementsByClassName("tablink");
    for (let i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
    document.getElementById(tabName).style.display = "block"; // Показать выбранный таб
    evt.currentTarget.className += " active"; // Добавить класс активной вкладки
}