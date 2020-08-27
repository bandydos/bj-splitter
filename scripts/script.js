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

        console.log(generateDeck(2))
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

const generateDeck = (amountOfDecks) => {
    let deck = [];
    const suits = ['Spades', 'Clubs', 'Diamonds', 'Hearts'];
    const names = ['Ace', 'Two', 'Three', 'Four', 'Five', 'Six', 'Seven', 'Eight', 'Nine', 'Ten', 'Jack', 'Queen', 'King'];
    const values = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10];
    for (let i = 0; i < amountOfDecks; i++) {
        for (let j = 0; j < suits.length; j++) {
            for (let k = 0; k < names.length; k++) {
                let card = {
                    suit: suits[j],
                    name: names[k],
                    value: values[k]
                }
                deck.push(card);
            }
        }
    }

    return deck;
}


// random comment 
var cards = [];

const getCard = () => {
    const hit = checkHit(calcTotalValue(cards));
    const decks = generateDeck(4);
    
    if (hit) {
        // Push into cards when hit.
        cards.push(decks[Math.floor(Math.random() * decks.length)])
    }
}

const checkHit = (totalValue) => {
    if ((totalValue < 16)) {
        return true; // Hit when total < 16.
    } else {
        return false;
    }
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
        $('#' + table).append(`<tr><td>${i + 1}</td><td>${crds[i].name} of ${crds[i].suit}</td></tr>`);
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
    if (hit == false) {
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
