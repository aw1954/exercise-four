const express = require("express");

const router = express.Router();

//TODO: Hook up to firebase for a single article based on ID

router.get("/", (req, res) => {
    res.send(`
        <h1>Individual Article</h1>
        <p>A single article will go here...</h1>
    `);
});

module.exports = router;