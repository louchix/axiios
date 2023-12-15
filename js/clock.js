let currentYear = new Date().getFullYear();
let currentMonth = new Date().getMonth();
let selectedDate = formatDate(new Date()); // Définir la date sélectionnée sur la date actuelle

// Formate la date au format 'YYYY-MM-DD'
function formatDate(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function updateClock() {
    const now = new Date();
    const timeStringShort = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit' });
    const timeStringLong = now.toLocaleTimeString('fr-FR', { hour: '2-digit', minute: '2-digit', second: '2-digit' });

    document.getElementById('clock').innerText = timeStringShort;
    document.getElementById('live-clock').innerText = timeStringLong;
}

function selectDay(event) {
    const previouslySelected = document.querySelector('.calendar-day.selected');
    if (previouslySelected) {
        previouslySelected.classList.remove('selected');
    }

    event.target.classList.add('selected');
    selectedDate = event.target.getAttribute('data-date');
}

function updateCalendar(year, month) {
    const now = new Date();
    const currentDay = now.getDate();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    const monthYear = new Date(year, month).toLocaleString('fr-FR', { month: 'long', year: 'numeric' });
    document.getElementById('month-year').textContent = monthYear;
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const calendarGrid = document.querySelector('.calendar-grid');
    calendarGrid.innerHTML = '';

    for (let day = 1; day <= daysInMonth; day++) {
        const dayElement = document.createElement('div');
        dayElement.classList.add('calendar-day');
        const date = formatDate(new Date(year, month, day));
        dayElement.setAttribute('data-date', date);
        dayElement.textContent = day;

        if (day === currentDay && year === currentYear && month === currentMonth) {
            dayElement.classList.add('today');
        }

        if (date === selectedDate) {
            dayElement.classList.add('selected');
        }

        dayElement.addEventListener('click', selectDay);
        calendarGrid.appendChild(dayElement);
    }
}

function changeMonth(offset) {
    currentMonth += offset;
    if (currentMonth < 0) {
        currentMonth = 11;
        currentYear--;
    } else if (currentMonth > 11) {
        currentMonth = 0;
        currentYear++;
    }
    updateCalendar(currentYear, currentMonth);
}

function updateDateDisplay() {
    const now = new Date();
    const dateString = now.toLocaleDateString('fr-FR', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    });
    document.getElementById('date').innerText = dateString;
}

function togglePopup() {
    const popup = document.getElementById('popup-clock-calendar');
    const isVisible = popup.style.display === 'block';
    popup.style.display = isVisible ? 'none' : 'block';

    if (!isVisible) {
        updateCalendar(currentYear, currentMonth);
        updateDateDisplay();
    }
}

document.getElementById('prev-month').addEventListener('click', () => changeMonth(-1));
document.getElementById('next-month').addEventListener('click', () => changeMonth(1));
document.getElementById('clock').addEventListener('click', togglePopup);

updateClock();
setInterval(updateClock, 1000);
updateDateDisplay();
