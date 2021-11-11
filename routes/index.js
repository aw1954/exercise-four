const express = require("express");
// Middleware to allow for routing on the node server
const router = express.Router();
// Require Firestore
const firestore = require("firebase/firestore"); 
// Initialize Firebase Database
const db = firestore.getFirestore();
//Get all articles from firebase
router.get("/", (req, res) => {
    const blogposts = firestore.getDocs(firestore.collection(db, "blogposts"));
    // Create empty array
    const blogpostsArray = [];

    blogposts
        .then((response) => {
            response.forEach((doc) => {
                // Push document into array every time the query loops over
                blogpostsArray.push(doc.data());
            });
            return res.send(blogpostsArray);
        })
        .catch(function (error) {
            console.log("Error:", error);
            return res.send(error);
        });
});

module.exports = router;
