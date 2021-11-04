const express = require("express");

const router = express.Router();

//TODO: Hook up to firebase to allow for a POST request to create
// a single article.

router.get("/", (req, res) => {
    res.send(`
        <h1>Create Article</h1>

        <form>
            <div style="
                display: flex; 
                flex-direction: column; 
                margin-bottom: 20px; 
                max-width: 325px;
            ">
                <label for="articleTitle">
                    Article Title
                </label>
                <input 
                    type="text" 
                    name="articleTitle" 
                    placeholder="type article title..." 
                />
            </div>
            <button type="submit">Submit Article</button>
        </form>
    `);
});

module.exports = router;