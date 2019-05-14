// Code your solutions in this file

function writeCards(names, event) {
    let thankYouCards = []
    for (let card = 0; card < names.length; card++ ) {
        thankYouCards.push( `Thank you, ${names[card]}, for the wonderful ${event} gift!`)
    }
    return thankYouCards
}

function countdown(number) {
    while (number > 0) {
        console.log(number);
        number -= 1;
    }
    console.log(number);
}
  