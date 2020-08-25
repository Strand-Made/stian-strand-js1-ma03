// question 2
const urlApi =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

async function getGames() {
  const response = await fetch(urlApi);

  const result = await response.json();
  const games = result.all;

  for (let i = 0; i < urlApi.length; i++) {
    if (i === 9) {
      break;
    }
    console.log([i]);
  }
}

getGames();
