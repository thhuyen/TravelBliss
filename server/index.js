const bodyParser = require("body-parser");
const express = require("express");
const app = express();
const cors = require("cors");
const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "travelbliss",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

// get
app.get("/", (req, res) => {
    res.send("Hello world");
});

app.get("/api/users", (req, res) => {
    const sqlGet = "SELECT * FROM users";
    db.query(sqlGet, (error, result) => {
        console.log(result);
        res.send(result);
    });
});

app.get("/api/seats/standard", (req, res) => {
    const sqlGet =
        "SELECT CoachName, c.CoachId, CoachPrice, Status, Level FROM coachs c, seats s WHERE c.CoachId = s.CoachId AND c.CoachId = 1";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

app.get("/api/seats/four_cabins", (req, res) => {
    const sqlGet =
        "SELECT CoachName, c.CoachId, CoachPrice, Status, Level FROM coachs c, seats s WHERE c.CoachId = s.CoachId AND c.CoachId = 2";
    db.query(sqlGet, (error, result) => {
        res.send(result);
    });
});

// post
app.post("/api/postUsers", (req, res) => {
    const { idUser, Username, Password, Email, Fullname, Birthday, Identity_number } = req.body;
    const sqlInsert =
        "INSERT INTO `users`(`idUser`, `Username`, `Password`, `Email`, `Fullname`, `Birthday`, `Identity_number`) VALUES (?, ?, ?, ?, ?, ?, ?)";
    db.query(
        sqlInsert,
        [idUser, Username, Password, Email, Fullname, Birthday, Identity_number],
        (error, result) => {
            if (error) console.log(error);
        },
    );
});

app.post("/test/postUsers", (req, res) => {
    // console.log(JSON.stringify(req.body));
    res.send(req.body);
});

// put
app.put("/api/putUsers/password/:idUser", (req, res) => {
    const { idUser } = req.params;
    const { Password } = req.body;
    const sqlUpdate = `UPDATE users SET Password = ? WHERE idUser = ${idUser}`;
    db.query(sqlUpdate, [Password], (error, result) => {
        if (error) console.log(error);
    });
});

app.listen(5000, () => {
    console.log("Server is running on port 5000");
});
