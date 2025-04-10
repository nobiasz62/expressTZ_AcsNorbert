const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bodyparser = require("body-parser");
const app = express();

app.use(cors());

const db = mysql.createConnection({
    user:"root",
    host:"localhost",
    port:3306,
    password:"",
    database:"fogado"
});

app.get("/", (req, res) => {
    res.send("A szerver működik.")
})

app.get("/szoba", (req, res) => {
    db.query("SELECT*FROM szobak"
    , (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });

});

app.get("/agyakszama", (req, res) => {
    db.query("SELECT*FROM szobak WHERE szobak.agy = 3"
    , (err, result) => {
        if (err) return res.json(err);
        res.json(result);
    });

});

app.listen(3000, () => {
    console.log("A fogado szerver a 3000-es porton fut.")
})