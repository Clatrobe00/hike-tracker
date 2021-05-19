const express = require("express");
const morgan = require("morgan");
const path = require("path");
const mongoose = require("mongoose");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan("tiny"));



// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Define API routes here

const HikeRoutes = require("./routes/HikeAPI");

app.use(HikeRoutes);

// Send every request to the React app
// Define any API routes before this runs
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/public/index.html"));
});

// Define Mongoose Connection (local host only right now)

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/hikes", {
  useNewUrlParser: true,
  useUnifiedTopology: true 
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("connected to db!");
});

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
