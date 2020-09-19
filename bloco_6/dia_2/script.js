const citiesList = {
  'AC': 'Acre',
  'AL': 'Alagoas',
  'AP': 'Amapá',
  'AM': 'Amazonas',
  'BA': 'Bahia',
  'CE': 'Ceará',
  'DF': 'Distrito Federal',
  'ES': 'Espírito Santo',
  'GO': 'Goiás',
  'MA': 'Maranhão',
  'MT': 'Mato Grosso',
  'MS': 'Mato Grosso do Sul',
  'MG': 'Minas Gerais',
  'PA': 'Pará',
  'PB': 'Paraíba',
  'PR': 'Paraná',
  'PE': 'Pernambuco',
  'PI': 'Piauí',
  'RJ': 'Rio de Janeiro',
  'RN': 'Rio Grande do Norte',
  'RS': 'Rio Grande do Sul',
  'RO': 'Rondônia',
  'RR': 'Roraima',
  'SC': 'Santa Catarina',
  'SP': 'São Paulo',
  'SE': 'Sergipe',
  'TO': 'Tocantins'
};

const selectCity = document.getElementById('estado');
for (let city in citiesList) {
const cityOption = document.createElement('option');
cityOption.value = city
cityOption.innerText = city;
selectCity.appendChild(cityOption);
}

function checkingRadioInput() {
const radioInput = document.getElementsByClassName('radio');
for (let i = 0; i < radioInput.length; i += 1) {
  radioInput[i].classList.toggle('not-radio');
}
}

function interruptForm(event) {
event.preventDefault();
const div = document.createElement('div');
div.className = 'form-result'
const inputList = document.getElementsByClassName('not-radio');
for (let i = 0; i < inputList.length; i += 1) {
  div.innerHTML += `${inputList[i].name}: ${inputList[i].value}<br>`;
}
document.body.appendChild(div);
}


document.getElementById('submit-button').addEventListener('click', interruptForm);
document.getElementById('clean-fields').addEventListener('click', function() {
const inputList = document.getElementsByClassName('not-radio');
const divArea = document.getElementsByClassName('form-result')[0];
for (let i = 0; i < inputList.length; i += 1) {
  inputList[i].value = '';
}
document.body.removeChild(divArea);
})

document.getElementsByClassName('radio')[0].addEventListener('change', checkingRadioInput);
document.getElementsByClassName('radio')[1].addEventListener('change', checkingRadioInput);
