// https://dev.to/grepliz/create-your-own-quote-api-with-netlify-functions-part-3-36be
// $project_root/functions/quotes/quotes.js
exports.handler=async (event, context) => {

  const quotes=[
    {"quote": "You gotta be kidding me?"},
    {"quote": "Will you be my neighbor?"},
    {"quote": "Liz is awesome!"}
  ];

  const number=Math.floor(Math.random()*quotes.length);
  const quote=quotes[number];

  return {
    statusCode: 200,
    body: JSON.stringify(quote)
  };

};

// // Docs on event and context https://docs.netlify.com/functions/build/#code-your-function-2
// const handler = async (event) => {
//   try {
//     const subject = event.queryStringParameters.name || 'World'
//     return {
//       statusCode: 200,
//       body: JSON.stringify({ message: `Hello ${subject}` }),
//       // // more keys you can return:
//       // headers: { "headerName": "headerValue", ... },
//       // isBase64Encoded: true,
//     }
//   } catch (error) {
//     return { statusCode: 500, body: error.toString() }
//   }
// }

// module.exports = { handler }
