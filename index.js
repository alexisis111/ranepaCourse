// Получаем модальное окно
var modal = document.getElementById("myModal");
var modalContent = document.querySelector(".modal_content p"); // Параграф внутри модального окна
var modalImage = document.getElementById("modalImage"); // Получаем элемент изображения в модальном окне

// Получаем кнопки "УЗНАТЬ БОЛЬШЕ"
var btns = document.querySelectorAll(".btn_cards");

// Получаем элемент <span>, который закрывает модальное окно
var span = document.getElementById("closeModal");

// Добавляем обработчик события для каждой кнопки
btns.forEach(function (btn) {
    btn.onclick = function () {
        var card = btn.parentElement; // Получаем родительский элемент (карточку)
        var content = card.getAttribute("data-content"); // Извлекаем контент
        var imgSrc = card.querySelector("img").src; // Извлекаем URL изображения

        modalContent.textContent = content; // Обновляем текст в модальном окне
        modalImage.src = imgSrc; // Устанавливаем изображение в модальном окне
        modal.style.display = "block"; // Открываем модальное окно
    }
});

// Когда пользователь нажимает на <span> (иконка закрытия), закрываем модальное окно
span.onclick = function () {
    modal.style.display = "none"; // Закрываем модальное окно
}

// Когда пользователь нажимает в любое место вне модального окна, закрываем его
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none"; // Закрываем модальное окно
    }
}


var menuButton = document.getElementById("menuButton");
var sideMenu = document.getElementById("sideMenu");
var closeSideMenu = document.getElementById("closeSideMenu");

// Открытие бокового меню
menuButton.onclick = function () {
    sideMenu.style.width = "250px"; // Задаем ширину бокового меню
}

// Закрытие бокового меню
closeSideMenu.onclick = function () {
    sideMenu.style.width = "0"; // Устанавливаем ширину 0 для скрытия
}

// Закрытие бокового меню при клике вне его области
window.onclick = function (event) {
    if (event.target == sideMenu) {
        sideMenu.style.width = "0"; // Скрываем боковое меню
    }
}



