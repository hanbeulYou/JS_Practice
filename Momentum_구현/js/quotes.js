const quotes = [
    {
        quote: "It is better to be hated for what you are than to be loved for what you are not.",
        author: "André Gide",
    },
    {
        quote: "The opposite of love is not hate, it's indifference. The opposite of art is not ugliness, it's indifference. The opposite of faith is not heresy, it's indifference. And the opposite of life is not death, it's indifference.",
        author: "Elie Wiesel",
    },
    {
        quote: "It is not a lack of love, but a lack of friendship that makes unhappy marriages.",
        author: "Friedrich Nietzsche",
    },
    {
        quote: "If you can make a woman laugh, you can make her do anything.",
        author: "Marilyn Monroe",
    },
    {
        quote: "The real lover is the man who can thrill you by kissing your forehead or smiling into your eyes or just staring into space.",
        author: "Marilyn Monroe",
    },
    {
        quote: "Love does not begin and end the way we seem to think it does. Love is a battle, love is a war; love is a growing up.",
        author: "James Baldwin",
    },
    {
        quote: "There is nothing I would not do for those who are really my friends. I have no notion of loving people by halves, it is not my nature.",
        author: "Jane Austen",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random()*quotes.length)]

quote.innerText = todaysQuote.quote;
author.innerText = todaysQuote.author;