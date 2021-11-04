const express = require("express");
// Initiate Express
const app = express();
// Setting port - dynamically with Heroku
const port = process.env.PORT || 4000;

// Import Firebase
const firebase = require('firebase/app');
// Get configuration object so we can communicate with Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC5P-7e9D12MMmxHxxGUiqOl_GlAA90AS8",
    authDomain: "exercise-four-6f033.firebaseapp.com",
    projectId: "exercise-four-6f033",
    storageBucket: "exercise-four-6f033.appspot.com",
    messagingSenderId: "592586805339",
    appId: "1:592586805339:web:e04ae3a046e80fd2836f7e"
  };
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Routes for directing user to correct place
const indexRoute = require("./routes/index");
const articleRoute = require("./routes/article");
const createArticleRoute = require("./routes/createArticle");
// Tell Express to use routes...
app.use("/", indexRoute);
app.use("/article", articleRoute);
app.use("/create", createArticleRoute);
// Listen for requests on the port - if a user visits then send a result
app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});