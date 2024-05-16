var quotes = [
    `“Be yourself; everyone else is already taken.”
    ― Oscar Wilde`,
    `“I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.”
    ― Marilyn Monroe`,
    `“So many books, so little time.”
    ― Frank Zappa`,
    `“Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.”
    ― Albert Einstein`,
    `“A room without books is like a body without a soul.”
    ― Marcus Tullius Cicero`,
    `“Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind.”
    ― Bernard M. Baruch`,
    `“You've gotta dance like there's nobody watching,
    Love like you'll never be hurt,
    Sing like there's nobody listening,
    And live like it's heaven on earth.”
    ― William W. Purkey
    `,
    `“You know you're in love when you can't fall asleep because reality is finally better than your dreams.”
    ― Dr. Seuss`,
    `“Friendship ... is born at the moment when one man says to another "What! You too? I thought that no one but myself . . .”
    ― C.S. Lewis, The Four Loves`,
    `“Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.”
    ― Martin Luther King Jr., A Testament of Hope: The Essential Writings and Speeches`,
    `“To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.”
    ― Ralph Waldo Emerson`
]
var quote;
var checkNumber;
function quoteGenerator() {
    var ranadomNum = Math.floor(Math.random() * quotes.length)
    checkNumber = quote;
    quote = quotes[ranadomNum]
    if(checkNumber==quotes[ranadomNum]){
        quoteGenerator();
    }
    else{
        document.getElementById('demo').innerHTML = quote;
    }
}
