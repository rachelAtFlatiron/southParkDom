/*get characters div which will hold all our character images 
1. get element by id => return one html element
2. get elements by class => returns an array
3. query selector => returns first matching element
class -> .characters
id ->  #characters
tag -> div
*/
const charactersDiv = document.querySelector('.characters') 

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ADD NEW CHARACTER ON FORM SUBMIT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//1. get form node and save as a constant
const form = document.querySelector("#form");

form.addEventListener('submit', function(e) {
    e.preventDefault(); //prevent default
    let newValue = e.target.imageText.value; //get user text
    let newNode = document.createElement('img'); //make image node 
    newNode.src = newValue  //set src 
    charactersDiv.appendChild(newNode);//append image
    /*
    
    
    TODO: post south park character
    
    
    */
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH STATEMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//initialize episodes variable with empty array...demonstrates fetch data is not accessible outside of fetch
let episodes = [];
//fetch statement returns a promise that takes its sweet time to evaluate while the rest of code in file runs
//this is asynchronous code
fetch('https://spapi.dev/api/episodes')
.then(res => { 
    return res.json(); //translate response into readable json
}) 
.then(info => {  //waits for response to be translated...once translated do whatever you want
    console.log(info); //used this so I knew to use info.data
    episodes = info.data; //the data part is specific to API's structure

    //YOUR INFO/DATA CAN'T LEAVE THE PROMISED LAND
    //episodes data only exists in here so you iterate in here
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
})
.catch(err => console.log(err)); //if anything fails print error, only a .then thing

//runs before promise gets fulfilled, episodes remains empty
//YOU LEFT THE PROMISED LAND - this is an example
console.log('outside fetch statement episodes is', episodes);


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~PUTTING CHARACTERS IN OBJECTS VS ARRAYS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
/*
Arrays - ordered, list, access things by index
['dune', 'LoL', 'animorphs', 'brave new world', 'rick and morty']

Objects - unordered, key/value pairs, access value with the key
{
    tsering: 'dune',
    kaven: 'LoL',
    carlos: 'animorphs',
    george: 'brave new world',
    brandon: 'rick and morty',
}
key does not need to be in quotes 
values need to be stored as appropriate data type
*/



//put characters in list, you can only access by index number
const characterList = [
 
]

/*
    objects
    put characters in object and you can associate data
    in our case we our associating the actual character name with their image link

    nonHumans.mickey <- looks directly for key called 'mickey' and returns value

    using brackets as keys will evaluate what is in the bracket
    nonHumans[character] <- will evaluate character as variable
    nonHumans['some-example'] <- use brackets and strings when key contains reserved symbols
    
*/
const nonHumans = {
    towlie,
    pc,
    chef,
    cartman,
    kenny,
    stan,
    heidi,
    tolkein,
    ike 
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~USING OBJECTS TO POPULATE CHARACTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//1. get keys as an array with Object.keys(nonHumans)
//2. loop through keys array with forEach
//3. access each value in object using current key with nonHumans[character]
    
Object.keys(nonHumans).forEach((character, num) => {

    //container div for numberNode and imageNode (so I can format better)
    let containerNode = document.createElement('div');

    //character name node (stored in character)
    let numberNode = document.createElement('h2');
    numberNode.innerText = `${num + 1}. ${character}`;

    //image node with current key's (the character variable) value
    let imageNode = document.createElement('img');
    imageNode.src = nonHumans[character] //populate image src, we need to evaluate character to current key
    //nonHumans['kyle'], nonHumans['mickey'] -> nonHumans.mickey

    //update id with character's name (stored in character)
    imageNode.id = character;
    //example of changing width in javascript
    imageNode.style.width = "128px";

    //do all the appending
    containerNode.append(numberNode);
    containerNode.append(imageNode)
    charactersDiv.appendChild(containerNode);
})