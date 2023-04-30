const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createPool({
    host: "localhost",
    user: "root",
    password: "",
    database: "travelblist",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/users", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/seats/standard", (req, res) => {
    const sqlGet =
        "SELECT CoachName, c.CoachId, CoachPrice, SeatId, SeatNumber, Status, Level FROM coachs c, seats s WHERE c.CoachId = s.CoachId AND c.CoachId = 1";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/seats/four_cabins", (req, res) => {
    const sqlGet =
        "SELECT CoachName, c.CoachId, CoachPrice, SeatId, SeatNumber, Status, Level FROM coachs c, seats s WHERE c.CoachId = s.CoachId AND c.CoachId = 2";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});
app.post("/api/post", (req, res) => {
    const { username, password } = req.body;
    const sqlInsert = "INSERT INTO `users`(`id`, `username`, `password`) VALUES(0, ?, ?)";
    db.query(sqlInsert, [username, password], (error, result) => {
        if (error) console.log(error);
    });
});

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
