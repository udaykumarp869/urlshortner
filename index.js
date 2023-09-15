var express = require("express");
const bodyParser = require("body-parser");
const router = require("./routes");
const path = require("path");

const port = 2000;

var app = express();

const db = require("./models/index");
const UrlShortener = require("./models/UrlShortner");

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// Ignore requests for favicon.ico
app.get('/favicon.ico', (req, res) => {
    res.status(204).end();
  });
  
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, '/public')));

// Serve an HTML page with a form for URL input
app.get('/home', (req, res) => {
    res.sendFile(__dirname + '/public/index.html'); // Create a public directory and place your HTML file there
  });



db.sequelize
  .sync({ force: false })
  .then(() => {
    console.log("syncing db");
  })
  .catch((err) => {
    console.log("error", err);
  });

  app.use("/", router);


app.listen(port, () => {
  console.log("server started");
});