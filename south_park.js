/*
*
CONSTANTS & GLOBAL VARS
*
*/
const charactersDiv = document.querySelector('.characters') 
const addCharacterForm = document.querySelector("#form");

const episodeApi = 'https://spapi.dev/api/episodes';
const characterApi = 'http://localhost:3000/characters'

/*
*
FUNCTION DEFINITIONS
*
*/

//on new character form submit add a new character to page
const addNewCharacter = async (e) => {
    e.preventDefault(); //prevent default
    let newCharObj = {
        name: e.target.name.value,
        image: e.target.imageurl.value
    }
    let res = await fetch(characterApi, {
        method: 'POST', 
        body: JSON.stringify(newCharObj),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    let data = await res.json();
    //pass individual to renderCharacter to show on page
    renderCharacter(data);
    e.target.reset();
}

//gets all episodes from api and displays on page
const getAllEpisodes = async function() {
    let res = await fetch(episodeApi);
    let info = await res.json();
    let episodes = info.data;
    episodes.forEach((el) => {
        let pic = el.thumbnail_url;
        let title = el.name; 
        let season = el.season;
        
        //creating nodes
        let container = document.createElement('div');
        let titleNode = document.createElement('h3');
        let epiNode = document.createElement('img') //node for episode thumbnail image
        let seasonNode = document.createElement('h3');

        container.classList.add('episode-container')
        //populating nodes
        titleNode.innerText = title;
        epiNode.src = pic;
        seasonNode.innerText = season; 

        //appending things
       container.append(titleNode);
       container.append(seasonNode);
       container.append(epiNode);
       document.body.append(container); //container will now show up in browser
    });
}

//fetches all characters from localhost
const getAllCharacters = async function(){
    let res = await fetch(characterApi);
    let data = await res.json();
    //pass each character to render character and display on page
    data.forEach((character, num) => {
        renderCharacter(character);
    })
}

//displays an individual character on page
const renderCharacter = function(character) {
    let containerNode = document.createElement('div');
    let imageNode = document.createElement('img');
    let numberNode = document.createElement('h2');

    numberNode.innerText = `${character.name}`;
    imageNode.src = character.image
    imageNode.id = character.id;
    imageNode.style.width = "128px";

    containerNode.append(numberNode, imageNode);
    charactersDiv.appendChild(containerNode);
}

/*
*
CODE TO RUN ON PAGE LOAD
*
*/
addCharacterForm.addEventListener('submit', function(e) {
    addNewCharacter(e)
});
getAllEpisodes();
getAllCharacters();
