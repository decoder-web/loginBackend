const express = require("express");
const bodyParser = require("body-parser");
const dbConnection = require("./connections/db");
const path = require("path");
var cors = require("cors");

// database connection
dbConnection
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

const app = express();

app.use(cors());
//use the public folder to serve web pages
app.use(express.static(path.join(__dirname, "public")));

// parse application/x-www-form-urlencoded
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);

// parse application/json
app.use(bodyParser.json());

// api routes
app.use("/api/user", require("./api/user"));

app.get("/*", (req, res) => {
  res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(process.env.PORT || 3000, () => console.log("server is Up"));