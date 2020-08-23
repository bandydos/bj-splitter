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
}, {
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
}, {
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
}, {
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

$(document).ready(() => {
    $('#table-cards-1').hide();
    $('#table-cards-2').hide();
    $('#table-cards-3').hide();

    $('#btn-shuffle').click(() => {
        shuffle();
        displayControl('s');
        showCards(cards, 'table-cards-1');
        updateTotal(cards, 'h-total-1');
        updateOutcome('h-outcome-1')
        updateStand('h-stand-1', checkHit(calcTotalValue(cards)));
    })
    $('#btn-hit').click(() => {
        getCard();
        showCards(cards, 'table-cards-1');
        displayControl('h');
        updateTotal(cards, 'h-total-1');
        updateOutcome('h-outcome-1')
        updateStand('h-stand-1', checkHit(calcTotalValue(cards)));
    })
    $('#btn-reset').click(() => {
        displayControl('r');
        cards = [];
    })
})

var suits = ["Spades", "Hearts", "Diamonds", "Clubs"];
var values = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var deck = new Array();

const makeDeck = () => {
    deck = new Array();
    for (var i = 0; i < values.length; i++) {
        var number = parseInt(values[i]);
        if (values[i] == "J" || values[i] == "Q" || values[i] == "K") {
            number = 10;
        }
        if (values[i] == "A") {
            number = 11;
        }
        var card = { Value: values[i], Number: number }
        deck.push(card);
    }
}

var cards = [];

const checkHit = (totalValue) => {
    if ((totalValue < 16)) {
        return true; // Hit when total < 16.
    } else {
        return false;
    }
}


const getCard = () => {
    const hit = checkHit(calcTotalValue(cards));

    if (hit) {
        // Push when hit.
        cards.push(carddata[Math.floor(Math.random() * carddata.length)])
    }

    return cards;
}

const calcTotalValue = (crds) => {
    let totalValue = 0;

    // Calculate total value.
    for (let i = 0; i < crds.length; i++) {
        totalValue += crds[i].value;
    }

    return totalValue;
}

const checkOutcome = (totalValue) => {
    let outcome = "";

    // Possible outcomes.
    if (totalValue > 15 && totalValue < 21) outcome = 'Good hand'; // Good hand.
    else if (totalValue > 21) outcome = 'Bust'; // Bust.
    else if (totalValue == 21) outcome = 'Blackjack'; // Blackjack.
    else outcome = 'Low hand'; // Low hand.

    return outcome;
}

const showCards = (crds, table) => {
    $('#table-cards-1 tbody tr').remove(); // Remove old items before adding.
    for (let i = 0; i < crds.length; i++) {
        // Append to table.
        $('#' + table).append(`<tr><td>${i + 1}</td><td>${crds[i].name}</td></tr>`);
    }
}

const shuffle = () => {
    // Shuffle 2 cards.
    for (let i = 0; i < 2; i++) {
        getCard();
    }
}

const updateTotal = (crds, h) => {
    // Update the total value.
    $('#' + h).text(calcTotalValue(crds));
}

const updateOutcome = (h) => {
    // Update the outcome status.
    const outcome = checkOutcome(calcTotalValue(cards));
    $('#' + h).text(outcome)
}

const updateStand = (h, hit) => {
    // Check if hittable.
    if(hit == false) {
        $('#' + h).text('Stand');
    } else {
        $('#' + h).text('Hittable');
    }
}

// Control button displays.
const displayControl = (type) => {
    if (type == 's') {
        $('#btn-shuffle').hide();
        $('#btn-hit').show();
        $('#btn-reset').show();
        $('#table-cards-1').show();
        $('#h-total-1').show();
        $('#h-outcome-1').show();
        $('#h-stand-1').show();
    } else if (type == 'h') {
        $('#btn-shuffle').hide();
        $('#btn-hit').show();
        $('#btn-reset').show();
        $('#table-cards-1').show();
        $('#h-total-1').show();
        $('#h-outcome-1').show();
        $('#h-stand-1').show();
    } else if (type == 'r') {
        $('#btn-shuffle').show();
        $('#btn-hit').hide();
        $('#btn-reset').hide();
        $('#table-cards-1').hide();
        $('#h-total-1').hide();
        $('#h-outcome-1').hide();
        $('#h-stand-1').hide();
    }
}

