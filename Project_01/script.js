let apiQuotes = [];

//Show new Quotes
function showNewQuote() {
    //pick random quotes
    // let randomQuote = Math.floor(Math.random() * apiQuotes.length);
    const randomQuote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(randomQuote);
}
// Get Quotes from API

async GetQuotes() {
    // const response = await fetch("https://api.quotable.io/random");
    const apiURL = 'https://type.fit/api/quotes';
    try{
        const response = await fetch(apiURL);
        apiQuotes = await response.json();
        showNewQuote();

    }catch{
        alert("Error");
    }
    const response = await fetch(apiURL);  
}

// on Load

GetQuotes();