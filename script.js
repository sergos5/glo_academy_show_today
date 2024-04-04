const goodContent = document.getElementById('good');
const todeyContent = document.getElementById('todey');
const timeContent = document.getElementById('time');
const newYearContent = document.getElementById('new-year');


let date = new Date();

let getTimeOfDay = (hours) => {
    if (hours >= 6 && hours < 10) return 'Доброе утро';
    if (hours >= 10 && hours < 16) return 'Добрый день';
    if (hours >= 16 && hours < 22) return 'Добрый вечер';
    if (hours >= 22 || hours < 6) return 'Доброй ночи';
}

const weekday = [
    'воскресенье',
    'понедельник',
    'вторник',
    'среда',
    'четверг',
    'пятница',
    'суббота'
];

let getDaysBeforeNewYear = () => {
    const arrDey = ['дней', 'день', 'дня'];
    let daysBeforeNewYear = Math.floor((Date.parse('1 january 2025') - Date.now()) / 1000 / 60 / 60 / 24);
    let showDey = (n) => {
        if (n > 10 && n < 20) return arrDey[0];
        if (n % 10 > 1 && n % 10 < 5) return arrDey[2];
        if (n % 10 == 1) return arrDey[1];
        return arrDey[0];
    };
    return daysBeforeNewYear + " " + showDey(daysBeforeNewYear);
}

getDaysBeforeNewYear();

goodContent.textContent = getTimeOfDay(date.getHours());
todeyContent.textContent = `Сегодня: ${weekday[date.getDay()]}.`;
timeContent.textContent = `Текущее время: ${date.toTimeString().substring(0,8)}`;
newYearContent.textContent = `До Нового Года осталось: ${getDaysBeforeNewYear()}`;