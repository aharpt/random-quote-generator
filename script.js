
// Random Quote Generator

// 1. Add Quotes array

var Quotes = [

  {
    quote: "Now is the winter of our discontent Made glorious summer by this sun of York.",
    author: "William Shakespeare"
  },

  {
    quote: "As merry as the day is long.",
    author: "William Shakespeare"
  },

  {
    quote: "O let us love our occupations, Bless the squire and his relations,Live upon our daily rations, And always know our proper stations.",
    author: "Charles Dickens"
  },

  {
    quote: "The great advantage of a hotel is that it's a refuge from home life.",
    author: "George Bernard Shaw"
  },

  {
    quote: "My specialty is being right when other people are wrong.",
    author: "George Bernard Shaw"
  }
];

// random number function

// function randomNumber(highNumber) {
//   var randomNumber = Math.floor(Math.random() * highNumber);
// }


// 2. Attach a click handler to "New quote" link
var newQuoteSpan = document.getElementsByClassName("new-quote-span");
// newQuoteSpan.onclick = getRandomQuote;
document.getElementById("new-quote-span").addEventListener("click", function( event ) {
    getRandomQuote();
  }, false);
  // 2.2 change background color/color
  var getRandomQuote = function() {
    // 2. Get random number and generate new quote based upon that
    var randomNumber = Math.floor(Math.random() * Quotes.length);
    // randomNumber(Quotes.length);
    // console.log(randomNumber);
    // 2.1 change quote
    document.querySelectorAll('.quote-text')[0].innerHTML = Quotes[randomNumber].quote;
    // 2.2 change author
    document.querySelectorAll('.span-div span')[0].innerHTML = Quotes[randomNumber].author;
    // 2.3 change background color/color
    var r = Math.ceil(Math.random() * 255);
    console.log(r);
    var g = Math.ceil(Math.random() * 255);
    console.log(g);
    var b = Math.ceil(Math.random() * 255);

    var randomBackground = document.querySelectorAll("body, footer a, .new-quote-link");

    console.log(randomBackground);

    for (var i = 0; i < randomBackground.length; i++) {
      randomBackground[i].style.background = "rgb(" + r + ", " + g + ", " + b + ")";
    }

    var randomColor = document.querySelectorAll(".fa, .quote-text, .author");

    console.log(randomColor);

    for (var i = 0; i < randomColor.length; i++) {
      randomColor[i].style.color = "rgb(" + r + ", " + g + ", " + b + ")";
    }
  };
