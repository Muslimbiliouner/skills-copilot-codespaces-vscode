// Create Web Server
// Create Web Server
const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const comment = require('./comment');

app.use(bodyParser.json());

app.post('/comment', (req, res) => {
    const { body } = req;
    const { comment } = body;
    const result = comment.comment(comment);
    res.send(result);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});