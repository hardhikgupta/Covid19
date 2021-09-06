
async function fetchMoviesJSON() {
  const response = await fetch('https://api.covid19api.com/summary');
  const movies = await response.json();
  return movies;
}

fetchMoviesJSON().then(movies => {
  movies; // fetched movies
  console.log(movies.Countries[76]);
});
