const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

app.use(cors());
// enables cors in express


app.post('/contact', (req, res) => {
    // add data to database
    res.json({ username: 'Flavio'});

});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});