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
const charactersDiv = document.querySelector('div') //returns first matching element
console.log(charactersDiv)
/*

*/
//insert node into characters div
//charactersDiv.append(chefNode);

//I don't want to manually type these lines of code for each character's image
//Put characters in a list instead and iterate through
const characterList = [
    /*
    kyle,
    cartman,
    kenny,
    stan,
    butters,
    heidi,
    tolkein,
    amanda,
    charlotte,
    */
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

//adding a little styling to charactersDiv
charactersDiv.style.display = "flex";
charactersDiv.style.flexFlow = "wrap";

//iterate over charactersList with forEach
//index parameter is optional
//forEach is being passed a callback method that REQUIRES a parameter representing current element
characterList.forEach((character, index) => {
    console.log(character);

    //number node using index
    let numberNode = document.createElement('h1');
    numberNode.innerText = index;
    charactersDiv.append(numberNode);

    //create image node
    let newNode = document.createElement('img');
    console.log('create new node', newNode)
    //populate image src 
    newNode.src = character
    //update id with index -> DON'T. USE. NUMBERS. THIS IS ONLY FOR DEMONSTRATION
    newNode.id = index;
    //example of changing width in javascript
    newNode.style.width = "128px";
    console.log('added src', newNode)
    //append image node to characters div 
    charactersDiv.append(newNode);
    console.log('appended character')
})
    

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
