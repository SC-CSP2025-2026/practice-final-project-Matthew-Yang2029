const url =
  "https://student-api-proxy.onrender.com/api/game-quiz.p.rapidapi.com/quiz/game";
const options = {
  method: "GET",
  headers: {
    "X-API-Key":
      "451dd69cf02828a90e9dd8cbcd7351a1dcc11518992ae7ebcb4cf094b5e9fecf",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      //console.log(`Cost: $${result.data}`);
      //console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
