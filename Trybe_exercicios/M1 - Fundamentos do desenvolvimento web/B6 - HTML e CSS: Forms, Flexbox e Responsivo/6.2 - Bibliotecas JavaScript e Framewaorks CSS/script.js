$(document).ready(function(){
  $('select').formSelect();
});

document.getElementById('date').DatePickerX.init();

new window.JustValidate('.js-form', {
  rules: {
    cpf: {
      required: true
    },
    endereço: {
      required: true
    },
    cidade: {
      required: true
    },
    resumesummary: {
      required: true
    },
    office: {
      required: true
    },
    officedescription: {
      required: true
    },
  },  
  messages: {
    name:'Digite seu nome corretamente.',
    email:'Digite seu e-mail corretamente.',
    cpf:'Digite seu CPF corretamente',
    endereço:'Digite seu endereço corretamente',
    cidade:'Digite sua cidade corretamente',
    resumesummary:'Resuma seu currículo',
    office:'Digite seu cargo corretamente',
    officedescription:'Descreva sobre seu cargo.',
  },
});


const estadosBrasileiros = ['Acre', 'Alagoas', 'Amapá', 'Amazonas', 'Bahia', 'Ceará', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rio Grande do Sul', 'Rondônia', 'Roraima', 'Santa Catarina', 'São Paulo', 'Sergipe', 'Tocantins', 'Distrito Federal']
const selectEstados = document.getElementById('estado');
function createOptions() {
  for (let index = 0; index < estadosBrasileiros.length; index += 1) {
    const itemOption = document.createElement('option');
    // itemOption.classList.add('validate');
    selectEstados.appendChild(itemOption).innerText = estadosBrasileiros[index];
    selectEstados.appendChild(itemOption).value = estadosBrasileiros[index];
  }
}
createOptions();

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
