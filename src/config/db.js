let espress = require("express")
let mysql = require("mysql2");
let bcrypt=require("bcrypt");
require("dotenv").config();

let conn = mysql.createConnection({
    host:process.env.DB_HOST,
    user:process.env.DB_USER,
    password:process.env.DB_PASS,
    database:process.env.DB_NAME
});

conn.connect((err)=>{
    if(err){
        console.log("not connected");
    }
    else{
        console.log("connected");
    }
});
module.exports = conn;