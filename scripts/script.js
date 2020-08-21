$(document).ready(() => {
    console.log('ready');
    $('#btn-generate').click(() => {
        console.log('clicked')
    })
})

const carddata = [{
    "name": "Ace",
    "value": 1
},
{
    "name": "Two",
    "value": 2
},
{
    "name": "Three",
    "value": 3
},
{
    "name": "Four",
    "value": 4
},
{
    "name": "Five",
    "value": 5
},
{
    "name": "Six",
    "value": 6
},
{
    "name": "Seven",
    "value": 7
},
{
    "name": "Eight",
    "value": 8
},
{
    "name": "Nine",
    "value": 9
},
{
    "name": "Ten",
    "value": 10
},
{
    "name": "Jack",
    "value": 10
},
{
    "name": "Queen",
    "value": 10
},
{
    "name": "King",
    "value": 10
}];


var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

const getBeers = async () => {
    const url = '../data/carddata.json';
    const response = await fetch(url);
    const jsonresponse = await response.json();
    return jsonresponse;
}


console.log(getBeers());
