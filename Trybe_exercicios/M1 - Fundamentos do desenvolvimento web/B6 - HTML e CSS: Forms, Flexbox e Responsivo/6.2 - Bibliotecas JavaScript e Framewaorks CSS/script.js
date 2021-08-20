const estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']
const selectEstados = document.getElementById('estado');
function createOptions() {
  for (let index = 0; index < estadosBrasileiros.length; index += 1) {
    const itemOption = document.createElement('option');
    selectEstados.appendChild(itemOption).innerText = estadosBrasileiros[index];
    selectEstados.appendChild(itemOption).value = estadosBrasileiros[index];
  }
}
createOptions();

function checkDate() {
  const date = document.getElementById('date');
  let day = date.value.substring(0, 2);
  let month = date.value.substring(3, 5);
  let year = date.value.substring(6, 10);
 
  if (day < 0 || day > 31) {
    alert('Dia inválido!');
  }
  if (month < 0 || month > 12) {
    alert('Mês inválido!');
  }
  if (year < 0) {
    alert('Ano inválido');
  }
}
const inputSubmit = document.getElementById('submit-input');
function buttonCheckDate() {
  inputSubmit.addEventListener('click', checkDate);
}
buttonCheckDate();

function preventDefault(event) {
  event.preventDefault();
  getValues();
}
function buttonPreventDefault() {
  const activePreventDefault = document.getElementById('submit-input');
  activePreventDefault.addEventListener('click', preventDefault); 
}
buttonPreventDefault();

function getValues() {
  const backupDiv = document.getElementById('backup');
  let values = document.getElementsByClassName('values');
  for(index = 0; index < values.length; index += 1) {
    let newValue = values[index].value;
    const paragraph = document.createElement('p');
    paragraph.innerHTML = newValue;
    backupDiv.appendChild(paragraph);
  }
}
window.onload = initPage;

function initPage() {
  
  
}