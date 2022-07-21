//images assigned to variables where variable name is character name
let lemmiwinks = "https://static.wikia.nocookie.net/southpark/images/b/b8/Lemmiwinks_%282%29.png/revision/latest/scale-to-width-down/700?cb=20161218172346";
let mickey = "https://static.wikia.nocookie.net/southpark/images/d/d4/Mickey_Mouse.png/revision/latest?cb=20160912202212";
let pc = "https://static.wikia.nocookie.net/southpark/images/4/44/PCprincipal1.png/revision/latest?cb=20211125042014";
let ike = "https://static.wikia.nocookie.net/southpark/images/a/af/Ike-current.png/revision/latest/scale-to-width-down/656?cb=20180521124521";
let kyle = "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest?cb=20190411033301"
let cartman = "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png"
let kenny = "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502";
let stan = "https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png";
let towlie = "https://static.wikia.nocookie.net/southpark/images/0/07/Towelie-0.png/revision/latest/scale-to-width-down/700?cb=20211125042745";
let tolkein = "https://static.wikia.nocookie.net/southpark/images/d/d3/Token_Black2.png/revision/latest?cb=20211125042745";
let butters = "https://static.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png/revision/latest?cb=20190411032405";
let heidi = "https://static.wikia.nocookie.net/southpark/images/b/b8/HeidiTurnerHat.png/revision/latest/scale-to-width-down/699?cb=20211125042015";
let mkay = "https://static.wikia.nocookie.net/southpark/images/5/58/Mr_Mackey_New.png/revision/latest/scale-to-width-down/451?cb=20211125042917"
let chef = "https://static.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest/scale-to-width-down/700?cb=20160402120214";


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
//event: string (defines event), callback function (code to run when event is triggered)
//2. event listener on form submit 
form.addEventListener('submit', function(e) {
    //prevent default
    e.preventDefault();
    //get the text user submitted 
    let newValue = e.target.imageText.value;
    //make image node 
    let newNode = document.createElement('img');
    //set src to user submitted text 
    newNode.src = newValue 
    //append image node to charactersDiv
    charactersDiv.appendChild(newNode);
});

//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~FETCH STATEMENT~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~`
//initialize episodes variable with empty array...demonstrates fetch data is not accessible outside of fetch
let episodes = [];
//fetch statement returns a promise that takes its sweet time to evaluate while the rest of code in file runs
//this is asynchronous code
fetch('https://spapi.dev/api/episodes')
.then(res => res.json()) //translate response into readable json
.then(data => {
    episodes = data.data;
    //ONCE YOU'RE IN THE PROMISED LAND YOU CANNOT LEAVE
    episodes.forEach((el) => {
        
        let pic = el.thumbnail_url
        let title = el.name; 

        //creating nodes
        let container = document.createElement('div');
        let titleNode = document.createElement('h3');
        let epiNode = document.createElement('img') //node for episode thumbnail image

        container.classList.add('episode-container')
        //populating nodes
        titleNode.innerText = title;
        epiNode.src = pic;

        //appending things
       container.append(titleNode);
       container.append(epiNode);
       document.body.append(container); //container will now show up in browser
    });
})
.catch(err => console.log(err)); //if anything fails print error

//runs before promise gets fulfilled, episodes remains empty
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
const child = {
    kyle, //shorthand for kyle: kyle...I already declared kyle at top of file
    cartman,
    kenny,
    stan,
    butters,
    heidi,
    tolkein,
    ike
};

const adults = {
    mkay, //shorthand for mkay: mkay...I already declared mkay at top of file 
    pc,
    chef
}
const nonHumans = {
    towlie,
    mickey,
    lemmiwinks 
}


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~USING OBJECTS TO POPULATE CHARACTERS~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//1. get keys as an array with Object.keys(nonHumans)
//2. loop through keys array with forEach
//3. access each value in object using current key with nonHumans[character]
    
Object.keys(nonHumans).forEach((character, index) => {

    //container div for numberNode and imageNode (so I can format better)
    let containerNode = document.createElement('div');

    //character name node (stored in character)
    let numberNode = document.createElement('h2');
    numberNode.innerText = character;

    //image node with current key's (the character variable) value
    let imageNode = document.createElement('img');
    imageNode.src = nonHumans[character] //populate image src, we need to evaluate character to current key

    //update id with character's name (stored in character)
    imageNode.id = character;
    //example of changing width in javascript
    imageNode.style.width = "128px";

    //do all the appending
    containerNode.append(numberNode);
    containerNode.append(imageNode)
    charactersDiv.appendChild(containerNode);
})