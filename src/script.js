const newCases = document.getElementById('newCases');
const newDeaths = document.getElementById('newDeaths');
const newCases = document.getElementById('newCases');
const newCases = document.getElementById('newCases');
const newCases = document.getElementById('newCases');




async function fetchDataJSON() {
  const response = await fetch('https://api.covid19api.com/summary');
  const fullData = await response.json();
  return fullData;
}

setInterval(() =>
fetchDataJSON().then(fullData => {
  fullData;
  const data = fullData.Countries[76];
  console.log(data);
  newCases.innerText=data.NewConfirmed;
}), 2000);
