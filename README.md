# Final Project Template [Replace with your project name]

# Final Project - API Proxy Guide

## Overview

This guide will help you complete your final project using the API proxy I've set up. You'll learn how to access various APIs, manage your budget, and build an awesome project!

---

## Part I - Choose Your API

### Using the API Proxy

I've set up a special API proxy that gives you access to many APIs without needing to sign up for each one individually. Here's what you need to know:

**What You Get:**

- **Your API Key** - A unique code just for you (I'll give this to you)
- **The Proxy URL** - `https://student-api-proxy.onrender.com`
- **$5.00 Budget** - For making API calls
- **No Credit Card Required** - Everything is pre-configured!

**Keep your API key safe!** Don't share it with other students.

### Available APIs

Check what APIs are available to you:

```
https://student-api-proxy.onrender.com/apis
```

Open this URL in your browser to see the full list with costs per call!

### Recommended Free/Cheap APIs on RapidAPI

Here are some great APIs I can add for you (just ask!):

**Sports:**

- **API-Football** (`api-football-v1.p.rapidapi.com`) - Soccer/football data, live scores, standings - FREE tier (100 req/day)
- **API-NBA** (`api-nba-v1.p.rapidapi.com`) - NBA stats, teams, players, games - FREE tier (100 req/day)
- **API-Baseball** (`api-baseball.p.rapidapi.com`) - Baseball stats and scores - FREE tier
- **TheSportsDB** (`thesportsdb.p.rapidapi.com`) - Multi-sport data with images - FREE
- **NBA Stats** (`nba-stats-db.p.rapidapi.com`) - Player and team statistics - FREE tier
- **Live Sports Odds** (`live-sports-odds.p.rapidapi.com`) - Sports betting odds - FREE tier

**Movies & TV:**

- **Streaming Availability** (`streaming-availability.p.rapidapi.com`) - Where to watch movies/shows - FREE tier (100 req/day)
- **Advanced Movie Search** (`advanced-movie-search.p.rapidapi.com`) - Movie database - FREE
- **OTT Details** (`ott-details.p.rapidapi.com`) - Streaming platform info - FREE tier
- **Movie Database Alternative** (`moviesminidatabase.p.rapidapi.com`) - Movie data - FREE tier
- **Watchmode** (`watchmode.p.rapidapi.com`) - Streaming sources - FREE tier

**Food & Recipes:**

- **Tasty** (`tasty.p.rapidapi.com`) - 4000+ recipes from Buzzfeed Tasty - FREE tier
- **Edamam Recipe Search** (`edamam-recipe-search.p.rapidapi.com`) - 2.3M+ recipes - FREE tier
- **The Meal DB** (`themealdb.p.rapidapi.com`) - 283 meals with images - FREE
- **Recipe by API-Ninjas** (`recipe-by-api-ninjas.p.rapidapi.com`) - Recipe search - FREE tier (1000/month)
- **Worldwide Recipes** (`worldwide-recipes1.p.rapidapi.com`) - International recipes - FREE tier
- **Low Carb Recipes** (`low-carb-recipes.p.rapidapi.com`) - Diet-specific recipes - FREE

**Health & Fitness:**

- **ExerciseDB** (`exercisedb.p.rapidapi.com`) - 1300+ exercises with animations - FREE
- **Workout Planner** (`work-out-api1.p.rapidapi.com`) - Custom workout plans - FREE tier
- **Fitness Calculator** (`fitness-calculator.p.rapidapi.com`) - BMI, calories, etc. - FREE tier
- **Nutrition by API-Ninjas** (`nutrition-by-api-ninjas.p.rapidapi.com`) - 100k+ foods - FREE tier (1000/month)
- **Calorie Ninjas** (`calorieninjas.p.rapidapi.com`) - Nutrition data - FREE tier
- **Yoga Poses** (`yoga-api-nzy4.p.rapidapi.com`) - Yoga pose database - FREE

**Other Cool APIs:**

- **GeoDB Cities** (`wft-geo-db.p.rapidapi.com`) - World cities data - FREE tier
- **Random Facts** (`random-facts2.p.rapidapi.com`) - Fun facts - FREE
- **Motivational Quotes** (`motivational-quotes1.p.rapidapi.com`) - Inspirational quotes - FREE
- **Trivia by API-Ninjas** (`trivia-by-api-ninjas.p.rapidapi.com`) - Trivia questions - FREE tier
- **Open Library** (`hapi-books.p.rapidapi.com`) - Book data - FREE
- **Currency Exchange** (`currency-exchange.p.rapidapi.com`) - Exchange rates - FREE tier

### Want an API That's Not Listed?

**How to Request a New API:**

1. **Find the API on RapidAPI** (https://rapidapi.com)
2. **Get the API Host** - Look in the code examples for `X-RapidAPI-Host`
   - Example: `dog-facts2.p.rapidapi.com`
3. **Send me this information:**
   - API Name (e.g., "Dog Facts")
   - API Host (e.g., "dog-facts2.p.rapidapi.com")
   - Link to the RapidAPI page
   - What you want to use it for

**Example Request:**

```
Hey! Can you add this API?

API Name: Dog Facts
API Host: dog-facts2.p.rapidapi.com
Link: https://rapidapi.com/api/dog-facts2
Purpose: I want to build a random dog facts app for my project
```

I'll review it and add it if it's appropriate for the class!

### Testing Your API

Once I've confirmed your API is available, test it with this code:

```javascript
const url = "https://student-api-proxy.onrender.com/api/API-HOST/ENDPOINT";
const options = {
  method: "GET",
  headers: {
    "X-API-Key": "YOUR-API-KEY-HERE",
  },
};

fetch(url, options)
  .then((response) =>
    response.json().then((result) => {
      console.log(result.data); // Your API data
      console.log(`Cost: $${result.meta.cost}`);
      console.log(`Remaining: $${result.meta.remaining_budget}`);
    }),
  )
  .catch((error) => {
    console.log(error);
  });
```

### Your Chosen API

[Game Quiz, game-quiz.p.rapidapi.com]

**Example:**

- API Name: Dad Jokes
- API Host: `dad-jokes.p.rapidapi.com`
- Endpoints I'll use: `/random/joke`, `/random/jokes/5`

---

## Part II - Flush Out Requirements

Now that you've chosen your API, make sure you have a plan to meet the requirements. Answer the following questions in the README:

**1. What is going to be your list?**
(e.g., jokes from Dad Jokes API, weather forecasts from Weather API, movie results from IMDB API)

[My list will be the list of trivia questions and answers]

**2. What is going to be your function with a parameter?**
(e.g., `loadJokesByCategory` with the parameter `category`, `getWeatherByCity` with the parameter `cityName`)

Describe how you are going to use the parameter in your code:

[My function is loadTriviaQuestionsByType, and the parameter is mcqOrTf, this is whether the trivia question will be a true or false or multiple choice.]

**3. What is going to be your loop?**
(e.g., loop to display jokes, loop to display forecast days, loop to display movie results)

[My loop is to display the trivia questions.]

---

## How To Use the API Proxy

### The Basic Pattern

**Using the Proxy (what you'll do):**

```javascript
const url =
  "https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/joke";
const options = {
  method: "GET",
  headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
};
const response = await fetch(url, options);
const result = await response.json();
const data = result.data; // Your API response
```

**Key Changes from Regular APIs:**

1. URL becomes: `https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]`
2. Add your API key in headers: `'X-API-Key': 'your-key'`
3. Data is in `result.data`, cost info is in `result.meta`

### Complete Examples

#### Example 1: Simple Button Click (Dad Jokes)

```javascript
const jokeButton = document.querySelector("#joke-btn");
const jokesList = document.querySelector(".jokes-list");

const loadJokes = async (limit) => {
  if (!limit) {
    alert("Limit not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/jokes/${limit}`;

  const options = {
    method: "GET",
    headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const jokes = result.data;

  jokesList.innerHTML = "";
  jokes.forEach((joke) => {
    const listItem = `
      <li class="list-group-item">
        ${joke.setup} - <em>${joke.punchline}</em>
      </li>
    `;
    jokesList.insertAdjacentHTML("beforeend", listItem);
  });
};

jokeButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadJokes(5); // Get 5 random jokes
});
```

#### Example 2: Multiple Buttons with Parameters (Weather)

```javascript
const nycButton = document.querySelector("#nyc-btn");
const laButton = document.querySelector("#la-btn");
const chicagoButton = document.querySelector("#chicago-btn");
const weatherList = document.querySelector(".weather-list");

const loadWeather = async (city) => {
  if (!city) {
    alert("City not set properly");
    return;
  }

  // Get 5-day forecast
  const url = `https://student-api-proxy.onrender.com/api/weatherapi-com.p.rapidapi.com/forecast.json?q=${city}&days=5`;

  const options = {
    method: "GET",
    headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const forecastDays = result.data.forecast.forecastday;

  weatherList.innerHTML = "";
  forecastDays.forEach((day) => {
    const listItem = `
      <li class="list-group-item">
        ${day.date}: ${day.day.condition.text}, High: ${day.day.maxtemp_f}°F
      </li>
    `;
    weatherList.insertAdjacentHTML("beforeend", listItem);
  });
};

nycButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadWeather("New York");
});

laButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadWeather("Los Angeles");
});

chicagoButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadWeather("Chicago");
});
```

#### Example 3: User Input with Search (Movies)

```javascript
const searchInput = document.querySelector(".search-input");
const searchButton = document.querySelector("#search-btn");
const moviesList = document.querySelector(".movies-list");

const searchMovies = async (searchTerm) => {
  if (!searchTerm) {
    alert("Please enter a movie title");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/imdb236.p.rapidapi.com/imdb-search?query=${searchTerm}`;

  const options = {
    method: "GET",
    headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
  };

  moviesList.innerHTML = "Loading...";

  const response = await fetch(url, options);
  const result = await response.json();
  const movies = result.data;

  moviesList.innerHTML = "";
  movies.forEach((movie) => {
    const listItem = `
      <li class="list-group-item">
        <strong>${movie.title}</strong> (${movie.year}) - Rating: ${movie.rating}/10
      </li>
    `;
    moviesList.insertAdjacentHTML("beforeend", listItem);
  });
};

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const searchTerm = searchInput.value.trim();
  searchMovies(searchTerm);
});

// Also search when pressing Enter
searchInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const searchTerm = searchInput.value.trim();
    searchMovies(searchTerm);
  }
});
```

#### Example 4: Category Selection (Joke Categories)

```javascript
const funnyButton = document.querySelector("#funny-btn");
const dadButton = document.querySelector("#dad-btn");
const punchlineButton = document.querySelector("#punchline-btn");
const jokesList = document.querySelector(".jokes-list");

const loadJokesByCategory = async (category) => {
  if (!category) {
    alert("Category not set properly");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/jokes/search?term=${category}`;

  const options = {
    method: "GET",
    headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const jokes = result.data;

  jokesList.innerHTML = "";
  jokes.forEach((joke) => {
    const listItem = `
      <li class="list-group-item">
        ${joke.setup} - ${joke.punchline}
      </li>
    `;
    jokesList.insertAdjacentHTML("beforeend", listItem);
  });
};

funnyButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadJokesByCategory("funny");
});

dadButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadJokesByCategory("dad");
});

punchlineButton.addEventListener("click", (event) => {
  event.preventDefault();
  loadJokesByCategory("punchline");
});
```

#### Example 5: Getting Quotes by Author (Like Your Previous Project)

```javascript
const authorInput = document.querySelector(".author-input");
const searchButton = document.querySelector("#search-btn");
const quotesList = document.querySelector(".quotes-list");

const loadQuotesByAuthor = async (author) => {
  if (!author) {
    alert("Please enter an author name");
    return;
  }

  const url = `https://student-api-proxy.onrender.com/api/quotes15.p.rapidapi.com/quotes/random?author=${author}&limit=5`;

  const options = {
    method: "GET",
    headers: { "X-API-Key": "YOUR-API-KEY-HERE" },
  };

  const response = await fetch(url, options);
  const result = await response.json();
  const quotes = result.data;

  quotesList.innerHTML = "";
  quotes.forEach((quote) => {
    const listItem = `
      <li class="list-group-item">
        ${quote.content} - ${quote.author}
      </li>
    `;
    quotesList.insertAdjacentHTML("beforeend", listItem);
  });
};

searchButton.addEventListener("click", (event) => {
  event.preventDefault();
  const author = authorInput.value.trim();
  loadQuotesByAuthor(author);
});

