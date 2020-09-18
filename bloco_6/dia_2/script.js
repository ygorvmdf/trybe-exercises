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

function interruptForm(event) {
  const div = document.createElement('div');
  const inputList = document.getElementsByTagName('input');
  const select = document.getElementById('estado');
  const textarea = document.getElementById('curriculo');
  console.log(inputList);
  for (let i = 0; i < inputList.length; i += 1) {
    div.innerHTML += `${inputList[i].name}: ${inputList[i].value}<br>`
  }
  div.innerHTML += `Estado: ${select.value}<br>`;
  div.innerHTML += `Resumo curriculo: ${textarea.value}`;
  document.body.appendChild(div);
  event.preventDefault();
}

document.getElementById('submit-button').addEventListener('click', interruptForm);
document.getElementById('clean-fields').addEventListener('click', function() {
  const inputList = document.getElementsByTagName('input');
  const select = document.getElementById('estado');
  const textarea = document.getElementById('curriculo');
  const divArea = document.querySelector('div');
  for (let i = 0; i < inputList.length; i += 1) {
    inputList[i].value = '';
  }
  select.value = '';
  textarea.value = '';
  divArea.innerHTML = '';
})