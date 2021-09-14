const express = require("express")
const logger = require("morgan")
const path = require("path");

const sqlite3 = require('sqlite3').verbose();

// open the database
let db = new sqlite3.Database('./node-server/SQLite/payer.db', sqlite3.OPEN_READWRITE, (err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Connected to the payer database.');
});

let dollars_sent = db.serialize(() => {
    db.each(`SELECT dollars_sent as dollars_sent FROM user`, (err, row) => {
        if (err) {
            console.error(err.message);
        }
        console.log(row.dollars_sent);
    });
});

db.close((err) => {
    if (err) {
        console.error(err.message);
    }
    console.log('Close the database connection.');
});

const app = express()
module.exports = app
app.use(logger("tiny"))


app.get("/pay", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "pay.html"));
});

app.get("/dollars_received", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dollars_received.html"));
});

app.get("/dollars_sent", (req, res) => {
    res.sendFile(path.join(__dirname, "views", "dollars_sent.html"));
    res.render('views/dollarssent.html', {data: dollars_sent})
});

