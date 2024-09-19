//calendar ------------------------------------------------

document.addEventListener('DOMContentLoaded', () => {
  const calendarContainer = document.querySelector('.calendar');
  const currentDate = new Date();
  const todayDate = currentDate.getDate();
  const daysInMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0).getDate();

  for (let i = 1; i <= daysInMonth; i++) {
    const dayDiv = document.createElement('div');
    dayDiv.className = 'day';
    dayDiv.textContent = i;

    if (i === todayDate) {
      dayDiv.classList.add('today');
      calendarContainer.prepend(dayDiv);
    } else {
      calendarContainer.appendChild(dayDiv);
    }
  }
});


// notice tab --------------------------------------------

document.querySelectorAll('.tab').forEach(tab => {
  tab.addEventListener('click', () => {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.tab-content').forEach(tc => tc.classList.remove('active'));

    tab.classList.add('active');
    document.getElementById(tab.getAttribute('data-target')).classList.add('active');
  });
});

