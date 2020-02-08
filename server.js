const express = require("express");
const mongoose = require("mongoose");

const PORT = process.env.PORT || 3000;

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// routes
app.use(require("./routes/api.js"));

mongoose.Promise = global.Promise;

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://budgetuser:Ktbuh165!@ds035488.mlab.com:35488/heroku_qmcvlkvr", 
  {
  useMongoClient: true
  }
);




app.listen(PORT, () => {
  console.log(`App running on port ${PORT}!`);
});
