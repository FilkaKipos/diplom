function calculateExercises() {
    const weightInput = document.getElementById('weight');
    const heightInput = document.getElementById('height');
    const goalInput = document.getElementById('goal');

    if (!weightInput.value) {
        alert('Введите свой вес!');
        return;
    }
    
    if (!heightInput.value) {
        alert('Введите свой рост!');
        return;
    }

    const weight = parseFloat(weightInput.value);
    const height = parseFloat(heightInput.value);
    const goal = goalInput.value;

    if (isNaN(weight) || isNaN(height)) {
        alert('Вес и рост должны быть числовыми значениями!');
        return;
    }

    let result = 'Рекомендуемые упражнения для вас: ';
    let exercises;

    switch (goal) {
        case "пресс":
            exercises = ["Скручивания", "Планка", "Велосипед"];
            break;
        case "руки":
            exercises = ["Отжимания", "Подтягивания", "Тяга гантелей"];
            break;
        case "грудь":
            exercises = ["Жим лежа", "Отжимания на брусьях", "Раскрытие гантелей"];
            break;
        case "ноги":
            exercises = ["Приседания", "Выпады", "Становая тяга"];
            break;
        default:
            exercises = ["Отжимания", "Приседания", "Подтягивания"];
    }

    const days = ["Пн", "Вт", "Ср (выходной)", "Чт", "Пт", "Сб (выходной)", "Вс"];
    let weeklyResult = "";

    let approaches = Math.round(weight / 10); // Исходное количество подходов
    let repetitions = Math.round((height / 100) * 2); // Исходное количество повторений

    for (let week = 1; week <= 4; week++) {
        weeklyResult += `<strong>Неделя ${week}:</strong><br>`;

        for (let i = 0; i < days.length; i++) {
            if (i === 2 || i === 5) {
                weeklyResult += `<span class="day">${days[i]}:</span> Выходной<br>`;
            } else {
                weeklyResult += `<span class="day">${days[i]}:</span> ${approaches} подхода, ${repetitions} повторения каждое упражнение - ${exercises.join(", ")}<br>`;
            }
        }

        approaches = Math.round(approaches * 1.3); // Увеличение нагрузки на 1.3 раза
        repetitions = Math.round(repetitions * 1.3); // Увеличение нагрузки на 1.3 раза
        weeklyResult += "<br>";
    }

    // Создаем URL для перехода на страницу с результатами
    let url = "result.html?weight=" + encodeURIComponent(weight) + "&height=" + encodeURIComponent(height) + "&goal=" + encodeURIComponent(goal) + "&result=" + encodeURIComponent(result) + "&weeklyResult=" + encodeURIComponent(weeklyResult);

    // Перенаправляем пользователя на страницу с результатами
    window.location.href = url;
}
