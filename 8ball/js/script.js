alert ("hello")

function shake() {
    alert ("by pressing OK, you are paying a minimum of $5 USD to recieve (1) fortune. \n(positive fortunes will cost up to a 50% increase in price.)")
    flip()
    var fortune = get_fortune()
    display_fortune(fortune)
}

function flip() {

}

function get_fortune() {
    let fortunes = ["YES!","NO.","maybe...","perhaps?", "signs point to NO.", "signs point to YES!", "ask again later, im BUSY.", "go ask my neighbor", "clearly"]
    let random_index = randInt(fortunes.length)
    return fortunes[random_index]
}

function randInt(length) {
    let rand = Math.random()
    let br = rand * length
    let index = Math.floor(br)
    return index
}

function display_fortune(fortune) {
    alert("your answer is... "+fortune)
}