// Also search when pressing Enter
authorInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    const author = authorInput.value.trim();
    loadQuotesByAuthor(author);
  }
});
```

### Understanding URL Structure

When you see an API endpoint on RapidAPI like:

```
https://dad-jokes.p.rapidapi.com/random/joke
```

Change it to:

```
https://student-api-proxy.onrender.com/api/dad-jokes.p.rapidapi.com/random/joke
```

**Pattern:**

```
https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]?[PARAMETERS]
```

---

## Part III - Design HTML

Use [Bootstrap](https://getbootstrap.com/docs/5.3/getting-started/introduction/) to design your HTML. Make sure it is visually appealing. Use dummy images and [Lorem Ipsum](https://loremipsum.io/) if needed as placeholders.

---

## Part IV - Code Up App

Finish coding up the app. **DO NOT** use generative AI. Look at previous projects for examples on how to meet the requirements. If you use any other resources please cite them below.

Remember to run your project first run the command:

```
npm install
```

then:

```
node server.js
```

### Pro Tips for Your Project

#### 1. Check Your Budget

Use this command in your terminal to check your remaining budget:

```bash
curl https://student-api-proxy.onrender.com/my/usage \
  -H "X-API-Key: YOUR-API-KEY-HERE"
```

Response:

```json
{
  "name": "Your Name",
  "budget": 5.00,
  "spent": 0.15,
  "remaining": 4.85,
  "recent_calls": [...]
}
```

#### 2. Don't Spam the API

**Bad - Making calls too fast:**

```javascript
// DON'T DO THIS - Will hit rate limit!
for (let i = 0; i < 20; i++) {
  await fetch(url, options); // Too many calls at once!
}
```

**Good - Using delays in a loop:**

```javascript
// Add a delay between calls
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

for (let i = 0; i < 20; i++) {
  await fetch(url, options);
  await delay(1000); // Wait 1 second between calls
}
```

**Better - Cache results to avoid repeat calls:**

```javascript
// Store results so you don't call the API again
let cachedJokes = null;

const loadJokes = async () => {
  // Check if we already have the data
  if (cachedJokes) {
    console.log("Using cached data!");
    displayJokes(cachedJokes);
    return;
  }

  // Only call API if we don't have cached data
  const response = await fetch(url, options);
  const result = await response.json();
  cachedJokes = result.data; // Save for next time

  displayJokes(cachedJokes);
};

// First click: calls API
// Second click: uses cached data (no API call!)
```

#### 3. Understanding the Response

All responses include your cost and remaining budget:

```javascript
const response = await fetch(url, options);
const result = await response.json();

// The actual API data is in result.data
const apiData = result.data;

// Your cost info is in result.meta
console.log(`This call cost: $${result.meta.cost}`);
console.log(`Remaining: $${result.meta.remaining_budget}`);
```

### Common Errors & Solutions

#### "Invalid API key"

- ✅ Check you're using the correct API key I gave you
- ✅ Make sure you included the `X-API-Key` header
- ✅ Check for typos in your key

#### "API not approved"

- ✅ This API hasn't been added yet
- ✅ Ask me to add it
- ✅ Check the available APIs: `https://student-api-proxy.onrender.com/apis`

#### "Budget exceeded"

- ✅ You've spent your entire $5 budget
- ✅ Ask me to reset your budget
- ✅ Be more efficient with your API calls

#### "Rate limit exceeded"

- ✅ You made too many requests too quickly (max 100 per 15 minutes)
- ✅ Wait 15 minutes and try again
- ✅ Don't make API calls in tight loops

### External Resources

[List any external resources you used here]

---

## Part V - Complete Google Doc

Complete Google Doc about your project:
[Google Doc Template](https://docs.google.com/document/d/13qV28dQQ1foELBEA7lA9Imha7U4v1BoypI4pZIlsH-A/edit?tab=t.0)

Make a copy, fill it out, and paste the link below:

[Replace with your Google Doc link]

---

## Quick Reference

**Your Essentials:**

- **Proxy URL:** `https://student-api-proxy.onrender.com/api/[API-HOST]/[ENDPOINT]`
- **Your API Key:** `[I'll give you this]`
- **Header Required:** `'X-API-Key': 'your-key-here'`
- **Check Budget:** `https://student-api-proxy.onrender.com/my/usage`
- **See Available APIs:** `https://student-api-proxy.onrender.com/apis`

**Code Template:**

```javascript
const url =
  "https://student-api-proxy.onrender.com/api/API-HOST/ENDPOINT?PARAMETERS";
const options = {
  method: "GET",
  headers: { "X-API-Key": "YOUR-KEY" },
};
const response = await fetch(url, options);
const result = await response.json();
const data = result.data;
```

---

## Need Help?

1. Check the available APIs first
2. Make sure your API key is correct
3. Check your budget hasn't run out
4. Ask me for help!

Happy coding! 🚀
