//question 2

const url = "https://api.rawg.io/api/games?dates=2019-01-01,2019-12-31&ordering=-rating";
const rawgContainer = document.querySelector(".gamesContainer");

async function getRawg() {
    // fetch api

    const response = await fetch(url);

    const apiFeed = await response.json();
    
    const games = apiFeed.results;

    rawgContainer.innerHTML= "";

    for(let i = 0; i < games.length; i++) {
        console.log(games[i]);

        if ( i === 8) {
            break;
        }

        rawgContainer.innerHTML += `<div class="result">${games[i].name} ${games[i].rating} ${games.length}</div>`;
    }
    



    

}

getRawg();



