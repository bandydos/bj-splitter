console.log('...');

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