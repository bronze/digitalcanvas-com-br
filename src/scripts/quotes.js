// https://blog.kritikapattalam.com/build-a-random-quote-generator-using-javascript
const generateQuote = function () {
  const quotes = [
    {
      quote: "It's kind of fun to do the impossible",
      author: "Walt Disney"
    },
    {
      quote: "All we have to decide is what to do with the time that is given to us",
      author: "J.R.R. Tolkien"
    },
    {
      quote: "Imagination is the only weapon against reality",
      author: "Lewis Carroll"
    },
    {
      quote: "You can't go back and change the beggining, but you can start where you are and change the ending",
      author: "C. S. Lewis"
    },
    {
      quote: "The only way the magic works is by hard work. But hard wok can be fun",
      author: "Jim Hanson"
    },
    {
      quote: "Someday you will be old enough to start reading fairy tales again",
      author: "C. S. Lewis"
    },
    {
      quote: "If you don’t know where you’re going, any road will take you there",
      author: "Lewis Carroll"
    }
  ];

  let arrayIndex = Math.floor(Math.random() * quotes.length);
  document.getElementById("quote").innerHTML = quotes[arrayIndex].quote;
  document.getElementById("author").innerHTML = quotes[arrayIndex].author;

}
window.onload = function () {
  generateQuote();
}