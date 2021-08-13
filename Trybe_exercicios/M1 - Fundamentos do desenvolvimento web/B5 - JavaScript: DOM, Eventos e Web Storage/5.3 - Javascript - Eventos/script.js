function createDaysOfTheWeek() {
    const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
    const weekDaysList = document.querySelector('.week-days');
  
    for (let index = 0; index < weekDays.length; index += 1) {
      const days = weekDays[index];
      const dayListItem = document.createElement('li');
      dayListItem.innerHTML = days;
  
      weekDaysList.appendChild(dayListItem);
    };
  };
  
  createDaysOfTheWeek();
  // Exercício 1
  window.onload = criaCalendario;

  function criaCalendario() {
    criaDiaNoCalendario();
    createButtonHoliday();
    let buttonHolidayClick = document.getElementById('btn-holiday');
    buttonHolidayClick.addEventListener('click', toggleHoliday);
    createButtonFriday();
    let buttonFridayClick = document.getElementById('btn-friday');
    buttonFridayClick.addEventListener('click', toggleFriday);
  }

  function criaDiaNoCalendario() {
    const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
    let getDaysList = document.getElementById('days');

    for (index = 0; index < dezDaysList.length; index += 1) {
      let day = dezDaysList[index];
      let dayItem = document.createElement('li');
      dayItem.style.transition = '0.5s';
      if (day === 14 || day === 31) {
        dayItem.className = 'day holiday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 4 || day === 11 || day === 18) {
        dayItem.className = 'day friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else if (day === 25) {
        dayItem.className = 'day holiday friday';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      } else {
        dayItem.className = 'day';
        dayItem.innerHTML = day;
        getDaysList.appendChild(dayItem);
      }
    }
  }

  // Exercicio 2

  function createButtonHoliday() {
    let buttonHoliday = document.createElement('button');
    let divContainer = document.getElementsByClassName('buttons-container')[0];
    buttonHoliday.id = 'btn-holiday';
    buttonHoliday.innerText = 'Feriados'
    divContainer.appendChild(buttonHoliday);
  }

  // Exercício 3

  let holidayActive = true;

  function toggleHoliday() {
    let holidays = document.getElementsByClassName('holiday');
    let backgroundColor = 'rgb(238,238,238)'
    let newColor = 'rgb(50, 168, 82)'
    for (index = 0; index < holidays.length; index += 1) {
      if (holidayActive) {
        holidays[index].style.backgroundColor = newColor;
      } else {
        holidays[index].style.backgroundColor = backgroundColor;
      } 
    }
    holidayActive = !holidayActive;
  } 
  
  // Exercicio 4

  function createButtonFriday() {
    let buttonFriday = document.createElement('button');
    let divContainer = document.querySelector('.buttons-container');
    buttonFriday.id = 'btn-friday';
    buttonFriday.innerText = 'Sexta-feira';
    divContainer.appendChild(buttonFriday);
  }
  
  // Exercicio 5

  let itsFriday = true;

  function toggleFriday() {
    let fridays = document.getElementsByClassName('friday');
    let stringSextou = 'SEXTOOU!';
    let daysFriday = [4, 11, 18, 25];
    
    for (index = 0; index < fridays.length; index += 1) {
      if (itsFriday) {
        fridays[index].innerHTML = stringSextou;
        fridays[index].style.color = 'red';
      } else {
        fridays[index].innerHTML = daysFriday[index];
        fridays[index].style.color = '#777';
      }
    }
    itsFriday = !itsFriday;
  }