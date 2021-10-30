const mysql = require("mysql2");

//connecting to db
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123456789",
    database: "employees",
},
console.log("You are connected to the employees database!"));

module.exports = db;