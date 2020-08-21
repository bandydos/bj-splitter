$(document).ready(() => {
    $('#btn-generate').click(() => {
        getCards();
    })
})

const carddata = [{
    "name": "Ace-Clubs",
    "value": 1
},
{
    "name": "Two-Clubs",
    "value": 2
},
{
    "name": "Three-Clubs",
    "value": 3
},
{
    "name": "Four-Clubs",
    "value": 4
},
{
    "name": "Five-Clubs",
    "value": 5
},
{
    "name": "Six-Clubs",
    "value": 6
},
{
    "name": "Seven-Clubs",
    "value": 7
},
{
    "name": "Eight-Clubs",
    "value": 8
},
{
    "name": "Nine-Clubs",
    "value": 9
},
{
    "name": "Ten-Clubs",
    "value": 10
},
{
    "name": "Jack-Clubs",
    "value": 10
},
{
    "name": "Queen-Clubs",
    "value": 10
},
{
    "name": "King-Clubs",
    "value": 10
},{
    "name": "Ace-Spades",
    "value": 1
},
{
    "name": "Two-Spades",
    "value": 2
},
{
    "name": "Three-Spades",
    "value": 3
},
{
    "name": "Four-Spades",
    "value": 4
},
{
    "name": "Five-Spades",
    "value": 5
},
{
    "name": "Six-Spades",
    "value": 6
},
{
    "name": "Seven-Spades",
    "value": 7
},
{
    "name": "Eight-Spades",
    "value": 8
},
{
    "name": "Nine-Spades",
    "value": 9
},
{
    "name": "Ten-Spades",
    "value": 10
},
{
    "name": "Jack-Spades",
    "value": 10
},
{
    "name": "Queen-Spades",
    "value": 10
},
{
    "name": "King-Spades",
    "value": 10
},{
    "name": "Ace-Diamonds",
    "value": 1
},
{
    "name": "Two-Diamonds",
    "value": 2
},
{
    "name": "Three-Diamonds",
    "value": 3
},
{
    "name": "Four-Diamonds",
    "value": 4
},
{
    "name": "Five-Diamonds",
    "value": 5
},
{
    "name": "Six-Diamonds",
    "value": 6
},
{
    "name": "Seven-Diamonds",
    "value": 7
},
{
    "name": "Eight-Diamonds",
    "value": 8
},
{
    "name": "Nine-Diamonds",
    "value": 9
},
{
    "name": "Ten-Diamonds",
    "value": 10
},
{
    "name": "Jack-Diamonds",
    "value": 10
},
{
    "name": "Queen-Diamonds",
    "value": 10
},
{
    "name": "King-Diamonds",
    "value": 10
},{
    "name": "Ace-Hearts",
    "value": 1
},
{
    "name": "Two-Hearts",
    "value": 2
},
{
    "name": "Three-Hearts",
    "value": 3
},
{
    "name": "Four-Hearts",
    "value": 4
},
{
    "name": "Five-Hearts",
    "value": 5
},
{
    "name": "Six-Hearts",
    "value": 6
},
{
    "name": "Seven-Hearts",
    "value": 7
},
{
    "name": "Eight-Hearts",
    "value": 8
},
{
    "name": "Nine-Hearts",
    "value": 9
},
{
    "name": "Ten-Hearts",
    "value": 10
},
{
    "name": "Jack-Hearts",
    "value": 10
},
{
    "name": "Queen-Hearts",
    "value": 10
},
{
    "name": "King-Hearts",
    "value": 10
}];


var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

const makeDeck = () => {
    deck = new Array();
    for(var i = 0; i <values.length; i++){
        var number = parseInt(values[i]);
        if (values[i] == "J" || values[i] == "Q" || values[i] == "K"){
            number =  10;
        }
        if(value[i] == "A"){
            number = 11;
        }
        var card = {Value: values[i], Number : number}
        deck.push(card);
    }
}

const getCards = () => {
    for(let i = 0; i < carddata.length; i++) {
        console.log(carddata[i].name)
    }
}

