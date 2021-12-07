// load express, create express app and load middleware
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// load CORS
const cors = require("cors");
app.use(cors());

// route
const routes = require("./routes/routes");
app.use("/", routes, express.static("public/views"));



// Boot up server
const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening on port ${port}`));

module.exports = app;
