// question 2
const urlApi =
  "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";

const gamesContainer = document.querySelector(".gamesContainer");

async function getGames() {
  const response = await fetch(urlApi);

  const result = await response.json();

  console.log(result);

  const videoGames = result.all;

  console.log(videoGames);

  //gamesContainer.innerHTML = "";

  for (let i = 0; i < videoGames.length; i++) {
    console.log(videoGames[i].text);

    if (i === 9) {
      break;
    }

    gamesContainer.innerHTML += `<div class="result"> ${videoGames[i].text} </div>`;
  }
}

getGames();
