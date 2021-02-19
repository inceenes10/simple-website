const express = require('express');
const app = express();
const cors = require('cors');
const port = 8000;

const sqlite = require('sqlite3').verbose();


const bodyParser = require('body-parser');



app.use(bodyParser.json());

app.use(cors());
// enables cors in express
let db = new sqlite.Database('./sample.db', (err) => {
    if (err)
        console.log(err.message);
    else {
        console.log('connected to db');
    }
});
app.post('/contact', (req, res) => {
    // add data to database
    db.run(`CREATE TABLE IF NOT EXISTS contact (
id INTEGER PRIMARY KEY AUTOINCREMENT,
name TEXT NOT NULL,
surname TEXT NOT NULL,
message TEXT NOT NULL
)
`, (err) => {
        if (err) console.log(err);
        else {
            const { name, surname, message } = req.body;
            console.log(name, surname, message);

            db.run(`insert into contact (name, surname, message) values('${name}', '${surname}', '${message}')`, (err) => {
                if (err) {
                    console.log(err);
                }
                else
                {
                    console.log('entry added to table');
                }
            })
        }
    });

});



app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});