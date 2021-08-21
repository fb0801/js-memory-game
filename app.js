document.addEventListener('DOMContentLoaded', () =>{

    //card options
const cardArray=[
    {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'fries',
        img: 'images/fries.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'cheeseburger',
        img: 'images/cheeseburger.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'hotdog',
        img: 'images/hotdog.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'ice-cream',
        img: 'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'milkshake',
        img: 'images/milkshake.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    },
    {
        name:'pizza',
        img: 'images/pizza.png'
    }


]

const grid =document.querySelector('.grid')
var cardsChosen =[] //array of cards chosen
let cardsChosenID =[]//pushed card array
let cardsWon=[] //chosen cards to be stored here

//create the board
function createBoard(){
    //function to create the board, hide the element and show
    for (let i=0;i<cardArray.length;i++){
        var card =document.createElement('img')
        card.setAttribute('src', 'images/blank.png')
        card.setAttribute('data-id', i)
        //card.addEventListener('click', flipCard)
        grid.appendChild(card)
    }
}

//check for match
function checkForMatch(){
    let cards = document.querySelectorAll('img')
    const optionOneId =cardsChosenID[0]
    const optionTwoId =cardsChosenID[1]
    if(cardsChosen[0] ===cardsChosen[1]){
        alert('you found a match!')
        cards[optionOneId].setAttribute('src', 'images/white.png')//white img if it is a match
        cards[optionTwoId].setAttribute('src', 'images/white.png')
        cardsWon.push(cardsChosen)

    }else
}


//flip card
function flipcard(){
    var cardID = this.getAttribute('data-id')
    cardsChosen.push(cardArray[cardID].name)//push the card from array based on its ID and get its name
    cardsChosenID.push(cardID)//give the CardID
    this.setAttribute('src',cardArray[cardID].img)//add a img based on the square and the ID it holds

//only allow macthing cards to be stored
if(cardsChosen.length===2){
    setTimeout(checkForMatch, 500)//check for a match after 5ms
}
}



createBoard()







})