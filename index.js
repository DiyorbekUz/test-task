
// 1-solution
function hide_card(card){
    let newCardNumber = ''
    card = card.replace(/\s/g, '');

    for(let i = 0; i<= card.length-1; i++){
        if(i <= 3){
            newCardNumber+=card[i]
            continue
        }
        if (i > 11) {
            newCardNumber+=card[i]
            continue
        }

        newCardNumber+='*'

    }

    newCardNumber = newCardNumber.match(/.{1,4}/g).join(' ')
    return newCardNumber
}

console.log(hide_card('4276 4500 0000 1313'))

// 2-solution


function percentage(num, percent){
    if(percent > 1 || percent < 0){
        return "invalid precent!"
    }
    return num * (percent / 100);
}

console.log(percentage(100, -2))
