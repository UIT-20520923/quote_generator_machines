import React, { useEffect, useState } from "react";

import "./App.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import colorArray from "./colorarray";
const element = <FontAwesomeIcon icon={faTwitter} />
let quoteDB =
  "https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json";

function App() {
  const [quote, setQuote] = useState("We become what we think about.");
  const [author, setAuthor] = useState("Earl Nightingale");
  const [ramdomnumber, setRamdomnumber] = useState(4);
  const [quotesArray, setQuotesArray] = useState(null);
  const [colortype, setColortype] = useState('#282c34');
  const fetchQuotes = async (url) => {
    const response = await fetch(url);
    const parseJSON = await response.json();
    setQuotesArray(parseJSON.quotes);
  };
  useEffect(() => {
    fetchQuotes(quoteDB);
  }, [quoteDB]);

  const changeQuote = () => {
    let randomindex = Math.floor(Math.random() * quotesArray.length);
    setRamdomnumber(randomindex);
    setColortype(colorArray[randomindex])
    setQuote(quotesArray[randomindex].quote);
    setAuthor(quotesArray[randomindex].author);
  };
  const ourquotesArray = [
    "Life is 10% what happens to me and 90% of how I react to it.",
    "When I let go of what I am, I become what I might be.",
    "Everything has beauty, but not everyone can see.",
    "First, have a definite, clear practical ideal; a goal, an objective. Second, have the necessary means to achieve your ends; wisdom, money, materials, and methods. Third, adjust all your means to that end.",
  ];
  const ourAuthorArray = [
    "- Charles Swindoll",
    "- Lao Tzu",
    "- Confucius",
    "- Aristotle",
  ];
  return (
    <div className="App">
      ,""
      <header className="App-header" style={{
        backgroundColor:colortype
      }}>
        <div id="quote-box" style={{color:colortype}}>
          
          <p id="text">"{quote}"</p>
          <p id="author">___{author}___</p>
          <button
            style={{backgroundColor:colortype}}
            id="new-quote"
            onClick={() => changeQuote()}
          >
            Change quote
          </button>
          <a style={{backgroundColor:colortype}}href="twitter.com/intent/tweet" id="tweet-quote">
            {element}
          </a>
        </div>
      </header>
    </div>
  );
}

export default App;
