// load express, create express app and load middleware
const express = require("express");
const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// route
const routes = require("./routes/routes");
app.use("/", routes);

// Boot up server
const port = process.env.PORT || 1337;
app.listen(port, () => console.log(`Listening on port ${port}`));
