const quotes = [
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" },
    { text: "Believe you can and you're halfway there.", author: "Theodore Roosevelt" },
    { text: "Strive not to be a success, but rather to be of value.", author: "Albert Einstein" },
    { text: "The only limit to our realization of tomorrow will be our doubts of today.", author: "Franklin D. Roosevelt" },
    { text: "It is during our darkest moments that we must focus to see the light.", author: "Aristotle" },
    { text: "The way to get started is to quit talking and begin doing.", author: "Walt Disney" },
    { text: "Your time is limited, don't waste it living someone else's life.", author: "Steve Jobs" },
    { text: "The only person you should try to be better than is the person you were yesterday.", author: "Anonymous" },
    { text: "Everything you can imagine is real.", author: "Pablo Picasso" },
    { text: "Life is not about waiting for the storm to pass, it's about learning how to dance in the rain.", author: "Vivian Greene" },
    { text: "Happiness is not something ready made. It comes from your own actions.", author: "Dalai Lama XIV" },
    { text: "Do not go where the path may lead, go instead where there is no path and leave a trail.", author: "Ralph Waldo Emerson" },
    { text: "The only way to do great work is to love what you do.", author: "Steve Jobs" },
    { text: "Success is not final, failure is not fatal: It is the courage to continue that counts.", author: "Winston Churchill" },
    { text: "The future belongs to those who believe in the beauty of their dreams.", author: "Eleanor Roosevelt" },
    { text: "The greatest glory in living lies not in never falling, but in rising every time we fall.", author: "Nelson Mandela" },
    { text: "Life is what happens when you're busy making other plans.", author: "John Lennon" }
];

let currentQuoteIndex = -1;

function generateQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    currentQuoteIndex = randomIndex;
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const quote = quotes[randomIndex];
    quoteText.textContent = `"${quote.text}" - ${quote.author}`;
}

function previousQuote() {
    if (currentQuoteIndex === -1) return;
    currentQuoteIndex = (currentQuoteIndex - 1 + quotes.length) % quotes.length;
    const quoteContainer = document.getElementById('quoteContainer');
    const quoteText = document.getElementById('quoteText');
    const quote = quotes[currentQuoteIndex];
    quoteText.textContent = `"${quote.text}" - ${quote.author}`;
}
