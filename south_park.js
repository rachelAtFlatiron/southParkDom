//this will populate the text
let cat = "https://static.wikia.nocookie.net/southpark/images/5/5b/Pets-kennys-cat.png/revision/latest?cb=20200906152210"
let lemmiwinks = "https://static.wikia.nocookie.net/southpark/images/b/b8/Lemmiwinks_%282%29.png/revision/latest/scale-to-width-down/700?cb=20161218172346";
let mcnuggets = "https://static.wikia.nocookie.net/southpark/images/6/6b/Non-human-boys-pets-mcnugget.png/revision/latest?cb=20170604094830"
let mickey = "https://static.wikia.nocookie.net/southpark/images/d/d4/Mickey_Mouse.png/revision/latest?cb=20160912202212";
let minister = "https://static.wikia.nocookie.net/southpark/images/e/eb/Minister-of-montreal.png/revision/latest?cb=20200801170340";
let pc = "https://static.wikia.nocookie.net/southpark/images/4/44/PCprincipal1.png/revision/latest?cb=20211125042014";
let duck = "https://static.wikia.nocookie.net/southpark/images/4/42/Jeffy.png/revision/latest?cb=20170323124911";
let ike = "https://static.wikia.nocookie.net/southpark/images/a/af/Ike-current.png/revision/latest/scale-to-width-down/656?cb=20180521124521";
let kyle = "https://static.wikia.nocookie.net/southpark/images/9/95/Kyle-broflovski.png/revision/latest?cb=20190411033301"
let cartman = "https://upload.wikimedia.org/wikipedia/en/7/77/EricCartman.png"
let kenny = "https://static.wikia.nocookie.net/southpark/images/6/6f/KennyMcCormick.png/revision/latest?cb=20160409020502";
let stan = "https://upload.wikimedia.org/wikipedia/en/a/a7/StanMarsh.png";
let towlie = "https://static.wikia.nocookie.net/southpark/images/0/07/Towelie-0.png/revision/latest/scale-to-width-down/700?cb=20211125042745";
let tolkein = "https://static.wikia.nocookie.net/southpark/images/d/d3/Token_Black2.png/revision/latest?cb=20211125042745";
let butters = "https://static.wikia.nocookie.net/southpark/images/0/06/ButtersStotch.png/revision/latest?cb=20190411032405";
let heidi = "https://static.wikia.nocookie.net/southpark/images/b/b8/HeidiTurnerHat.png/revision/latest/scale-to-width-down/699?cb=20211125042015";
let amanda = "https://static.wikia.nocookie.net/southpark/images/e/ef/HarrisonAmanda.png/revision/latest?cb=20160405212638";
let charlotte = "https://static.wikia.nocookie.net/southpark/images/0/04/Charlotte1.png/revision/latest?cb=20151101193609"
let mkay = "https://static.wikia.nocookie.net/southpark/images/5/58/Mr_Mackey_New.png/revision/latest/scale-to-width-down/451?cb=20211125042917"
let gopher = "https://static.wikia.nocookie.net/southpark/images/b/b0/Dramatic-look-gopher.png/revision/latest?cb=20170605100321"
let chef = "https://static.wikia.nocookie.net/southpark/images/3/38/JeromeChef.png/revision/latest/scale-to-width-down/700?cb=20160402120214";

//create image node
let chefNode = document.createElement('img');
//set src of image node to one of the characters' image link
chefNode.src = chef;
/*get characters div
1. get element by id => return one html element
2. get elements by class => returns an array
3. query selector => returns first matching element
class -> .characters
id ->  #characters
tag -> div
*/
const charactersDiv = document.querySelector('.characters') //returns first matching element
/*

*/
//insert node into characters div
//charactersDiv.append(chefNode);

//I don't want to manually type these lines of code for each character's image
//Put characters in a list instead and iterate through
const characterList = [
    kyle,
    cartman,
    kenny,
    stan,
    butters,
    heidi,
    tolkein,
    amanda,
    charlotte,
    ike,
    mkay,
    pc,
    minister,
    chef,
    duck,
    towlie,
    gopher,
    mickey,
    mcnuggets,
    cat,
    lemmiwinks
]

//iterate over charactersList with forEach
//index parameter is optional
//forEach is being passed a callback method that REQUIRES a parameter representing current element
characterList.forEach((character, index) => {

    //container div for numberNode and imageNode (so I can format better)
    let containerNode = document.createElement('div');

    //number node using index
    let numberNode = document.createElement('h2');
    numberNode.innerText = index;

    //create image node
    let imageNode = document.createElement('img');
    //populate image src 
    imageNode.src = character
    //update id with index -> DON'T. USE. NUMBERS. THIS IS ONLY FOR DEMONSTRATION. LETTERS. ONLY.
    imageNode.id = index;
    //example of changing width in javascript
    imageNode.style.width = "128px";

    //do all the appending
    containerNode.append(numberNode);
    containerNode.append(imageNode)
    charactersDiv.appendChild(containerNode);
})

//add new character on form submit

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

let episodes = [];
//fetch statement returns a promise
fetch('https://spapi.dev/api/episodes')
.then(res => res.json()) //translate response into readable json
.then(data => {
    episodes = data.data;
    console.log('in fetch statement', episodes);
    episodes.forEach((el, i) => {
        let pic = el.thumbnail_url
        let title = el.name; 
        let titleNode = document.createElement('h3');
        titleNode.innerText = title;
        console.log(pic);
        let epiNode = document.createElement('img')
        epiNode.src = pic;
        charactersDiv.append(epiNode);
        charactersDiv.append(titleNode);
    });
})
.catch(err => console.log(err)); //if anything fails print error

//runs before promise gets fulfilled
console.log('outside fetch statement episodes is', episodes);



    








//fetch version
//https://spapi.dev/api/episodes/1
    

/*objects*/
const child = {
    kyle,
    cartman,
    kenny,
    stan,
    butters,
    heidi,
    tolkein,
    amanda,
    charlotte,
    ike
}
const adults = {
    mkay,
    pc,
    minister,
    chef
}
const nonHumans = {
    duck,
    towlie,
    gopher,
    mickey,
    mcnuggets,
    cat,
    lemmiwinks 
}


