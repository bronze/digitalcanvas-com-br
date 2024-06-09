// netlify/functions/quote.js
exports.handler=async function (event, context) {
  const quotes=[
    {"quote": "The only way to do great work is to love what you do.", "author": "Steve Jobs"},
    {"quote": "In three words I can sum up everything I've learned about life: it goes on.", "author": "Robert Frost"},
    {"quote": "Success is not final, failure is not fatal: It is the courage to continue that counts.", "author": "Winston Churchill"},
    {"quote": "It's kind of fun to do the impossible.", "author": "Walt Disney"},
    {"quote": "All we have to decide is what to do with the time that is given to us.", "author": "J.R.R. Tolkien"},
    {"quote": "Imagination is the only weapon against reality.", "author": "Lewis Carroll"},
    {"quote": "You can't go back and change the beginning, but you can start where you are and change the ending.", "author": "C. S. Lewis"},
    {"quote": "The only way the magic works is by hard work. But hard work can be fun.", "author": "Jim Hanson"},
    {"quote": "Someday you will be old enough to start reading fairy tales again.", "author": "C. S. Lewis"},
    {"quote": "If you don’t know where you’re going, any road will take you there.", "author": "Lewis Carroll"},
    {"quote": "A goal without a plan is just a wish.", "author": "Antoine de Saint-Exupéry"},
    {"quote": "Experience is not what happens to you; it's what you do with what happens to you.", "author": "Aldous Huxley"},
    {"quote": "If the path before you is clear, you're probably on someone else's.", "author": "Joseph Campbell"}
  ];

  const randomQuote=quotes[Math.floor(Math.random()*quotes.length)];

  return {
    statusCode: 200,
    body: JSON.stringify(randomQuote)
  };
};
