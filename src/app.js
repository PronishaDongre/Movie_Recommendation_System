let express = require("express");
let bodyparser = require("body-parser");
let mysql = require("./config/db.js")
let router = require("./route/Register_router.js");
let path = require("path");

let app = express();

app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.set('view engine', 'ejs');
const session = require("express-session");

app.use(session({
    secret: "my-secret-key",        // 🔒 Keep this strong and hidden in real apps
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false }       // ✅ Set to true only with HTTPS
}));


app.use("/", router);

app.get("/", (req, res) => {
    res.render("home.ejs");
});

module.exports = app;