const newCases = document.getElementById('newCases');
const newDeaths = document.getElementById('newDeaths');
const newRecovered = document.getElementById('newRecovered');
const totalCases = document.getElementById('totalCases');
const totalDeaths = document.getElementById('totalDeaths');





async function fetchDataJSON() {
  const response = await fetch('https://api.covid19api.com/summary');
  const fullData = await response.json();
  return fullData;
}

setInterval(() =>
fetchDataJSON().then(fullData => {
  fullData;
  const data = fullData.Countries[76];
  newCases.innerText=data.NewConfirmed;
  newDeaths.innerText=data.NewDeaths;
  newRecovered.innerText=data.NewRecovered;
  totalCases.innerText=data.TotalConfirmed;
  totalDeaths.innerText=data.TotalDeaths;
  
}), 2000);
