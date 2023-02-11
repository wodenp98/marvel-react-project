const express = require("express");
const app = express();
const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "p46Sl&98",
  database: `marvel-bdd`,
});

app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

app.get("/api/data", (req, res) => {
  connection.query("SELECT * FROM `marvel-bdd`.champions", (error, results) => {
    if (error) {
      return res.send(error);
    }
    res.json(results);
  });
});

app.listen(3000, () => {
  console.log("Server started on port 3000");
});
